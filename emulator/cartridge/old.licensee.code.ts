/* eslint-disable no-magic-numbers */
export type OldLicenseeCode = {
  getNameWith: (code: number) => string | undefined
}

export const OldLicenseeCodeOf = (): OldLicenseeCode => {
  const licenseeCode: string[] = []

  licenseeCode[0x00] = 'None'
  licenseeCode[0x01] = 'Nintendo'
  licenseeCode[0x08] = 'Capcon'
  licenseeCode[0x09] = 'HOT-B'
  licenseeCode[0x0a] = 'Jaleco'
  licenseeCode[0x0b] = 'Coconuts Japan'
  licenseeCode[0x0c] = 'Elite Systems'
  licenseeCode[0x13] = 'EA (Electronic Arts)'
  licenseeCode[0x18] = 'Hudson Soft'
  licenseeCode[0x19] = 'ITC Entertainment'
  licenseeCode[0x1a] = 'Yanoman'
  licenseeCode[0x1d] = 'Japan Clary'
  licenseeCode[0x1f] = 'Virgin Games Ltd.'
  licenseeCode[0x24] = 'PCM Complete'
  licenseeCode[0x25] = 'San-X'
  licenseeCode[0x28] = 'Kemco'
  licenseeCode[0x29] = 'SETA Corporation'
  licenseeCode[0x30] = 'Infogrames'
  licenseeCode[0x31] = 'Nintendo'
  licenseeCode[0x32] = 'Bandai'
  licenseeCode[0x33] = 'Use New Licensee Code'
  licenseeCode[0x34] = 'Konami'
  licenseeCode[0x35] = 'HectorSoft'
  licenseeCode[0x38] = 'Capcom'
  licenseeCode[0x39] = 'Banpresto'
  licenseeCode[0x3c] = '.Entertainment i'
  licenseeCode[0x3e] = 'Gremlin'

  return {
    getNameWith: (code: number): string | undefined => {
      const MAX_INDEX = 0x0100
      let name: string = ''

      name = code <= MAX_INDEX ? (name = licenseeCode[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
