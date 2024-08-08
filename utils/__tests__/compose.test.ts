/* eslint-disable no-magic-numbers */
import {describe, expect, it} from 'vitest'

import compose from '../compose'

describe('The compose utility function', () => {
  it('should compose from right to left', () => {
    const double = (x: number): number => x * 2
    const square = (x: number): number => x * x

    const squareResult: number = compose<number>(square)(5)
    expect(squareResult).toBe(25)

    const doubleSquareResult: number = compose<number>(square, double)(5)
    expect(doubleSquareResult).toBe(100)

    const result: number = compose(double, square, double)(5)
    expect(result).toBe(200)
  })

  it('should be able to seed functions of multiple arguments', () => {
    const square = (x: number): number => x * x
    const add = (x: number, y: number): number => x + y

    const result: number = compose<number>(square, add)(1, 2)

    expect(result).toBe(9)
  })

  it('should return the identity function if given no arguments', () => {
    expect(compose<number>()(1, 2)).toBe(1)
    expect(compose<number>()(3)).toBe(3)
    expect(compose<number>()()).toBe(undefined)
  })

  it('should return the first function if given only one', () => {
    const func = (x: number) => x * x

    const result = compose(func)(3)

    expect(result).toBe(func(3))
  })

  it('should be able to compose curried functions', () => {
    const add = (x: number) => (y: number) => x + y
    const multiply = (a: number) => (b: number) => a * b

    const addByOne = add(1)
    const multiplyByTwo = multiply(2)

    const composedFunction = compose<number>(addByOne, multiplyByTwo)

    expect(composedFunction(2)).toBe(5)
  })
})
