import U8Bit from '../types/u8.bit'

/**
 * The memory area at 0x0100 to 0x014F contains the cartridge header.
 * This area contains information about the program, its entry point,
 * checksums, information about the used MBC chip, the ROM and
 * RAM sizes, etc.
 * Most of the bytes in this area are required to be specified correctly.
 */
export type CartridgeHeader = {
  /**
   * This byte contains an 8-bit checksum computed from the cartridge header bytes 0x0134 to 0x014C.
   * @returns boolean represen the pass or failure of checksum.
   */
  runCheck: () => boolean
  /**
   * This byte indicates what kind of hardware is present on the cartridge — most notably its mapper.
   * @returns The required (or preferred) Memory Bank Controller (MBC) type.
   */
  getCartridgeType: () => U8Bit
  /**
   * This byte specifies whether this version of the game is intended to be sold in Japan or elsewhere.
   * @returns 0x00 for Japan (and possibly overseas) or 0x01 for overseas only
   */
  getDestinationCode: () => U8Bit
  /**
   * This area contains a bitmap image that is displayed when the Game Boy is powered on.
   * It must match the following (hexadecimal) dump, otherwise the boot ROM won’t allow
   * the game to run.
   * @returns bitmap image.
   */
  getLogo: () => string
  /**
   * This area contains a two-character ASCII “licensee code” indicating the game’s publisher.
   * It is only meaningful if the Old licensee is exactly 0x33 (which is the case for essentially
   * all games made after the SGB was released); otherwise, the old code must be considered.
   * @returns A two-character ASCII “licensee code” indicating the game’s publisher.
   */
  getNewLicenseeCode: () => string
  /**
   * This byte is used in older (pre-SGB) cartridges to specify the game’s publisher. However, the
   * value 0x33 indicates that the New licensee codes must be considered instead. (The SGB will ignore
   * any command packets unless this value is 0x33.)
   * @returns A 8 bit number indicating the game’s publisher.
   */
  getOldLicenseeCode: () => U8Bit
  /**
   * These bytes contain the title of the game in upper case ASCII. If the title is
   * less than 16 characters long, the remaining bytes should be padded with $00s.
   * @returns bytes contain the title of the game
   */
  getTitle: () => string
}
