import U8Bit from './u8.bit'

/**
 * Factory function that creates a U8Bit type.
 * @param value The number value
 * @returns a new U8Bit type.
 */
const U8BitOf = (value: number): U8Bit => {
  const MAX = 256
  const INDEX = 0
  const COUNT = 2
  const INT_OFFSET = 0xff
  const NIBBLE_OFFSET = 0b1111
  const DECIMAL_OFFSET = 4
  const ERROR_VALUE = 0

  const typedArray = new Uint8Array([value & INT_OFFSET])

  typedArray[INDEX] = value <= MAX ? typedArray[INDEX] : ERROR_VALUE

  return {
    getAsBinaryString: (): string => (typedArray[INDEX] >>> INDEX).toString(COUNT),
    getAsDecimalValue: (): number => typedArray[INDEX] & INT_OFFSET,
    getLowerNibble: (): number => typedArray[INDEX] & NIBBLE_OFFSET & INT_OFFSET,
    getUpperNibble: (): number => (typedArray[INDEX] >> DECIMAL_OFFSET) & NIBBLE_OFFSET & INT_OFFSET
  }
}

export default U8BitOf
