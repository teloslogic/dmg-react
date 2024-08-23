/**
 * Emulator Components:
 *
 * |Cartridge|
 * |CPU - Central Processing Unit|
 * |Address Bus|
 * |PPU - Pixel Processing Unit|
 * |Timer|
 * |APU - Audio Processing Unit|
 */
export type Emulator = {
  /**
   * Main run method of the emulator.
   * @returns EMU runtime status code.
   */
  run: () => number
}
