/* eslint-disable no-magic-numbers */
import {ConditionType, Instruction, InstructionType} from './instructions'
import {Registers} from './registers'

import bitGet from '../../utils/bit.get'
import bitSet from '../../utils/bit.set'

import U16Bit from '../../types/u16.bit'
import U8BitOf from '../../types/u8.bit.of'

type ProcFunc = () => void

export type CPUProcessors = {
  getProcessorWith: (instructionType: InstructionType) => ProcFunc
}

export const CPUProcessorsOf = (
  currentInstruction: Instruction,
  registers: Registers,
  fetchedData: U16Bit,
  cycles: (cycles: number) => void
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let instrumentMainEnabled = false

  const setFlags = (z: boolean, n: boolean, h: boolean, c: boolean) => {
    registers.F = U8BitOf(bitSet(7)(z)(registers.F.getNumber()))
    registers.F = U8BitOf(bitSet(6)(n)(registers.F.getNumber()))
    registers.F = U8BitOf(bitSet(5)(h)(registers.F.getNumber()))
    registers.F = U8BitOf(bitSet(4)(c)(registers.F.getNumber()))
  }

  const checkCondition = (): boolean => {
    const cpuFlagZ = bitGet(7)(registers.F.getNumber())
    const cpuFlagC = bitGet(4)(registers.F.getNumber())

    switch (currentInstruction.condition) {
      case ConditionType.CT_NONE:
        return true
      case ConditionType.CT_C:
        return Boolean(cpuFlagC)
      case ConditionType.CT_NC:
        return !cpuFlagC
      case ConditionType.CT_Z:
        return Boolean(cpuFlagZ)
      case ConditionType.CT_NZ:
        return !cpuFlagZ
      default:
        return false
    }
  }

  const procNONE = (): void => console.log('Invalid Instruction')
  const procNOP = (): void => {}
  const procLD = (): void => {}
  const procXOR = (): void => {
    registers.A = registers.A.XOR(U8BitOf(fetchedData.getNumber()))

    if (registers.A.getUpperNibble() === 0b0000) {
      setFlags(false, false, false, false)
    }
  }
  const procJP = (): void => {
    if (checkCondition()) {
      registers.PC = fetchedData
      cycles(1)
    }
  }
  const procDI = (): void => {
    instrumentMainEnabled = false
  }

  const processors: ProcFunc[] = []

  processors[InstructionType.IN_NONE] = procNONE
  processors[InstructionType.IN_NOP] = procNOP
  processors[InstructionType.IN_LD] = procLD
  processors[InstructionType.IN_XOR] = procXOR
  processors[InstructionType.IN_JP] = procJP
  processors[InstructionType.IN_DI] = procDI

  return {
    getProcessorWith: (instructionType: InstructionType): ProcFunc => {
      return processors[instructionType]
    }
  }
}
