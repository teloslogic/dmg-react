export type CPU = {
  execute: () => void
  fetchData: () => void
  fetchInstruction: () => void
  init: () => void
  step: () => boolean
}
