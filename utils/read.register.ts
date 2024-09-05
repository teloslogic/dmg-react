/* eslint-disable no-magic-numbers */
import {RegisterType} from '../emulator/cpu/instructions'
import {Registers} from '../emulator/cpu/registers'
import U16Bit from '../types/u16.bit'
import U16BitOf from '../types/u16.bit.of'

const readRegister =
  (registers: Registers) =>
  (registerType: RegisterType | undefined): U16Bit => {
    switch (registerType) {
      case RegisterType.RT_A:
        return U16BitOf(registers.A.getNumber())
      case RegisterType.RT_F:
        return U16BitOf(registers.F.getNumber())
      case RegisterType.RT_B:
        return U16BitOf(registers.B.getNumber())
      case RegisterType.RT_C:
        return U16BitOf(registers.C.getNumber())
      case RegisterType.RT_D:
        return U16BitOf(registers.D.getNumber())
      case RegisterType.RT_E:
        return U16BitOf(registers.E.getNumber())
      case RegisterType.RT_H:
        return U16BitOf(registers.H.getNumber())
      case RegisterType.RT_L:
        return U16BitOf(registers.L.getNumber())

      case RegisterType.RT_AF:
        return U16BitOf(0x0000)
          .setMostSignificantByte(registers.A.getNumber())
          .setLeastSignificantByte(registers.B.getNumber())
      case RegisterType.RT_BC:
        return U16BitOf(0x0000)
          .setMostSignificantByte(registers.B.getNumber())
          .setLeastSignificantByte(registers.C.getNumber())
      case RegisterType.RT_DE:
        return U16BitOf(0x0000)
          .setMostSignificantByte(registers.D.getNumber())
          .setLeastSignificantByte(registers.E.getNumber())
      case RegisterType.RT_HL:
        return U16BitOf(0x0000)
          .setMostSignificantByte(registers.H.getNumber())
          .setLeastSignificantByte(registers.L.getNumber())

      case RegisterType.RT_SP:
        return registers.SP
      case RegisterType.RT_PC:
        return registers.PC

      default:
        return U16BitOf(0x0000)
    }
  }

export default readRegister
