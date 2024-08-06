import Left from './left'
import Either from './either'

/**
 * Factory function for creating a type Left.
 * @param value The contained value
 * @returns A new Left
 */
const LeftOf = <L, R>(value: L): Left<L, R> => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    flatMap: <U>(fn: (r: R) => Either<L, U>) => LeftOf<L, U>(value),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fold: <U, V>(leftFn: (l: L) => U, rightFn: (r: R) => V) => leftFn(value),
    isLeft: (): boolean => true,
    isRight: (): boolean => false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    map: <U>(fn: (r: R) => U) => LeftOf<L, U>(value),
    toString: (): string => `Left(${value})`
  }
}

export default LeftOf
