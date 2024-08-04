import Left from './left'
import Right from './right'

/**
 * The Either type is very similar to the Maybe type, in that it is often
 * used to represent the notion of failure in some way. The difference between
 * the two is that an error represented with an Either can hold some value
 * (perhaps an exception or error message), while Maybe can only indicate that
 * absence of some value.
 *
 * While the Either type is often used to represent potential errors, there is
 * nothing restricting it to this purpose. It is therefore perhaps more appropriate
 * to simply think of Either as a representation of two possible types of values,
 * sometimes referred to as the disjoint union, or coproduct of two types.
 */
type Either<L, R> = Left<L, R> | Right<L, R>

export default Either
