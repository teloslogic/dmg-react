/**
 * Each cartridge contains a header, located at the address range $0100—$014F.
 * The cartridge header provides the following information about the game
 * itself and the hardware it expects to run on
 */
export type Cartridge = {
  /**
   * After displaying the Nintendo logo, the built-in boot ROM jumps to
   * the address $0100, which should then jump to the actual main program
   * in the cartridge. Most commercial games fill this 4-byte area with
   * a nop instruction followed by a jp $0150.
   */
  entryPoint: Uint8Array
  /**
   * This area contains a bitmap image that is
   * displayed when the Game Boy is powered on.
   */
  nintendoLogo: Uint8Array
  /**
   * These bytes contain the title of the game in upper case ASCII. If
   * the title is less than 16 characters long, the remaining bytes should
   * be padded with $00s.
   */
  title: string
  /**
   * This area contains a two-character ASCII “licensee code” indicating the
   * game’s publisher. It is only meaningful if the Old licensee is
   * exactly $33 (which is the case for essentially all games made after the
   * SGB was released); otherwise, the old code must be considered.
   */
  newLicenseeCode: Uint16Array
  /**
   * This byte specifies whether the game supports SGB functions. The SGB will
   * ignore any command packets if this byte is set to a value other
   * than $03 (typically $00).
   */
  sgbFlag: Uint8Array
}
