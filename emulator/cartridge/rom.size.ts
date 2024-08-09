/* eslint-disable no-magic-numbers */

import U8Bit from '../../types/u8.bit'

export type ROMSizeProperties = {
  size: string
  banks: number
}

export type ROMSize = {
  getPropertiesWith: (code: U8Bit) => ROMSizeProperties | undefined
}

export const ROMSizeOf = (): ROMSize => {
  const sizeProperties: ROMSizeProperties[] = []

  sizeProperties[0x00] = {size: '32 KB', banks: 2}
  sizeProperties[0x01] = {size: '64 KB', banks: 4}
  sizeProperties[0x02] = {size: '128 KB', banks: 8}
  sizeProperties[0x03] = {size: '216 KB', banks: 16}
  sizeProperties[0x04] = {size: '512 KB', banks: 32}
  sizeProperties[0x05] = {size: '1 MB', banks: 64}
  sizeProperties[0x06] = {size: '2 MB', banks: 128}

  return {
    getPropertiesWith: (code: U8Bit): ROMSizeProperties | undefined => {
      const MAX_INDEX = 0x54
      let properties: ROMSizeProperties

      properties =
        code.getAsDecimalValue() <= MAX_INDEX
          ? (properties = sizeProperties[code.getAsDecimalValue()])
          : {size: '0', banks: 0}

      return properties
    }
  }
}
