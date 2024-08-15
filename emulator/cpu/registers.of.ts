/* eslint-disable no-magic-numbers */
import {Registers} from './registers'
import U8BitOf from '../../types/u8.bit.of'
import U16BitOf from '../../types/u16.bit.of'

export const RegistersOf = (): Registers => {
  return {
    A: U8BitOf(0x00),
    F: U8BitOf(0x00),
    B: U8BitOf(0x00),
    C: U8BitOf(0x00),
    D: U8BitOf(0x00),
    E: U8BitOf(0x00),
    H: U8BitOf(0x00),
    L: U8BitOf(0x00),
    SP: U16BitOf(0x0000),
    PC: U16BitOf(0x0000)
  }
}
