import Right from './right'
import Either from './either'

/**
 * Factory function for creating a type Right.
 * @param value The contained value
 * @returns A new Right
 */
const RightOf = <L, R>(value: R): Right<L, R> => {
  return {
    flatMap: <U>(fn: (r: R) => Either<L, U>) => fn(Object.freeze(value)),
    fold: <U, V>(leftFn: (l: L) => U, rightFn: (r: R) => V) => rightFn(Object.freeze(value)),
    isLeft: (): boolean => false,
    isRight: (): boolean => true,
    map: <U>(fn: (r: R) => U) => RightOf<L, U>(fn(Object.freeze(value))),
    toString: (): string => `Right(${value})`
  }
}

export default RightOf
