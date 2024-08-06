/**
 * A container of an 8 bit unsigned integer
 * of the range 0 to 255
 */
type U8Bit = {
  /**
   * Returns contained 8 bit unsigned integer as a string
   */
  getAsBinaryString(): string
  /**
   * Returns contained 8 bit unsigned integer as a number
   */
  getAsDecimalValue(): number
  /**
   * Return the last 4 bits of the byte value.
   * @returns Unsigned 8 bit integer as a number.
   */
  getLowerNibble: () => number
  /**
   * Return the first 4 bits of the byte value.
   * @returns Unsiged 8 bit integer as a number.
   */
  getUpperNibble: () => number
}

export default U8Bit
