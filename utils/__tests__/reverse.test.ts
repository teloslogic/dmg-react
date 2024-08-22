/* eslint-disable no-magic-numbers */
import {describe, expect, it} from 'vitest'

import reverse from '../reverse'
import U16Bit from '../../types/u16.bit'
import U16BitOf from '../../types/u16.bit.of'

describe('The reverse utility function', () => {
  it('should be able to reverse the low byte and high byte of 0x0d17 to 0x170d', () => {
    const originalValue: U16Bit = U16BitOf(0x0d17)
    const result: U16Bit = reverse(originalValue)

    expect(result.getNumber()).toBe(U16BitOf(0x170d).getNumber())
  })
})
