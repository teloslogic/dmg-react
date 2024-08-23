/**
 * A container of an 8 bit unsigned integer
 * of the range 0 to 255
 */
type U8Bit = {
  /**
   * Decrement the existing binary value.
   * @returns An incremented U8Bit.
   */
  decrement: () => U8Bit
  /**
   * Return the last 4 bits of the byte value.
   * @returns Unsigned 8 bit integer as a number.
   */
  getLowerNibble: () => number
  /**
   * Returns contained 8 bit unsigned integer as a number
   */
  getNumber(): number
  /**
   * Return the first 4 bits of the byte value.
   * @returns Unsiged 8 bit integer as a number.
   */
  getUpperNibble: () => number
  /**
   * Increment the existing binary value.
   * @returns An incremented U8Bit.
   */
  increment: () => U8Bit
  /**
   * Returns contained 8 bit unsigned integer as a string
   */
  toString(): string
}

export default U8Bit
