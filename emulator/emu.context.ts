/**
 * The runtime context of the game EMU system.
 */
export type EMUContext = {
  /**
   * Is emulator paused
   */
  paused: boolean
  /**
   * Is emulator running
   */
  running: boolean
  /**
   * EMU timer ticks
   */
  ticks: bigint
}
