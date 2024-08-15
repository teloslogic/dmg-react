import {readFileSync} from 'fs'

export type CartridgeLoader = {
  loadROM: (filePath: string) => number[]
}

export const CartridgeLoaderOf = (): CartridgeLoader => {
  return {
    loadROM: (filePath: string) => {
      const romData: number[] = []
      const OFFSET = 0xff
      const fileBuffer: string = readFileSync(filePath).toString('binary')

      for (let i = 0; i < fileBuffer.length; i++) {
        romData.push(fileBuffer.charCodeAt(i) & OFFSET)
      }

      return romData
    }
  }
}
