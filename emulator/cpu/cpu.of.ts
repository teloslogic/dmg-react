/* eslint-disable no-magic-numbers */
import {CPU} from './cpu'
import {Registers} from './registers'
import {Instructions} from './instructions.of'
import {AddressingMode, Instruction} from './instructions'
import {Bus} from '../bus/bus'

import U8Bit from '../../types/u8.bit'
import U8BitOf from '../../types/u8.bit.of'
import U16BitOf from '../../types/u16.bit.of'
import U16Bit from '../../types/u16.bit'

import readRegister from '../../utils/read.register'

export const CPUCOf = (registers: Registers, instructions: Instructions, bus: Bus): CPU => {
  let currentOpcode: U8Bit
  let currentInstruction: Instruction
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let fetchedData: U16Bit

  const private_cycles = (cycles: number): void => console.log(`CPU Cycles set to: ${cycles}`)

  return {
    cycles: (cycles: number): void => private_cycles(cycles),
    execute: (): void => {},
    fetchData: (): void => {
      if (currentInstruction === undefined) {
        return
      }

      switch (currentInstruction.mode) {
        case AddressingMode.AM_IMP:
          return
        case AddressingMode.AM_R:
          fetchedData = readRegister(registers)(currentInstruction.regOne)
          return
        case AddressingMode.AM_R_D8:
          fetchedData = U16BitOf(bus.read(registers.PC).getNumber())
          private_cycles(1)
          registers.PC = registers.PC.increment()
          return
        case AddressingMode.AM_D16:
          // eslint-disable-next-line no-case-declarations
          const lo: U8Bit = bus.read(registers.PC)
          private_cycles(1)

          registers.PC = registers.PC.increment()
          // eslint-disable-next-line no-case-declarations
          const hi: U8Bit = bus.read(registers.PC)
          private_cycles(1)

          fetchedData = U16BitOf(0x0000)
            .setLeastSignificantByte(lo.getNumber())
            .setMostSignificantByte(hi.getNumber())
          registers.PC = registers.PC.increment().increment()

          return
        default:
          console.log(`Unknown Addressing Mode: ${currentInstruction.mode}`)
          return
      }
    },
    fetchInstruction: (): void => {
      currentOpcode = bus.read(registers.PC)
      registers.PC = registers.PC.increment()
      currentInstruction = instructions.getInstructionWith(currentOpcode.getNumber())
    },
    init: (): void => {
      registers.PC = U16BitOf(0x0100)
      registers.A = U8BitOf(0x01)
    },
    step: (): boolean => false
  }
}
