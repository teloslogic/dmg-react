import {beforeEach, describe, it, expect} from 'vitest'

import {CartridgeHeader} from '../cartridge.header'
import {CartridgeHeaderOf} from '../cartridge.header.of'
import {Cartridge, CartridgeOf} from '../cartridge'

describe('The Cartridge Header', () => {
  let binaryArray: number[] = []

  beforeEach(() => {
    const filePath = './test.roms/dmg-acid2.gb'
    const cartridge: Cartridge = CartridgeOf()

    binaryArray = cartridge.loadFileFrom(filePath)
  })

  it('should have a working getTitle() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    expect(romHeader.getTitle()).toEqual('DMG-ACID2')
  })

  it('should have a working getCartridgeType() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    // eslint-disable-next-line no-magic-numbers
    expect(romHeader.getCartridgeType().getAsDecimalValue()).toEqual(0)
  })

  it('should have a working getDestinationCode() method', () => {
    const rom: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    // eslint-disable-next-line no-magic-numbers
    expect(rom.getDestinationCode().getAsDecimalValue()).toEqual(0)
  })
})
