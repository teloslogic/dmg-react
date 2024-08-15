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

  return {
    getTypeWith: (code: number): string | undefined => {
      const MAX_INDEX = 0xff
      let name: string = ''

      name = code <= MAX_INDEX ? (name = cartridgeType[code]) : (name = 'UNKNOWN')

      return name
    }
  }
}
