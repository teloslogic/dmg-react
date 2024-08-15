/**
 * Parse hex based value from a string
 * @param value hex value
 * @returns hex value as a number
 */
// eslint-disable-next-line prettier/prettier
const parseHex = (value: string) => Number.parseInt(value, 16)

export default parseHex
