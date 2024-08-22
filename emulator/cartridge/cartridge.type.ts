/* eslint-disable no-magic-numbers */
export type CartridgeType = {
  getTypeWith: (code: number) => string | undefined
}

export const CartridgeTypeOf = (): CartridgeType => {
  const cartridgeType: string[] = []

  cartridgeType[0x00] = 'ROM ONLY'
  cartridgeType[0x01] = 'MBC1'
  cartridgeType[0x02] = 'MBC1+RAM'
  cartridgeType[0x03] = 'MBC1+RAM+BATTERY'
  cartridgeType[0x05] = 'MBC2'
  cartridgeType[0x06] = 'MBC2+BATTERY'
  cartridgeType[0x08] = 'ROM+RAM'
  cartridgeType[0x09] = 'ROM+RAM+BATTERY'
  cartridgeType[0x0b] = 'MMM01'
  cartridgeType[0x0c] = 'MMM01+RAM'
  cartridgeType[0x0d] = 'MMM01+RAM+BATTERY'
  cartridgeType[0x0f] = 'MBC3+TIMER+BATTERY'
  cartridgeType[0x10] = 'MBC3+TIMER+RAM+BATTERY'
  cartridgeType[0x11] = 'MBC3'
  cartridgeType[0x12] = 'MBC3+RAM'
  cartridgeType[0x13] = 'MBC3+RAM+BATTERY'
  cartridgeType[0x19] = 'MBC5'
  cartridgeType[0x1a] = 'MBC5+RAM'
  cartridgeType[0x1c] = 'MBC5+RUMBLE'
  cartridgeType[0x1d] = 'MBC5+RUMBLE+RAM'
  cartridgeType[0x1e] = 'MBC5+RUMBLE+RAM+BATTERY'
  cartridgeType[0x20] = 'MBC6'
  cartridgeType[0x22] = 'MBC7+SENSOR+RUMBLE+RAM+BATTERY'
  cartridgeType[0xfc] = 'POCKET CAMERA'
  cartridgeType[0xfd] = 'BANDAI TAMA5'
  cartridgeType[0xfe] = 'HuC3'
  cartridgeType[0xff] = 'HuC1+RAM+BATTERY'

  return {
    getTypeWith: (code: number): string | undefined => {
      const MAX_INDEX = 0xff
      let name: string = ''

      name = code <= MAX_INDEX ? (name = cartridgeType[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
