/**
 * The IO type is used to store a function that describes some computation with
 * side effects, such as reading some data from a file, printing logging information
 * to the console, or mutating the elements in the DOM. Describing actions in this way
 * allows for IO instances to be composed and passed around while keeping
 * functions pure and maintaining referential transparency.
 */
type IO<T> = {
  /**
   * Takes the function `fn` and returns a new type IO.
   * It returns a new type IO instance that, when run, executes
   * the original effect, then passes it's result to `fn` and
   * executes the resulting effect.
   * @param fn Mapping function.
   */
  flatMap<U>(fn: (x: T) => IO<U>): IO<U>
  /**
   * Takes a function `fn` and returns a new type IO.
   * The new instance wraps a function that applies `fn`
   * to the result of the original effect.
   * @param fn Mapping function
   */
  map<U>(fn: (x: T) => U): IO<U>
  /**
   * Execute the side effect and return the result.
   */
  run(): T
}

export default IO
