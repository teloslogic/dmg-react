/* eslint-disable no-magic-numbers */

/**
 * Get the bit value at a specified position.
 * @param value Binary value
 * @param n The bit position from left to right, 0 to n.
 * @returns The bit value as a number
 */
const bit = (n: number) => (value: number) => (value & (1 << n) ? 1 : 0)

export default bit
