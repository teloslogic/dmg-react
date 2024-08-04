import U16Bit from './u16.bit'

/**
 * Factory function that creates a U16Bit type.
 * @param value The number value
 * @returns a new U16Bit type.
 */
const U16BitOf = (value: number): U16Bit => {
  const MAX = 65536
  const INDEX = 0
  const COUNT = 2
  const INT_OFFSET = 0xffff
  const SIGNIFICANT_BYTE_OFFSET = 0xff
  const DECIMAL_OFFSET = 8
  const SET_MOST_OFFSET = 0x00ff
  const SET_LEAST_OFFSET = 0xff00
  const ERROR_VALUE = 0

  const typedArray = new Uint16Array([value & INT_OFFSET])

  typedArray[INDEX] = value <= MAX ? typedArray[INDEX] : ERROR_VALUE

  return {
    getAsBinaryString: (): string => (typedArray[INDEX] >>> INDEX).toString(COUNT),
    getAsDecimalValue: (): number => typedArray[INDEX] & INT_OFFSET,
    getLeastSignificantByte: (): number => typedArray[INDEX] & SIGNIFICANT_BYTE_OFFSET,
    getMostSignificantByte: (): number => (typedArray[INDEX] >> DECIMAL_OFFSET) & SIGNIFICANT_BYTE_OFFSET,
    setLeastSignificantByte: (x: number) => U16BitOf((typedArray[INDEX] & SET_LEAST_OFFSET) | x),
    setMostSignificantByte: (x: number) =>
      U16BitOf((typedArray[INDEX] & SET_MOST_OFFSET) | (x << DECIMAL_OFFSET))
  }
}

export default U16BitOf
