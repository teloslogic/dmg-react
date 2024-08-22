import {beforeEach, describe, it, expect} from 'vitest'

import {CartridgeHeader} from '../cartridge.header'
import {CartridgeHeaderOf} from '../cartridge.header.of'

import {CartridgeLoader, CartridgeLoaderOf} from '../cartridge.loader'

describe('The Cartridge Header', () => {
  let binaryArray: number[] = []

  beforeEach(() => {
    const filePath = './test.roms/dmg-acid2.gb'
    const cartridge: CartridgeLoader = CartridgeLoaderOf()

    binaryArray = cartridge.loadROM(filePath)
  })

  it('should have a working getTitle() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    expect(romHeader.getTitle()).toEqual('DMG-ACID2')
  })

  it('should have a working getCartridgeType() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    expect(romHeader.getCartridgeType()).toBe('ROM ONLY')
  })

  it('should have a working getDestinationCode() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))
    const code = romHeader.getDestinationCode()

    expect(code).toBe('Japan (and possibly overseas)')
  })

  it('should have a working getROMSize() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))
    const properties = romHeader.getROMSize()

    expect(properties?.size).toBe('32 KB')
    // eslint-disable-next-line no-magic-numbers
    expect(properties?.banks).toBe(2)
  })

  it('should have a working runCheck() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    // eslint-disable-next-line no-magic-numbers
    expect(romHeader.runCheck()).toEqual(true)
  })

  it('should have working getNewLicenseeCode() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))
    const code = romHeader.getNewLicenseeCode()

    expect(code).toBe('None')
  })

  it('should have working getOldicenseeCode() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))
    const code = romHeader.getOldLicenseeCode()

    expect(code).toBe('None')
  })
})
