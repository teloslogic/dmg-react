import {describe, expect, it} from 'vitest'

import bit from '../bit'

describe('The bit utility function', () => {
  it('should be able to work with an 8-bit value', () => {
    const BIT_VALUE = 0b0011010
    const AT_POSITION = 3
    const expectedValue = 1

    const result = bit(AT_POSITION)(BIT_VALUE)

    expect(result).toEqual(expectedValue)
  })
})
