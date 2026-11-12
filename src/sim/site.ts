// Test-site configuration for the synthetic simulation field — the single place for site and mission parameters.
// The viewport is a procedural dot-grid field (no photograph, depth map or calibration is read).
import type { World } from './world';

type V3 = [number, number, number];

export const SITE = {
  name: 'Simulation field',
  /** Configured separation of the two beacons (metres). */
  p1p2DistanceM: 24.2,
  distanceIsEstimate: false,
  distanceM: 24.2,
  /** Mission parameters. */
  targetAltitudeM: 12,
  climbRateMps: 1.5,
  /** The drone model is ~0.6 m across (≈ the real X-frame); shown 1.2× so it reads clearly at mission distances. */
  droneDisplayScale: 1.2,
  /** Extra display scale applied with altitude (+28 % at cruise) so the drone reads clearly in hold. Visual only. */
  holdScaleBoost: 0.28,
  /** Launch point relative to the Point 1 beacon (world metres) so the drone never intersects the beacon pillar. */
  launchOffsetM: { x: -1.1, z: 0.15 },
  quality: 'auto' as 'auto' | 'high' | 'low',
  // engine frame (metres): Point 1 at the origin; Point 2 along the local route axis ("north" = −z)
  start: { x: 0, z: 0 },
  goal: { x: 0, z: -24.2 },
  bounds: { minX: -10, maxX: 10, minZ: -24.2 - 6, maxZ: 6 },
};
export type SiteConfig = typeof SITE;

/** Height of the beacon light pillars (metres). */
export const BEACON_H = 2.4;

/** World positions of the two beacons (ground contact) and the drone's launch point. Route runs along −Z. */
export const P1W: V3 = [0, 0, 0];
export const P2W: V3 = [0, 0, -SITE.p1p2DistanceM];
export const LAUNCH: V3 = [P1W[0] + SITE.launchOffsetM.x, 0, P1W[2] + SITE.launchOffsetM.z];

/** The site "world": no synthetic obstacles and no synthetic point cloud. */
export function createSiteWorld(seed = 2205): World {
  return { seed, obstacles: [], cloud: { positions: new Float32Array(0), intensity: new Float32Array(0), count: 0 } };
}
