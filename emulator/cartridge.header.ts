import U8Bit from '@/types/u8.bit'
import U16Bit from '@/types/u16.bit'

/**
 * Each cartridge contains a header, located at the address range $0100—$014F.
 * The cartridge header provides the following information about the game
 * itself and the hardware it expects to run on
 */
export type CartridgeHeader = {
  /**
   * After displaying the Nintendo logo, the built-in boot ROM jumps to
   * the address $0100, which should then jump to the actual main program
   * in the cartridge. Most commercial games fill this 4-byte area with
   * a no op instruction followed by a jp $0150.
   *
   * Address Range: 0100-0103
   */
  entryPoint: Uint8Array
  /**
   * This area contains a bitmap image that is
   * displayed when the Game Boy is powered on.
   *
   * Address Range: 0104-0133
   */
  nintendoLogo: Uint8Array
  /**
   * These bytes contain the title of the game in upper case ASCII. If
   * the title is less than 16 characters long, the remaining bytes should
   * be padded with $00s.
   *
   * Address Range: 0134-0143
   */
  title: string
  /**
   * This area contains a two-character ASCII “licensee code” indicating the
   * game’s publisher. It is only meaningful if the Old licensee is
   * exactly $33 (which is the case for essentially all games made after the
   * SGB was released); otherwise, the old code must be considered.
   *
   * Address Range: 0144–0145
   */
  newLicenseeCode: U16Bit
  /**
   * This byte specifies whether the game supports SGB functions. The SGB will
   * ignore any command packets if this byte is set to a value other
   * than $03 (typically $00).
   *
   * Address Range: 0146
   */
  sgbFlag: U8Bit
  /**
   * This byte indicates what kind of hardware is present on the cartridge.
   *
   * Address Range: 0147
   */
  cartridgeType: U8Bit
  /**
   * This byte indicates how much ROM is present on the cartridge.
   * In most cases, the ROM size is given by 32 KiB × (1 << value).
   *
   * Address Range: 0148
   */
  romSize: U8Bit
  /**
   * This byte indicates how much RAM is present on the cartridge, if any.
   *
   * Address Range: 0149
   */
  ramSize: U8Bit
  /**
   * This byte specifies whether this version of the game is intended to
   * be sold in Japan or elsewhere.
   *
   * Address Range: 014A
   */
  destinationCode: U8Bit
  /**
   * This byte is used in older (pre-SGB) cartridges to specify the game’s publisher.
   * However, the value $33 indicates that the New licensee codes must be considered
   * instead. (The SGB will ignore any command packets unless this value is $33.).
   *
   * Address Range: 014B
   */
  oldLicenseeCode: U8Bit
  /**
   * This byte specifies the version number of the game.
   * It is usually $00.
   *
   * Address Range: 014C
   */
  maskROMVersionNumber: U8Bit
  /**
   * This byte contains an 8-bit checksum computed from the cartridge header
   * bytes $0134–014C
   */
  headerCheckSum: U8Bit
  /**
   * These bytes contain a 16-bit (big-endian) checksum simply computed as
   * the sum of all the bytes of the cartridge ROM (except these two checksum bytes).
   */
  globalChecksum: U16Bit
}
