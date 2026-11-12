# AEGIS — Autonomous Navigation & Mission Intelligence

A browser-based mission console for a virtual autonomous aircraft flying through a procedurally generated LiDAR environment, without GPS.
All environment, sensor and telemetry data is generated in the browser. There is no PX4/ROS/Gazebo dependency, no network traffic and no link to any vehicle.

## Run
```bash
cd ~/bput-ps05-mission-control-demo
npm install                 # once; works offline afterwards
npm run dev                 # http://127.0.0.1:5180
npm run build && npm run preview   # production build at http://127.0.0.1:5181
```

## Simulation field (default view)
The viewport is a fully synthetic aerospace simulation field. No photograph, depth map or calibration is read.
(The earlier 2.5D photo-scene inputs are archived, unused, in `archive/photo-scene/`, outside `public/`, so they are not bundled.)

`src/components/Scene3D.tsx` renders:
- a dark navy sky (vertical gradient shader) with a faint procedural starfield;
- a glowing cyan perspective dot-grid ground (GPU points; major dots every 5 m), fading toward the horizon and the field edge. There is no fog;
- radar range rings at 5, 10 and 15 m around the drone's home, with radial ticks every 30° and a slow sweep;
- two beacons, each a thin light pillar with a base ring and CSS2D label: **POINT 1 — START** (cyan) and **POINT 2 — DESTINATION** (amber), `p1p2DistanceM` 24.2 m apart;
- the dashed, glowing route between them, labelled "route not flown";
- the procedural X-frame drone (`drone3d.ts`), with a focal halo, a camera-relative cyan rim light, a viewer-side fill light, boosted LED/strobe glow and bloom. It also gets a contact glow, blob shadow and dashed altitude stem;
- CSS2D labels with collision avoidance, plus the camera director (AUTO, WIDE, FOLLOW, ORBIT, TACTICAL, RESET; drag, wheel, click and double-click);
- day/night (day is a lighter deep-blue grid, never a photo), bloom, and auto quality. HIGH falls back to LOW below 45 fps; LOW uses a coarser grid of 1.5 m spacing over a 45 m radius.

The config keys live in `src/sim/site.ts`: `targetAltitudeM` 12, `climbRateMps` 1.5, `p1p2DistanceM` 24.2, `BEACON_H`, `droneDisplayScale`, `launchOffsetM` and `quality`.
`window.__aegisScene.env` (DEV only) reports `{kind:'grid', photo:false, fog:false, gridPoints, beacons:{p1,p2}}` for the tests.

## Mission flow (central state machine: `TRANSITIONS` in `src/sim/engine.ts`)
```
WELCOME ─INITIALIZE→ INITIALIZING ─(checks done)→ READY ─CONTINUE→ BRIEFING ─PROCEED→ STANDBY
STANDBY ─START MISSION (mouse click only)→ COUNTDOWN ─(5 s)→ TAKEOFF ─(cruise alt)→ AUTONOMOUS_TRANSIT
AUTONOMOUS_TRANSIT ─HOLD→ MANUAL_HOLD ─RESUME AUTO (replans from here)→ AUTONOMOUS_TRANSIT
AUTONOMOUS_TRANSIT ─(obstacle < 2 m on the next 8 m of route)→ ROUTE_BLOCKED ─RECALCULATE→ AUTONOMOUS_TRANSIT
MANUAL_HOLD ─RESUME AUTO with no feasible route→ ROUTE_BLOCKED ;  ROUTE_BLOCKED ─HOLD→ MANUAL_HOLD
AUTONOMOUS_TRANSIT ─(route end reached)→ LANDING ─(touchdown)→ COMPLETE
any active state ─PAUSE→ PAUSED ─RESUME→ (previous state) ;  any active/paused/complete ─RESET→ STANDBY
```

## Clock policy (single fixed-step clock: `Engine.advance`)
| State | What advances |
|---|---|
| WELCOME, READY, BRIEFING, STANDBY, COMPLETE | nothing |
| INITIALIZING | the initialization checks only |
| COUNTDOWN | the countdown only |
| TAKEOFF, AUTONOMOUS_TRANSIT, LANDING | mission time, physics and LiDAR at 10 Hz |
| MANUAL_HOLD, ROUTE_BLOCKED | aircraft stationary: velocity 0, position and route progress frozen. Mission time and the hold timer keep running. LiDAR keeps monitoring from the fixed point, so returns stay constant and the sensor shows "Scanning · stationary". A banner with RESUME AUTO or RECALCULATE stays visible, and the log adds a reminder every 60 s. |
| PAUSED | everything frozen, including the mission clock, the countdown and LiDAR |

## Action availability (`ACTIONS` in `src/sim/engine.ts`, used by both the engine and the UI)
| State | Enabled |
|---|---|
| STANDBY | START MISSION, RECALCULATE, NEW ENVIRONMENT |
| COUNTDOWN, TAKEOFF, LANDING | PAUSE, RESET |
| AUTONOMOUS_TRANSIT | PAUSE, HOLD, RECALCULATE, RESET |
| MANUAL_HOLD | RESUME AUTO, manual flight controls, PAUSE, RESET |
| ROUTE_BLOCKED | RECALCULATE, HOLD, PAUSE, RESET |
| PAUSED | RESUME, RESET |
| COMPLETE | RESET |

Keyboard: W/S, A/D and R/F work in MANUAL_HOLD only. Space pauses or resumes, and is ignored when a button has focus. C resets the camera, M mutes, and Esc closes dialogs. Enter is never handled globally.

## Routes
- A route is one object (`engine.route`): its revision, waypoints, a dense flown path that passes exactly through every waypoint, cumulative lengths, and validated clearance.
- The briefing, navigation panel, 3D labels, minimap and flight model all read this same object.
- R1 is the initial plan. Each recalculation creates R2, R3 and so on, and every view updates together.
- Each smoothed route is checked to keep at least 2.9 m of horizontal clearance. If a smooth curve would cut a corner, the engine falls back to a tighter curve, down to the exact A* polyline.

## Tests
```bash
npm run test:unit                 # headless engine tests (node:test), ~25 s
npm run dev &                     # then, in another shell:
npm run test:e2e                  # real browser, 60 s idle at every waiting stage (~12 min)
npm run test:takeoff              # takeoff → automatic hold, 60 s stationary, 8 denied commands
npm run test:restricted           # the 8 restricted buttons (LONG=30 default)
npm run test:scene                # grid scene: night+day × 1366/1920, screenshots (.tests/shots/grid), grid/beacons/no-photo, overlap, ALT, 60 s hold, FPS
npm run test:layout               # every screen at 1280×720 … 1920×1080 incl. 125/150 % scaling
IDLE=5 npm run test:e2e           # quick variant
```

## Telemetry model
Velocity is the exact derivative of position over each simulation step, and ground speed and vertical speed come from that velocity.
- Route progress = route distance flown / (flown + remaining).
- Remaining = (route length − arc position), plus the offset from the route while in manual hold.
- A waypoint counts as reached when the arc position passes its exact arc length on the Catmull-Rom curve.
- Obstacle distances use the obstacle geometry.
- LiDAR scans run at 10 Hz of simulation time from the aircraft's position.

## Files
- `src/sim/world.ts`: seeded obstacles, synthetic point cloud, A* planner
- `src/sim/engine.ts`: state machine, clock, flight model, perception
- `src/components/Scene.tsx`: Three.js viewport
- `src/components/MiniMap.tsx`: top-down map
- `src/components/{Screens,Panels,ui}.tsx`, `src/App.tsx`, `src/styles.css`: interface
