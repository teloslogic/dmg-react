import U8Bit from '@/types/u8.bit'
import U16Bit from '@/types/u16.bit'

export type DataBus = {
  busRead(address: U16Bit): U8Bit
  busWrite(address: U16Bit, value: U8Bit): void
}
