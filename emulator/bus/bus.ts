/* eslint-disable no-magic-numbers */
import U8Bit from '../../types/u8.bit'
import U8BitOf from '../../types/u8.bit.of'
import U16Bit from '../../types/u16.bit'

import {Cartridge} from '../cartridge/cartridge'

// Memory Map:
// 0x0000 - 0x3FFF : ROM Bank 0 (ROM0) - Non-switchable ROM Bank.
// 0x4000 - 0x7FFF : ROM Bank 1 (ROMX) - Switchable ROM Bank.
// 0x8000 - 0x9FFF : CHR RAM (VRAM) - Video RAM, switchable (0-1) in GBC mode.
// 0x9800 - 0x9BFF : BG Map 1
// 0x9C00 - 0x9FFF : BG Map 2
// 0xA000 - 0xBFFF : Cartridge RAM
// 0xC000 - 0xCFFF : RAM Bank 0
// 0xD000 - 0xDFFF : RAM Bank 1-7 - switchable - Color only
// 0xE000 - 0xFDFF : Reserved - Echo RAM
// 0xFE00 - 0xFE9F : Object Attribute Memory
// 0xFEA0 - 0xFEFF : Reserved - Unusable
// 0xFF00 - 0xFF7F : I/O Registers
// 0xFF80 - 0xFFFE : Zero Page

export type Bus = {
  read: (address: U16Bit) => U8Bit
  write: (address: U16Bit, value: U8Bit) => void
}

export const BusOf = (cartridge: Cartridge): Bus => {
  return {
    read: (address: U16Bit): U8Bit => {
      if (address.getNumber() < 0x8000) {
        return cartridge.read(address)
      } else {
        return U8BitOf(0x00)
      }
    },
    write: (address: U16Bit, value: U8Bit): void => {
      if (address.getNumber() < 0x8000) {
        return cartridge.write(address, value)
      }
    }
  }
}
