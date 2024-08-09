import {beforeEach, describe, it, expect} from 'vitest'

import {CartridgeHeader} from '../cartridge.header'
import {CartridgeHeaderOf} from '../cartridge.header.of'

import {CartridgeLoader, CartridgeLoaderOf} from '../cartridge.loader'
import {ROMSize, ROMSizeOf} from '../rom.size'
import {NewLicenseeCode, NewLicenseeCodeOf} from '../new.licensee.code'

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

    // eslint-disable-next-line no-magic-numbers
    expect(romHeader.getCartridgeType().getAsDecimalValue()).toEqual(0)
  })

  it('should have a working getDestinationCode() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    // eslint-disable-next-line no-magic-numbers
    expect(romHeader.getDestinationCode().getAsDecimalValue()).toEqual(0)
  })

  it('should have a working getROMSize() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))
    const romsSize: ROMSize = ROMSizeOf()

    const sizeProperties = romsSize.getPropertiesWith(romHeader.getROMSize())

    // eslint-disable-next-line no-magic-numbers
    expect(sizeProperties?.size).toEqual('32 KB')
  })

  it('should have a working runCheck() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))

    // eslint-disable-next-line no-magic-numbers
    expect(romHeader.runCheck()).toEqual(true)
  })

  it('should have working getNewLicenseeCode() method', () => {
    const romHeader: CartridgeHeader = CartridgeHeaderOf(new Uint8Array(binaryArray))
    const code = romHeader.getNewLicenseeCode()
    const licenseeDecoder: NewLicenseeCode = NewLicenseeCodeOf()
    const licenseeCode = licenseeDecoder.getNameWith(code)

    expect(licenseeCode).toEqual('None')
  })
})
