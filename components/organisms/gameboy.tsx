import React, {FC, FunctionComponentElement} from 'react'

import {ScreenBorderProps} from '../molecules/screen.border'

export type GameboyProps = {
  screenBorder: FunctionComponentElement<ScreenBorderProps>
}

const Gameboy: FC<GameboyProps> = ({screenBorder}) => (
  <div className="bg-[#e8e0da] w-[490px] h-[620px] mx-[auto] my-[1vh] rounded-tl-[1.5vw] rounded-br-[10vw] rounded-tr-[1.5vw] rounded-bl-[1.5vw] pt-[7vh] overflow-visible relative">
    {screenBorder}
  </div>
)

export default Gameboy
