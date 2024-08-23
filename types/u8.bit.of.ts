import U8Bit from './u8.bit'

/**
 * Factory function that creates a U8Bit type.
 * @param value The number value
 * @returns a new U8Bit type.
 */
const U8BitOf = (value: number): U8Bit => {
  const INDEX = 0
  const COUNT = 2
  const COUNT_VALUE = 1
  const INT_OFFSET = 0xff
  const NIBBLE_OFFSET = 0b1111
  const DECIMAL_OFFSET = 4

  const typedArray = new Uint8Array([value & INT_OFFSET])

  return {
    decrement: (): U8Bit => U8BitOf(typedArray[INDEX] - (COUNT_VALUE & INT_OFFSET)),
    getLowerNibble: (): number => typedArray[INDEX] & NIBBLE_OFFSET & INT_OFFSET,
    getNumber: (): number => typedArray[INDEX] & INT_OFFSET,
    getUpperNibble: (): number => (typedArray[INDEX] >> DECIMAL_OFFSET) & NIBBLE_OFFSET & INT_OFFSET,
    increment: (): U8Bit => U8BitOf(typedArray[INDEX] + (COUNT_VALUE & INT_OFFSET)),
    toString: (): string => (typedArray[INDEX] >>> INDEX).toString(COUNT)
  }
}

export default U8BitOf
