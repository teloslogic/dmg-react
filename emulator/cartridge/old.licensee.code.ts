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
  licenseeCode[0x41] = 'Ubi Soft'
  licenseeCode[0x42] = 'Atlus'
  licenseeCode[0x44] = 'Malibu Interactive'
  licenseeCode[0x46] = 'Angel'
  licenseeCode[0x47] = 'Spectrum Holoby'
  licenseeCode[0x49] = 'Irem'
  licenseeCode[0x4a] = 'Virgin Games Ltd.3'
  licenseeCode[0x4d] = 'Malibu Interactive'
  licenseeCode[0x4f] = 'U.S. Gold'
  licenseeCode[0x50] = 'Absolute'
  licenseeCode[0x51] = 'Acclaim Entertainment'
  licenseeCode[0x52] = 'Activision'
  licenseeCode[0x53] = 'Sammy USA Corporation'
  licenseeCode[0x54] = 'GameTek'
  licenseeCode[0x55] = 'Park Place'
  licenseeCode[0x56] = 'LJN'
  licenseeCode[0x57] = 'Matchbox'
  licenseeCode[0x59] = 'Milton Bradley Company'
  licenseeCode[0x5a] = 'Mindscape'
  licenseeCode[0x5b] = 'Romstar'
  licenseeCode[0x5c] = 'Naxat Soft'
  licenseeCode[0x5d] = 'Tradewest'
  licenseeCode[0x60] = 'Titus Interactive'
  licenseeCode[0x61] = 'Virgin Games Ltd.'
  licenseeCode[0x67] = 'Ocean Software'
  licenseeCode[0x69] = 'EA (Electronic Arts)'
  licenseeCode[0x6e] = 'Elite Systems'
  licenseeCode[0x6f] = 'Electro Brain'
  licenseeCode[0x70] = 'Infogrames'
  licenseeCode[0x71] = 'Interplay Entertainment'
  licenseeCode[0x72] = 'Broderbund'
  licenseeCode[0x73] = 'Sculptured Software'
  licenseeCode[0x75] = 'The Sales Curve Limited'

  return {
    getNameWith: (code: number): string | undefined => {
      const MAX_INDEX = 0x0100
      let name: string = ''

      name = code <= MAX_INDEX ? (name = licenseeCode[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
