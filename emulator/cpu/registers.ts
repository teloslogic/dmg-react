import U8Bit from '@/types/u8.bit'
import U16Bit from '@/types/u16.bit'

export const ZERO_FLAG_BYTE_POSITION = 7
export const SUBTRACT_FLAG_BYTE_POSITION = 6
export const HALF_CARRY_FLAG_BYTE_POSITION = 5
export const CARRY_FLAG_BYTE_POSITION = 4

/**
 * The Gameboy’s CPU is known as the DMG CPU. It is equipped with 6 registers
 * of 16 bit each and they’re called AF, BC, DE, HL, SP and PC.
 */
export type Registers = {
  /**
   * A stands for the accumulator and it’s where arithmetic operations usually take place.
   */
  A: U8Bit
  /**
   * F stands for flag register and it’s to be interpreted as 8 distinct bits each with a different meaning.
   */
  F: U8Bit

  /**
   * The BC register is also to be seen as two 8 bit registers B and C
   */
  B: U8Bit
  /**
   * The BC register is also to be seen as two 8 bit registers B and C
   */
  C: U8Bit

  /**
   * The DE register is exactly the same as the BC register, just 2x8 bits more to store some data.
   */
  D: U8Bit
  /**
   * The DE register is exactly the same as the BC register, just 2x8 bits more to store some data.
   */
  E: U8Bit

  /**
   * The HL register can be used as two 8 bit registers H and L, just like BC and DE. On top of that, it
   * functions as a 16 bit register and can be used to point to addresses in memory.
   */
  H: U8Bit
  /**
   * The HL register can be used as two 8 bit registers H and L, just like BC and DE. On top of that, it
   * functions as a 16 bit register and can be used to point to addresses in memory.
   */
  L: U8Bit

  /**
   * SP stands for stack pointer. It points to a special area in memory called the stack.
   */
  SP: U16Bit

  /**
   * stands for program counter and it’s actually a pointer to the next instruction in memory.
   * That’s how the CPU knows where to fetch the next operation to be executed.
   */
  PC: U16Bit
}
