import React, {FC, FunctionComponentElement} from 'react'

import {ScreenBorderProps} from '../molecules/screen.border'
import {LogoProps} from '../atoms/logo'
import {DevicePadProps} from '../molecules/device.pad'
import {BAProps} from '../molecules/ba'
import {SelectProps} from '../atoms/select'
import {StartProps} from '../atoms/start'

export type GameboyProps = {
  screenBorder: FunctionComponentElement<ScreenBorderProps>
  logo: FunctionComponentElement<LogoProps>
  devicePad: FunctionComponentElement<DevicePadProps>
  ba: FunctionComponentElement<BAProps>
  select: FunctionComponentElement<SelectProps>
  start: FunctionComponentElement<StartProps>
}

const Gameboy: FC<GameboyProps> = ({screenBorder, logo, devicePad, ba, select, start}) => (
  <div className="bg-[#e8e0da] w-[470px] h-[720px] mx-[auto] rounded-tl-[20px] rounded-br-[150px] rounded-tr-[10px] rounded-bl-[10px] overflow-visible relative">
    {screenBorder}
    {logo}
    {devicePad}
    {ba}
    {select}
    {start}
  </div>
)

export default Gameboy
