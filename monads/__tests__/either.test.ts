import {describe, it, expect} from 'vitest'

import Either from '../either'
import LeftOf from '../left.of'
import RightOf from '../right.of'

describe('The Either Monad returning function divide(x, y)', () => {
  const ZERO = 0

  const divide = (x: number, y: number): Either<string, number> => {
    return y === ZERO ? LeftOf('Division by zero') : RightOf(x / y)
  }

  it('should execute all tranformations if divisor is not zero', () => {
    const TWO = 2
    const FOUR = 4

    const result = divide(FOUR, TWO)
      .map(x => x * TWO)
      .flatMap(x => RightOf<string, number>(x + TWO))
      .map(x => x + FOUR)

    expect(
      result.fold(
        error => `Error: ${error}`,
        value => `Success: ${value}`
      )
    ).toEqual(`Success: 10`)

    expect(result.isLeft()).toBe(false)
    expect(result.isRight()).toBe(true)
    expect(`${result}`).toBe('Right(10)')
  })

  it('should not execute any tranformations if divisor is zero', () => {
    const TWO = 2
    const FOUR = 4

    const result = divide(FOUR, TWO)
      .map(x => x * TWO)
      .flatMap(x => divide(x, ZERO))
      .map(x => x + FOUR)

    expect(
      result.fold(
        error => `Error: ${error}`,
        value => `Success: ${value}`
      )
    ).toEqual(`Error: Division by zero`)

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
    expect(`${result}`).toBe('Left(Division by zero)')
  })
})
