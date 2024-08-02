/**
 * Performs right-to-left function composition.
 * @param funcs A set of functions
 * @returns Composed function
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const compose = <T>(...funcs: Function[]) =>
  funcs.reduce(
    (a, b) =>
      (...args: T[]) =>
        a(b(...args)),
    (arg: T) => arg
  )

export default compose
