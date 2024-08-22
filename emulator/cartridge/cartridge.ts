import U8Bit from '@/types/u8.bit'
import U8BitOf from '@/types/u8.bit.of'
import U16Bit from '@/types/u16.bit'

import {CartridgeLoader, CartridgeLoaderOf} from '../cartridge/cartridge.loader'

export type Cartridge = {
  load: (filePath: string) => boolean
  read: (address: U16Bit) => U8Bit
  write: (address: U16Bit, value: U8Bit) => void
}

export const CartridgeOf = (): Cartridge => {
  let romData: number[] = []
  const cartLoader: CartridgeLoader = CartridgeLoaderOf()

  return {
    load: (filePath): boolean => {
      romData = cartLoader.loadROM(filePath)

      return true
    },
    read: (address: U16Bit): U8Bit => {
      return U8BitOf(romData[address.getNumber()])
    },
    write: (address: U16Bit, value: U8Bit): void => {
      console.log(`Cartridge write function parameters - address: ${address} and value: ${value}`)
      console.log('Cartridge write function has not been implemented yet')
    }
  }
}
