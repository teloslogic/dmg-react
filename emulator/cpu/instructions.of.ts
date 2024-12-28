/* eslint-disable no-magic-numbers */
import {AddressingMode, Instruction, InstructionType, RegisterType} from './instructions'

export type Instructions = {
  getInstructionWith: (opcode: number) => Instruction
  getInstructionTypeName: (instructionType: InstructionType) => string
}

export const InstructionsOf = (): Instructions => {
  const instructions: Instruction[] = []

  instructions[0x00] = {type: InstructionType.IN_NOP, mode: AddressingMode.AM_IMP}
  instructions[0x05] = {type: InstructionType.IN_DEC, mode: AddressingMode.AM_R, regOne: RegisterType.RT_B}
  instructions[0x0e] = {type: InstructionType.IN_LD, mode: AddressingMode.AM_R_D8, regOne: RegisterType.RT_C}
  instructions[0xaf] = {type: InstructionType.IN_XOR, mode: AddressingMode.AM_R, regOne: RegisterType.RT_A}
  instructions[0xc3] = {type: InstructionType.IN_JP, mode: AddressingMode.AM_D16}
  instructions[0xf3] = {type: InstructionType.IN_DI}

  return {
    getInstructionWith: (opcode: number): Instruction => {
      const MAX_INDEX = 0x0100
      let instruction: Instruction

      instruction =
        opcode <= MAX_INDEX
          ? (instruction = instructions[opcode])
          : (instruction = {type: InstructionType.IN_NONE})

      return instruction
    },
    getInstructionTypeName: (instructionType: InstructionType): string => {
      const types: string[] = []

      types[InstructionType.IN_NONE] = 'None'
      types[InstructionType.IN_NOP] = 'No Operation'
      types[InstructionType.IN_LD] = 'LD'
      types[InstructionType.IN_INC] = 'INC'
      types[InstructionType.IN_DEC] = 'Decrement Data In An 8-bit Register'
      types[InstructionType.IN_RLCA] = 'RLCA'
      types[InstructionType.IN_ADD] = 'ADD'
      types[InstructionType.IN_RRCA] = 'RRCA'
      types[InstructionType.IN_STOP] = 'STOP'
      types[InstructionType.IN_RLA] = 'RLA'
      types[InstructionType.IN_JR] = 'JR'
      types[InstructionType.IN_RRA] = 'RRA'
      types[InstructionType.IN_DAA] = 'DDA'
      types[InstructionType.IN_CPL] = 'CPL'
      types[InstructionType.IN_SCF] = 'SCF'
      types[InstructionType.IN_CCF] = 'CCF'
      types[InstructionType.IN_HALT] = 'HALT'
      types[InstructionType.IN_ADC] = 'ADC'
      types[InstructionType.IN_SUB] = 'SUB'
      types[InstructionType.IN_SBC] = 'SBC'
      types[InstructionType.IN_AND] = 'AND'
      types[InstructionType.IN_XOR] = 'XOR'
      types[InstructionType.IN_OR] = 'OR'
      types[InstructionType.IN_CP] = 'CP'
      types[InstructionType.IN_POP] = 'POP'
      types[InstructionType.IN_JP] = 'JP'
      types[InstructionType.IN_PUSH] = 'PUSH'
      types[InstructionType.IN_RET] = 'RET'
      types[InstructionType.IN_CB] = 'CB'
      types[InstructionType.IN_CALL] = 'CALL'
      types[InstructionType.IN_RETI] = 'RETI'
      types[InstructionType.IN_LDH] = 'LDH'
      types[InstructionType.IN_JPHL] = 'JPHL'
      types[InstructionType.IN_DI] = 'DI'
      types[InstructionType.IN_EI] = 'EI'
      types[InstructionType.IN_RST] = 'RST'
      types[InstructionType.IN_ERR] = 'ERR'
      types[InstructionType.IN_RLC] = 'RLC'
      types[InstructionType.IN_RRC] = 'RRC'
      types[InstructionType.IN_RL] = 'RL'

      return types[instructionType]
    }
  }
}
