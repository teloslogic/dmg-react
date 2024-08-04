import IO from './io'

/**
 * Factory function for creating a type IO.
 * @param effect The contained side effect function
 * @returns A new IO.
 */
const IoOf = <T>(effect: () => T): IO<T> => {
  const execute = (): T => effect()

  return {
    flatMap: <U>(fn: (x: T) => IO<U>): IO<U> => IoOf<U>(() => fn(execute()).run()),
    map: <U>(fn: (x: T) => U): IO<U> => IoOf<U>(() => fn(execute())),
    run: (): T => execute()
  }
}

export default IoOf
