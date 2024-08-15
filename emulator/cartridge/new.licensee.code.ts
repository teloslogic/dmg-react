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
  newLicenseeCode['\u0029'] = 'SETA Corporation'
  newLicenseeCode['\u0030'] = 'Viacom'
  newLicenseeCode['\u0031'] = 'Nintendo'
  newLicenseeCode['\u0032'] = 'Bandai'
  newLicenseeCode['\u0033'] = 'Ocean Software/Acclaim Entertainment'
  newLicenseeCode['\u0034'] = 'Konami'
  newLicenseeCode['\u0035'] = 'Hector'
  newLicenseeCode['\u0037'] = 'Taito'
  newLicenseeCode['\u0038'] = 'Hudson Soft'
  newLicenseeCode['\u0039'] = 'Banpresto'
  newLicenseeCode['\u0041'] = 'Ubisoft'
  newLicenseeCode['\u0042'] = 'Atlus'
  newLicenseeCode['\u0044'] = 'Malibu'
  newLicenseeCode['\u0046'] = 'Angel'
  newLicenseeCode['\u0047'] = 'Bullet-Proof Software'
  newLicenseeCode['\u0049'] = 'Irem'
  newLicenseeCode['\u0050'] = 'Absolute'
  newLicenseeCode['\u0051'] = 'Acclaim'
  newLicenseeCode['\u0052'] = 'Activision'
  newLicenseeCode['\u0053'] = 'Sammy USA Corporation'
  newLicenseeCode['\u0054'] = 'Konami'
  newLicenseeCode['\u0055'] = 'Hi tech entertainment'
  newLicenseeCode['\u0056'] = 'LJN'
  newLicenseeCode['\u0057'] = 'Matchbox'
  newLicenseeCode['\u0058'] = 'Mattel'
  newLicenseeCode['\u0059'] = 'Milton Bradley'
  newLicenseeCode['\u0060'] = 'Titus'
  newLicenseeCode['\u0061'] = 'Virgin'
  newLicenseeCode['\u0064'] = 'LucasArts'
  newLicenseeCode['\u0067'] = 'Ocean'
  newLicenseeCode['\u0069'] = 'Electronic Arts'
  newLicenseeCode['\u0070'] = 'Infogrames'
  newLicenseeCode['\u0071'] = 'Interplay Entertainment'
  newLicenseeCode['\u0072'] = 'Broderbund'
  newLicenseeCode['\u0073'] = 'Sculptured Software6'
  newLicenseeCode['\u0075'] = 'The Sales Curve Limited'
  newLicenseeCode['\u0078'] = 'THQ'
  newLicenseeCode['\u0079'] = 'Accolade'
  newLicenseeCode['\u0080'] = 'Misawa Entertainment'
  newLicenseeCode['\u0083'] = 'lozc'
  newLicenseeCode['\u0086'] = 'Tokuma Shoten Intermedia'
  newLicenseeCode['\u0087'] = 'Tsukuda Original'
  newLicenseeCode['\u0091'] = 'Chunsoft'
  newLicenseeCode['\u0092'] = 'Video system'
  newLicenseeCode['\u0093'] = 'Ocean/Acclaim'
  newLicenseeCode['\u0095'] = 'Varie'
  newLicenseeCode['\u0096'] = 'Yonezawa/s’pal'
  newLicenseeCode['\u0097'] = 'Kaneko'
  newLicenseeCode['\u0099'] = 'Pack in soft'
  newLicenseeCode['\u00a4'] = 'Konami (Yu-Gi-Oh!)'

  return {
    getNameWith: (code: string): string | undefined => {
      const MAX_INDEX = '\u00a5'
      let name: string = ''

      name = code <= MAX_INDEX ? (name = newLicenseeCode[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
