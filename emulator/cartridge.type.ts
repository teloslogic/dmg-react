/* eslint-disable no-magic-numbers */
export enum CartridgeType {
  ROM_ONLY,
  MBC1,
  MBC1_RAM_BATTERY,
  MBC2 = 5,
  MBC2_BATTERY,
  ROM_RAM = 8,
  ROM_RAM_BATTERY,
  MMM01 = 11,
  MMM01_RAM,
  MMM01_RAM_BATTERY,
  MBC3_TIMER_BATTERY = 15,
  MBC3_TIMER_RAM_BATTERY,
  MBC3,
  MBC3_RAM,
  MBC3_RAM_BATTERY,
  MBC5 = 25,
  MBC5_RAM = 26,
  MBC5_RAM_BATTERY,
  MBC5_RUMBLE,
  MBC5_RUMBLE_RAM,
  MBC5_RUMBLE_RAM_BATTERY,
  MBC6 = 32,
  MBC7_SENSOR_RUMBLE_RAM_BATTERY = 34,
  POCKET_CAMERA = 252,
  BANDAI_TAMA5,
  HuC3,
  HuC1_RAM_BATTERY
}