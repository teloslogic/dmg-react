/* eslint-disable no-magic-numbers */
import U16Bit from '../types/u16.bit'
import U16BitOf from '../types/u16.bit.of'

/**
 * Reverse/Substritute low byte value with high byte value
 * @param value Two byte value
 * @returns U16bit
 */
const reverse = (value: U16Bit): U16Bit =>
  U16BitOf(((value.getNumber() & 0xff00) >> 8) | ((value.getNumber() & 0x00ff) << 8))

export default reverse
