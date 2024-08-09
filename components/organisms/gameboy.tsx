import React, {FC, FunctionComponentElement} from 'react'

import {ScreenBorderProps} from '../molecules/screen.border'
import {LogoProps} from '../atoms/logo'

export type GameboyProps = {
  screenBorder: FunctionComponentElement<ScreenBorderProps>
  logo: FunctionComponentElement<LogoProps>
}

const Gameboy: FC<GameboyProps> = ({screenBorder, logo}) => (
  <div className="bg-[#e8e0da] w-[490px] h-[720px] mx-[auto] my-[1vh] rounded-tl-[1.5vw] rounded-br-[10vw] rounded-tr-[1.5vw] rounded-bl-[1.5vw] pt-[7vh] overflow-visible relative">
    {screenBorder}
    {logo}
  </div>
)

export default Gameboy
