import {readFileSync} from 'fs'

export type Cartridge = {
  loadFileFrom: (filePath: string) => number[]
}

export const CartridgeOf = (): Cartridge => {
  return {
    loadFileFrom: (filePath: string) => {
      const binaryArray: number[] = []
      const OFFSET = 0xff
      const fileBuffer: string = readFileSync(filePath).toString('binary')

      for (let i = 0; i < fileBuffer.length; i++) {
        binaryArray.push(fileBuffer.charCodeAt(i) & OFFSET)
      }

      return binaryArray
    }
  }
}
