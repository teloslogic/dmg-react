import {ChangeEvent} from 'react'
import {CartridgeHeader} from './cartridge/cartridge.header'

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
   * Game cartridge meta data
   * @returns Cartridge meta data.
   */
  getCartridgeHeader: () => CartridgeHeader
  /**
   * Get the number of CPU cycles
   * @returns CPU ticks
   */
  getTicks: () => number
  /**
   * Loads the game cartridge into ROM.
   * @param event File load change event handler for an html input element.
   * @returns void
   */
  openROMFile: (event: ChangeEvent<HTMLInputElement>) => void
  /**
   * Main run method of the emulator.
   * @returns EMU runtime status code.
   */
  run: () => number
}
