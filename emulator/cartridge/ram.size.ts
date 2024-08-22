/* eslint-disable no-magic-numbers */

export type RAMSizeProperties = {
  size: string
  banks: string
}

export type RAMSize = {
  getPropertiesWith: (code: number) => RAMSizeProperties | undefined
}

export const RAMSizeOf = (): RAMSize => {
  const sizeProperties: RAMSizeProperties[] = []

  sizeProperties[0x00] = {size: '0', banks: 'No RAM'}
  sizeProperties[0x01] = {size: '-', banks: 'Unused'}
  sizeProperties[0x02] = {size: '8 KB', banks: '1 bank'}
  sizeProperties[0x03] = {size: '32 KB', banks: '4 banks of 8 KB each'}
  sizeProperties[0x04] = {size: '128 KB', banks: '16 banks of 8 KB each'}
  sizeProperties[0x05] = {size: '64 KB', banks: '8 banks of 8 KiB each'}

  return {
    getPropertiesWith: (code: number): RAMSizeProperties | undefined => {
      const MAX_INDEX = 0x06
      let properties: RAMSizeProperties

      properties = code <= MAX_INDEX ? (properties = sizeProperties[code]) : {size: '0', banks: '0'}

      return properties
    }
  }
}
