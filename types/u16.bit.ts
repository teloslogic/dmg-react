/**
 * A container of an 16 bit unsigned integer
 * of the range 0 to 65536
 */
type U16Bit = {
  /**
   * Returns contained 16 bit unsigned integer as a string
   */
  getAsBinaryString(): string
  /**
   * Returns contained 16 bit unsigned integer as a number
   */
  getAsDecimalValue(): number
  /**
   * Return the last byte of the two byte value.
   * @returns 8 bit unsigned integer as a number.
   */
  getLeastSignificantByte: () => number
  /**
   * Return the first byte of the two byte value.
   * @returns 8 bit unsigned integer as a number.
   */
  getMostSignificantByte: () => number
  /**
   * Set the last byte of the two byte value.
   * @param byteValue The new two byte value.
   * @returns 16 bit unsigned integer as U16Bit.
   */
  setLeastSignificantByte: (byteValue: number) => U16Bit
  /**
   * Set the first byte of the two byte value.
   * @param byteValue The new two byte value.
   * @returns 16 bit unsigned integer as U16Bit.
   */
  setMostSignificantByte: (byteValue: number) => U16Bit
}

export default U16Bit
