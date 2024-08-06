/**
 * The runtime context of the game EMU system.
 */
export type EMU = {
  /**
   * Is emulator paused
   */
  paused: boolean
  /**
   * Is emulator running
   */
  running: boolean
  /**
   * EMU processor or timer ticks
   */
  ticks: bigint
  /**
   * Main run method of the emulator.
   * @returns EMU runtime status code.
   */
  run: () => number
}
