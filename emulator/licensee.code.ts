/* eslint-disable no-magic-numbers */
export type LicenseeCode = {
  getNameWith: (code: number) => string | undefined
}

export const LicenseeCodeOf = (): LicenseeCode => {
  const licenseeCode: string[] = []

  licenseeCode[0x00] = 'None'
  licenseeCode[0x01] = 'Nintendo R&D1'
  licenseeCode[0x08] = 'Capcom'
  licenseeCode[0x13] = 'Electronic Arts'
  licenseeCode[0x18] = 'Hudson Soft'
  licenseeCode[0x19] = 'b-ai'
  licenseeCode[0x20] = 'kss'
  licenseeCode[0x22] = 'pow'
  licenseeCode[0x24] = 'PCM Complete'
  licenseeCode[0x25] = 'san-x'
  licenseeCode[0x28] = 'Kemco Japan'
  licenseeCode[0x29] = 'seta'
  licenseeCode[0x30] = 'Viacom'
  licenseeCode[0x31] = 'Nintendo'
  licenseeCode[0x32] = 'Bandai'
  licenseeCode[0x33] = 'Ocean/Acclaim'
  licenseeCode[0x34] = 'Konami'
  licenseeCode[0x35] = 'Hector'
  licenseeCode[0x37] = 'Taito'
  licenseeCode[0x38] = 'Hudson'
  licenseeCode[0x39] = 'Banpresto'
  licenseeCode[0x41] = 'Ubi Soft'
  licenseeCode[0x42] = 'Atlus'
  licenseeCode[0x44] = 'Malibu'
  licenseeCode[0x46] = 'angel'
  licenseeCode[0x47] = 'Bullet-Proof'
  licenseeCode[0x49] = 'irem'
  licenseeCode[0x50] = 'Absolute'
  licenseeCode[0x51] = 'Acclaim'
  licenseeCode[0x52] = 'Activision'
  licenseeCode[0x53] = 'American sammy'
  licenseeCode[0x54] = 'Konami'
  licenseeCode[0x55] = 'Hi tech entertainment'
  licenseeCode[0x56] = 'LJN'
  licenseeCode[0x57] = 'Matchbox'
  licenseeCode[0x58] = 'Mattel'
  licenseeCode[0x59] = 'Milton Bradley'
  licenseeCode[0x60] = 'Titus'
  licenseeCode[0x61] = 'Virgin'
  licenseeCode[0x64] = 'LucasArts'
  licenseeCode[0x67] = 'Ocean'
  licenseeCode[0x69] = 'Electronic Arts'
  licenseeCode[0x70] = 'Infogrames'
  licenseeCode[0x71] = 'Interplay'
  licenseeCode[0x72] = 'Broderbund'
  licenseeCode[0x73] = 'sculptured'
  licenseeCode[0x75] = 'sci'
  licenseeCode[0x78] = 'THQ'
  licenseeCode[0x79] = 'Accolade'
  licenseeCode[0x80] = 'misawa'
  licenseeCode[0x83] = 'lozc'
  licenseeCode[0x86] = 'Tokuma Shoten Intermedia'
  licenseeCode[0x87] = 'Tsukuda Original'
  licenseeCode[0x91] = 'Chunsoft'
  licenseeCode[0x92] = 'Video system'
  licenseeCode[0x93] = 'Ocean/Acclaim'
  licenseeCode[0x95] = 'Varie'
  licenseeCode[0x96] = 'Yonezawa/s’pal'
  licenseeCode[0x97] = 'Kaneko'
  licenseeCode[0x99] = 'Pack in soft'
  licenseeCode[0xa4] = 'Konami (Yu-Gi-Oh!)'

  return {
    getNameWith: (code: number): string | undefined => {
      const MAX_INDEX = 0xa4
      let name: string = ''

      name = code <= MAX_INDEX ? (name = licenseeCode[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
