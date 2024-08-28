/* eslint-disable no-magic-numbers */
import {describe, expect, it} from 'vitest'

import readRegister from '../read.register'
import {Registers} from '../../emulator/cpu/registers'
import {RegistersOf} from '../../emulator/cpu/registers.of'
import U8BitOf from '../../types/u8.bit.of'
import {RegisterType} from '../../emulator/cpu/instructions'

describe('The readRegister utility function', () => {
  it('should be able to return the proper value of the AF register', () => {
    const registers: Registers = RegistersOf()
    const registerA = U8BitOf(0xa1)
    const registerB = U8BitOf(0x02)

    registers.A = registerA
    registers.B = registerB

    const getRegister = readRegister(registers)

    const result = getRegister(RegisterType.RT_AF)

    expect(result.getNumber()).toBe(41218)
  })

  it('should be able to return the proper value of the BC register', () => {
    const registers: Registers = RegistersOf()
    const registerB = U8BitOf(0x01)
    const registerC = U8BitOf(0xc4)

    registers.B = registerB
    registers.C = registerC

    const getRegister = readRegister(registers)

    const result = getRegister(RegisterType.RT_BC)

    expect(result.getNumber()).toBe(452)
  })

  it('should be able to return the proper value of the DE register', () => {
    const registers: Registers = RegistersOf()
    const registerD = U8BitOf(0x01)
    const registerE = U8BitOf(0x01)

    registers.D = registerD
    registers.E = registerE

    const getRegister = readRegister(registers)

    const result = getRegister(RegisterType.RT_DE)

    expect(result.getNumber()).toBe(257)
  })

  it('should be able to return the proper value of the HL register', () => {
    const registers: Registers = RegistersOf()
    const registerH = U8BitOf(0xa0)
    const registerL = U8BitOf(0x22)

    registers.H = registerH
    registers.L = registerL

    const getRegister = readRegister(registers)

    const result = getRegister(RegisterType.RT_HL)

    expect(result.getNumber()).toBe(40994)
  })
})
