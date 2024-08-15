import {describe, it, expect} from 'vitest'

import U8Bit from '../u8.bit'
import U8BitOf from '../u8.bit.of'

describe('The unsigned 8 bit integer type U8Bit', () => {
  it('should be able to be constructed from a binary number', () => {
    const BINARY_VALUE = 0b10010011
    const RESULT_DECIMAL_VALUE = 147

    const u8bit: U8Bit = U8BitOf(BINARY_VALUE)

    expect(u8bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
    expect(`${u8bit}`).toEqual('10010011')
  })

  it('should be able to be constructed from a hexidecimal number', () => {
    const HEX_VALUE = 0x0a
    const RESULT_DECIMAL_VALUE = 10

    const u8bit: U8Bit = U8BitOf(HEX_VALUE)

    expect(u8bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should wrap around with value 256', () => {
    const DECIMAL_VALUE = 256
    const RESULT_DECIMAL_VALUE = 0

    const u8bit: U8Bit = U8BitOf(DECIMAL_VALUE)

    expect(u8bit.getNumber()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to get its lower nibble value', () => {
    const HEX_VALUE = 0xf3
    const RESULT_DECIMAL_VALUE = 3

    const u8bit: U8Bit = U8BitOf(HEX_VALUE)

    expect(u8bit.getLowerNibble()).toEqual(RESULT_DECIMAL_VALUE)
  })

  it('should be able to get its upper nibble value', () => {
    const HEX_VALUE = 0xf3
    const RESULT_DECIMAL_VALUE = 15

    const u8bit: U8Bit = U8BitOf(HEX_VALUE)

    expect(u8bit.getUpperNibble()).toEqual(RESULT_DECIMAL_VALUE)
  })
})
