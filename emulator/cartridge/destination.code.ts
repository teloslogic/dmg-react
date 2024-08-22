/* eslint-disable no-magic-numbers */
export type DestinationCode = {
  getNameWith: (code: number) => string | undefined
}

export const DestinationCodeOf = (): DestinationCode => {
  const destinationCode: string[] = []

  destinationCode[0x00] = 'Japan (and possibly overseas)'
  destinationCode[0x01] = 'Overseas'

  return {
    getNameWith: (code: number): string | undefined => {
      const MAX_INDEX = 0x02
      let name: string = ''

      name = code <= MAX_INDEX ? (name = destinationCode[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
