/* eslint-disable no-magic-numbers */
import {CPU} from './cpu'
import {Registers} from './registers'
import {Instructions} from './instructions.of'
import {AddressingMode, Instruction, InstructionType} from './instructions'
import {Bus} from '../bus/bus'
import {CPUProcessors, CPUProcessorsOf} from './cpu.processors'

import U8Bit from '../../types/u8.bit'
import U8BitOf from '../../types/u8.bit.of'
import U16BitOf from '../../types/u16.bit.of'
import U16Bit from '../../types/u16.bit'

import readRegister from '../../utils/read.register'

export const CPUCOf = (registers: Registers, instructions: Instructions, bus: Bus): CPU => {
  let currentOpcode: U8Bit
  let currentInstruction: Instruction = {type: InstructionType.IN_NONE}
  let fetchedData: U16Bit = U16BitOf(0x0000)

  const private_cycles = (cycles: number): void => console.log(`CPU Cycles set to: ${cycles}`)

  const cpuPocessors: CPUProcessors = CPUProcessorsOf(
    currentInstruction,
    registers,
    fetchedData,
    private_cycles
  )

  return {
    cycles: (cycles: number): void => private_cycles(cycles),
    execute: (): void => {
      const proccesor: () => void = cpuPocessors.getProcessorWith(currentInstruction.type)
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      proccesor ? proccesor() : console.log()
    },
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
          {
            const lo: U8Bit = bus.read(registers.PC)
            private_cycles(1)

            registers.PC = registers.PC.increment()
            const hi: U8Bit = bus.read(registers.PC)
            private_cycles(1)

            fetchedData = U16BitOf(0x0000)
              .setLeastSignificantByte(lo.getNumber())
              .setMostSignificantByte(hi.getNumber())
            registers.PC = registers.PC.increment().increment()
          }

          return

        default:
          console.log(`Unknown Addressing Mode: ${currentInstruction.mode}`)
          return
      }
    },
    fetchInstruction: (): void => {
      currentOpcode = bus.read(registers.PC.increment())
      currentInstruction = instructions.getInstructionWith(currentOpcode.getNumber())
    },
    getFetchedData: (): U16Bit => fetchedData,
    init: (): void => {
      registers.PC = U16BitOf(0x0100)
      registers.A = U8BitOf(0x01)
    },
    step: (): boolean => false
  }
}
