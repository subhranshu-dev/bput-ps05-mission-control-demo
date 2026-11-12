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

## Real test site (default view)
The central view shows the landscape photo `~/ms_demo/WhatsApp Image 2026-11-12 at 8.18.53 PM (1).jpeg`, taken side-on at a native 1280×684. It is served at native resolution as `public/site/test-site-landscape.jpg` (JPEG q92), enhanced with Pillow: auto-levels, a highlight roll-off for floodlight glare, mild contrast and colour, and a light unsharp mask. Nothing is added or removed. Everything about the site lives in one config file, `src/sim/site.ts`:

| Key | Value (image px) |
|---|---|
| Point 1 (start, near pole) | base (1249, 636), top (1150, 141) |
| Point 2 (destination, far pole) | base (259, 305), top (242, 250) |
| `groundAnchor` (drone start / shadow) | (1249, 640) |
| `altitudePxPerM` | 42 (display scale for the vertical altitude stem; true perspective would put 8 m off-frame) |
| `climbRateMps` | 1.5 (≈ 5.7 s to 8 m) |
| `realDroneBox` (our real drone in the photo, never labelled over) | x 640–872, y 598–684 |

- **Distance:** the P1→P2 distance of ≈24.2 m is an estimate from the earlier rear-view photo. Set `MEASURED_DISTANCE_M` once the real distance is measured.
- **Hold:** takeoff ends in an automatic MANUAL HOLD. All 8 manual buttons, RESUME AUTO and PAUSE show COMMAND DENIED while held, and only RESET leaves the hold. The mission clock T+ keeps running during the hold.

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
npm run test:site                 # native photo, pillar alignment at 5 window sizes × 2 views
npm run test:photo                # screenshots + drone visibility/overlap/telemetry/10-button checks (OUT=dir)
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
