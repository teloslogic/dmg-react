/* eslint-disable no-magic-numbers */
import {CPU} from './cpu'
import {Registers} from './registers'
import {Instructions} from './instructions.of'
import {AddressingMode, Instruction} from './instructions'
import {Bus} from '../bus/bus'

import U8Bit from '../../types/u8.bit'
import U8BitOf from '../../types/u8.bit.of'
import U16BitOf from '../../types/u16.bit.of'
//import U16Bit from '@/types/u16.bit'

export const CPUCOf = (registers: Registers, instructions: Instructions, bus: Bus): CPU => {
  let currentOpcode: U8Bit
  let currentInstruction: Instruction | undefined
  //let fetchedData: U16Bit

  return {
    execute: (): void => {},
    fetchData: (): void => {
      if (currentInstruction === undefined) {
        return
      }

      switch (currentInstruction.mode) {
        case AddressingMode.AM_IMP:
          return
        default:
          console.log(`Unknown Addressing Mode: ${currentInstruction.mode}`)
          break
      }
    },
    fetchInstruction: (): void => {
      registers.PC = U16BitOf(registers.PC.getNumber() + 1)
      currentOpcode = bus.read(registers.PC)
      currentInstruction = instructions.getInstruction(currentOpcode.getNumber())
    },
    init: (): void => {
      registers.PC = U16BitOf(0x0100)
      registers.A = U8BitOf(0x01)
    },
    step: (): boolean => false
  }
}
