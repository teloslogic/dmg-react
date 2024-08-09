import {CartridgeHeader} from './cartridge.header'
import U8Bit from '../../types/u8.bit'
import U8BitOf from '../../types/u8.bit.of'

// eslint-disable-next-line no-magic-numbers
export const CartridgeHeaderOf = (value: Uint8Array = new Uint8Array(512)): CartridgeHeader => {
  return {
    getCartridgeType: (): U8Bit => {
      const CARTRIDGE_TYPE_INDEX = 0x0147
      const cartType = value[CARTRIDGE_TYPE_INDEX]

      return U8BitOf(cartType)
    },
    getDestinationCode: (): U8Bit => {
      const DESTINATION_CODE_INDEX = 0x014a
      const code = value[DESTINATION_CODE_INDEX]

      return U8BitOf(code)
    },
    getLogo: (): string => {
      const LOGO_START = 0x0104
      const LOGO_END = 0x0133
      const logo = new TextDecoder().decode(value.slice(LOGO_START, LOGO_END))

      return logo
    },
    getNewLicenseeCode: (): string => {
      const NEW_LICENSEE_CODE_START = 0x0144
      const NEW_LICENSEE_CODE_END = 0x0145
      const code = new TextDecoder().decode(value.slice(NEW_LICENSEE_CODE_START, NEW_LICENSEE_CODE_END))

      return code
    },
    getOldLicenseeCode: (): U8Bit => {
      const OLD_LICENSE_CODE_INDEX = 0x014b
      const code = value[OLD_LICENSE_CODE_INDEX]

      return U8BitOf(code)
    },
    getROMSize: (): U8Bit => {
      const ROM_SIZE_INDEX = 0x0148
      const code = value[ROM_SIZE_INDEX]

      return U8BitOf(code)
    },
    getTitle: (): string => {
      const TITLE_START = 0x0134
      const TITLE_END = 0x0143
      const title = new TextDecoder().decode(value.slice(TITLE_START, TITLE_END))
      // eslint-disable-next-line no-control-regex
      const cleanedTitle = title.replace(/\u0000/g, '')

      return cleanedTitle
    },
    runCheck: (): boolean => {
      const HEADER_CHECKSUM_INDEX = 0x014d
      const OFFSET = 0xff
      const code = value[HEADER_CHECKSUM_INDEX]

      return code & OFFSET ? true : false
    }
  }
}
