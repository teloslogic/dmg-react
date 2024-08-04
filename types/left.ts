import Either from './either'

/**
 * Left is typically used to hold the error value
 */
type Left<L, R> = {
  /**
   * A Non computation that returns an Either
   * @param fn Computational mapper.
   */
  flatMap<U>(fn: (r: R) => Either<L, U>): Left<L, U>
  /**
   * Extracts the value from Either by applying the appropriate function
   * based on whether it's Left or Right.
   * @param leftFn Value extraction function for Left.
   * @param rightFn Value extraction function for Right.
   */
  fold<U, V>(leftFn: (l: L) => U, rightFn: (r: R) => V): U | V
  /**
   * Check to see if this is a Left
   */
  isLeft(): boolean
  /**
   * Check to see if this is a Right
   */
  isRight(): boolean
  /**
   * A non operation for the transformation function.
   * @param fn Transformation function.
   */
  map<U>(fn: (r: R) => U): Either<L, U>
  /**
   * A string representation of this container.
   */
  toString(): string
}

export default Left
