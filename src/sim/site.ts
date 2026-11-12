// Real test-site configuration — the SINGLE place for photo, registration and site parameters.
//
// Photo: ~/ms_demo/"WhatsApp Image 2026-11-12 at 8.18.53 PM (1).jpeg" — the only landscape shot
// (1280×684 native), taken from the side so Point 1 (right) and Point 2 (left) are clearly separated.
// Served at native resolution as public/site/test-site-landscape.jpg (JPEG q92), enhanced with Pillow:
// auto-levels (0.3 % cutoff, tone preserved), soft highlight roll-off above 205 (floodlight glare),
// contrast ×1.06, colour ×1.05, unsharp mask r1.3/55 %. Nothing inpainted, added or removed.
//
// Pillar identity: the near pole carries the same "Vixen" print as Point 1 in the team's annotated photo
// (8.30.50 PM); the far pole stands by the same dark object and round shrubs as Point 2 there.
// Pixel coordinates were MEASURED on the native photo (white-pixel analysis + gridded zoom crops).
import type { World } from './world';

export const MEASURED_DISTANCE_M: number | null = null;
/** Estimated from the earlier rear-view photo (pinhole fit, residual < 1 px); same physical pillars. */
const ESTIMATED_DISTANCE_M = 24.22;
const D = MEASURED_DISTANCE_M ?? ESTIMATED_DISTANCE_M;
const base = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';

export const SITE = {
  name: 'Test site',
  photo: {
    src: `${base}site/test-site-landscape.jpg`,
    width: 1280,
    height: 684,
    original: 'WhatsApp Image 2026-11-12 at 8.18.53 PM (1).jpeg',
  },
  /** Point 1 — START (near pillar, right). The pole leans in the photo: top cap → base on the grass. */
  p1: { base: { x: 1249, y: 636 }, top: { x: 1150, y: 141 }, box: { x0: 1126, y0: 136, x1: 1274, y1: 640 } },
  /** Point 2 — DESTINATION (far pillar, left). Thin leaning shaft: top → base on the grass. */
  p2: { base: { x: 259, y: 305 }, top: { x: 242, y: 250 }, box: { x0: 236, y0: 246, x1: 264, y1: 309 } },
  /** Where the virtual drone stands before takeoff (= Point 1 base); its shadow is drawn here. */
  groundAnchor: { x: 1249, y: 640 },
  /**
   * Altitude DISPLAY scale (image px per metre) for the screen-vertical altitude stem above Point 1.
   * True perspective would put 8 m ~3500 px above the frame (pillar ≈ 495 px tall for ≈ 1.13 m), so a
   * declared display scale is used; 8 m → 336 px keeps the drone clear of the pillar top and of Point 2.
   */
  altitudePxPerM: 42,
  /** Takeoff climb rate (m/s). 1.5 m/s ≈ 5.5 s to 8 m — set to match the real drone. */
  climbRateMps: 1.5,
  /** Our real drone is visible in the photo here (bottom centre): never cover it with a label. */
  realDroneBox: { x0: 640, y0: 598, x1: 872, y1: 684 },
  distanceM: D,
  distanceIsEstimate: MEASURED_DISTANCE_M === null,
  // engine frame (metres): Point 1 at the origin, Point 2 along the local route axis ("north" = −z)
  start: { x: 0, z: 0 },
  goal: { x: 0, z: -D },
  bounds: { minX: -10, maxX: 10, minZ: -D - 6, maxZ: 6 },
};
export type SiteConfig = typeof SITE;

/** Image-space position of the virtual drone: straight up (screen-vertical) from the ground anchor. */
export function droneImagePoint(altM: number) {
  return { x: SITE.groundAnchor.x, y: SITE.groundAnchor.y - Math.max(0, altM) * SITE.altitudePxPerM };
}

/** The site "world": no synthetic obstacles and no synthetic point cloud. */
export function createSiteWorld(seed = 2205): World {
  return { seed, obstacles: [], cloud: { positions: new Float32Array(0), intensity: new Float32Array(0), count: 0 } };
}
