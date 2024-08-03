/**
 * The runtime context of the game emulation system.
 */
export type EMUContext = {
  paused: boolean
  running: boolean
  ticks: bigint
}
