/* eslint-disable no-magic-numbers */
export type NewLicenseeCode = {
  getNameWith: (code: string) => string | undefined
}

export const NewLicenseeCodeOf = (): NewLicenseeCode => {
  const newLicenseeCode: {
    [key: string]: string
  } = {
    '\u0000': 'None'
  }

  newLicenseeCode['\u0001'] = 'Nintendo Research & Development 1'
  newLicenseeCode['\u0008'] = 'Capcom'
  newLicenseeCode['\u0013'] = 'EA (Electronic Arts)'
  newLicenseeCode['\u0018'] = 'Hudson Soft'
  newLicenseeCode['\u0019'] = 'B-AI'
  newLicenseeCode['\u0020'] = 'KSS'
  newLicenseeCode['\u0022'] = 'Planning Office WADA'
  newLicenseeCode['\u0024'] = 'PCM Complete'
  newLicenseeCode['\u0025'] = 'San-X'
  newLicenseeCode['\u0028'] = 'Kemco Japan'
  newLicenseeCode[0x29] = 'SETA Corporation'
  newLicenseeCode[0x30] = 'Viacom'
  newLicenseeCode[0x31] = 'Nintendo'
  newLicenseeCode[0x32] = 'Bandai'
  newLicenseeCode[0x33] = 'Ocean Software/Acclaim Entertainment'
  newLicenseeCode[0x34] = 'Konami'
  newLicenseeCode[0x35] = 'Hector'
  newLicenseeCode[0x37] = 'Taito'
  newLicenseeCode[0x38] = 'Hudson Soft'
  newLicenseeCode[0x39] = 'Banpresto'
  newLicenseeCode[0x41] = 'Ubisoft'
  newLicenseeCode[0x42] = 'Atlus'
  newLicenseeCode[0x44] = 'Malibu'
  newLicenseeCode[0x46] = 'Angel'
  newLicenseeCode[0x47] = 'Bullet-Proof Software'
  newLicenseeCode[0x49] = 'Irem'
  newLicenseeCode[0x50] = 'Absolute'
  newLicenseeCode[0x51] = 'Acclaim'
  newLicenseeCode[0x52] = 'Activision'
  newLicenseeCode[0x53] = 'Sammy USA Corporation'
  newLicenseeCode[0x54] = 'Konami'
  newLicenseeCode[0x55] = 'Hi tech entertainment'
  newLicenseeCode[0x56] = 'LJN'
  newLicenseeCode[0x57] = 'Matchbox'
  newLicenseeCode[0x58] = 'Mattel'
  newLicenseeCode[0x59] = 'Milton Bradley'
  newLicenseeCode[0x60] = 'Titus'
  newLicenseeCode[0x61] = 'Virgin'
  newLicenseeCode[0x64] = 'LucasArts'
  newLicenseeCode[0x67] = 'Ocean'
  newLicenseeCode[0x69] = 'Electronic Arts'
  newLicenseeCode[0x70] = 'Infogrames'
  newLicenseeCode[0x71] = 'Interplay Entertainment'
  newLicenseeCode[0x72] = 'Broderbund'
  newLicenseeCode[0x73] = 'Sculptured Software6'
  newLicenseeCode[0x75] = 'The Sales Curve Limited'
  newLicenseeCode[0x78] = 'THQ'
  newLicenseeCode[0x79] = 'Accolade'
  newLicenseeCode[0x80] = 'Misawa Entertainment'
  newLicenseeCode[0x83] = 'lozc'
  newLicenseeCode[0x86] = 'Tokuma Shoten Intermedia'
  newLicenseeCode[0x87] = 'Tsukuda Original'
  newLicenseeCode[0x91] = 'Chunsoft'
  newLicenseeCode[0x92] = 'Video system'
  newLicenseeCode[0x93] = 'Ocean/Acclaim'
  newLicenseeCode[0x95] = 'Varie'
  newLicenseeCode[0x96] = 'Yonezawa/s’pal'
  newLicenseeCode[0x97] = 'Kaneko'
  newLicenseeCode[0x99] = 'Pack in soft'
  newLicenseeCode[0xa4] = 'Konami (Yu-Gi-Oh!)'

  return {
    getNameWith: (code: string): string | undefined => {
      const MAX_INDEX = 'a4'
      let name: string = ''

      name = code <= MAX_INDEX ? (name = newLicenseeCode[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
