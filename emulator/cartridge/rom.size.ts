/* eslint-disable no-magic-numbers */

export type ROMSizeProperties = {
  size: string
  banks: number
}

export type ROMSize = {
  getPropertiesWith: (code: number) => ROMSizeProperties | undefined
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
  sizeProperties[0x07] = {size: '4 MB', banks: 256}
  sizeProperties[0x08] = {size: '8 MB', banks: 512}
  sizeProperties[0x52] = {size: '1.1 MB', banks: 72}
  sizeProperties[0x53] = {size: '1.2 MB', banks: 80}
  sizeProperties[0x54] = {size: '1.5 MiB', banks: 96}

  return {
    getPropertiesWith: (code: number): ROMSizeProperties | undefined => {
      const MAX_INDEX = 0x55
      let properties: ROMSizeProperties

      properties = code <= MAX_INDEX ? (properties = sizeProperties[code]) : {size: '0', banks: 0}

      return properties
    }
  }
}
