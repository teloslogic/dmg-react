/**
 * The CPU core in the Game Boy SoC is a custom Sharp design that hasn’t publicly been given
 * a name by either Sharp or Nintendo. However, using old Sharp datasheets and databooks as
 * evidence, the core has been identified to be a Sharp SM83 CPU core, or at least something
 * that is 100% compatible with it.
 *
 * SM83 is an 8-bit CPU core with a 16-bit address bus. The Instruction Set Architecture (ISA) is
 * based on both Z80 and 8080, and is close enough to Z80 that programmers familiar with Z80
 * assembly can quickly become productive with SM83 as well. Some Z80 programs may also work
 * directly on SM83, assuming only opcodes supported by both are used and the program is not
 * sensitive to timing differences.
 */
export type CPU = {
  cycles: (cycles: number) => void
  execute: () => void
  fetchData: () => void
  fetchInstruction: () => void
  init: () => void
  step: () => boolean
}
