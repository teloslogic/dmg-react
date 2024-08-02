import React, {FC, FunctionComponentElement} from 'react'

import {PurpleLineProps} from '../atoms/purple.line'
import {BlueLineProps} from '../atoms/blue.line'
import {HeaderLineProps} from '../atoms/header.line'
import {ScreenProps} from './screen'
import {LightProps} from '../atoms/light'
import {BatteryProps} from '../atoms/battery'

export type ScreenBorderProps = {
  purpleLine: FunctionComponentElement<PurpleLineProps>
  blueLine: FunctionComponentElement<BlueLineProps>
  headerLine: FunctionComponentElement<HeaderLineProps>
  screen: FunctionComponentElement<ScreenProps>
  light: FunctionComponentElement<LightProps>
  battery: FunctionComponentElement<BatteryProps>
}

const ScreenBorder: FC<ScreenBorderProps> = ({purpleLine, blueLine, headerLine, screen, light, battery}) => (
  <div className="absolute top-[9%] left-[9%] w-[82%] h-[60%] bg-[#848190] rounded-tl-[5%] rounded-br-[19%] rounded-tr-[5%] rounded-bl-[5%] [box-shadow:inset_0px_0px_0px_3px_rgba(0,_0,_0,_0.06)]">
    {purpleLine}
    {blueLine}
    {headerLine}
    {screen}
    {light}
    {battery}
  </div>
)

export default ScreenBorder
