import {CartridgeHeader} from './cartridge.header'
import {CartridgeType, CartridgeTypeOf} from './cartridge.type'
import {NewLicenseeCode, NewLicenseeCodeOf} from './new.licensee.code'
import {DestinationCode, DestinationCodeOf} from './destination.code'
import {OldLicenseeCode, OldLicenseeCodeOf} from './old.licensee.code'
import {ROMSizeProperties, ROMSize, ROMSizeOf} from './rom.size'

// eslint-disable-next-line no-magic-numbers
export const CartridgeHeaderOf = (value: Uint8Array = new Uint8Array(512)): CartridgeHeader => {
  return {
    getCartridgeType: (): string | undefined => {
      const CARTRIDGE_TYPE_INDEX = 0x0147
      const cartTypeByteVlue = value[CARTRIDGE_TYPE_INDEX]
      const cartridge: CartridgeType = CartridgeTypeOf()

      return cartridge.getTypeWith(cartTypeByteVlue)
    },
    getDestinationCode: (): string | undefined => {
      const DESTINATION_CODE_INDEX = 0x014a
      const code = value[DESTINATION_CODE_INDEX]
      const destinationCode: DestinationCode = DestinationCodeOf()

      return destinationCode.getNameWith(code)
    },
    getLogo: (): string => {
      const LOGO_START = 0x0104
      const LOGO_END = 0x0133
      const logo = new TextDecoder().decode(value.slice(LOGO_START, LOGO_END))

      return logo
    },
    getNewLicenseeCode: (): string | undefined => {
      const NEW_LICENSEE_CODE_START = 0x0144
      const NEW_LICENSEE_CODE_END = 0x0145
      const code = new TextDecoder().decode(value.slice(NEW_LICENSEE_CODE_START, NEW_LICENSEE_CODE_END))
      const licenseeCode: NewLicenseeCode = NewLicenseeCodeOf()

      return licenseeCode.getNameWith(code)
    },
    getOldLicenseeCode: (): string | undefined => {
      const OLD_LICENSE_CODE_INDEX = 0x014b
      const code = value[OLD_LICENSE_CODE_INDEX]
      const licenseeCode: OldLicenseeCode = OldLicenseeCodeOf()

      return licenseeCode.getNameWith(code)
    },
    getROMSize: (): ROMSizeProperties | undefined => {
      const ROM_SIZE_INDEX = 0x0148
      const code = value[ROM_SIZE_INDEX]
      const romSize: ROMSize = ROMSizeOf()

      return romSize.getPropertiesWith(code)
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
