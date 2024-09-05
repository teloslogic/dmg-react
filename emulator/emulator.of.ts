/* eslint-disable no-magic-numbers */
import {ChangeEvent} from 'react'

import {Emulator} from './emulator'
import {CartridgeHeader} from './cartridge/cartridge.header'
import {CartridgeHeaderOf} from './cartridge/cartridge.header.of'

export const EmulatorOf = (): Emulator => {
  const running: boolean = true
  let ticks: number = 0
  let ROM: Uint8Array

  return {
    getCartridgeHeader: (): CartridgeHeader => CartridgeHeaderOf(ROM),
    getTicks: (): number => ticks,
    openROMFile: (event: ChangeEvent<HTMLInputElement>): void => {
      const fileReader: FileReader = new FileReader()

      fileReader.onload = () => {
        const buffer: ArrayBuffer | undefined = fileReader?.result as ArrayBuffer
        ROM = new Uint8Array(buffer)
      }

      const selectedFile: File | undefined = event.target.files?.[0]
      fileReader.readAsArrayBuffer(selectedFile as Blob)
    },
    run: (): number => {
      while (running) {
        ticks++
      }

      return 0
    }
  }
}
