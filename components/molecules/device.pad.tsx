import React, {FC, FunctionComponentElement} from 'react'

import {RutOneProps} from '../atoms/rut.one'
import {RutTwoProps} from '../atoms/rute.two'
import {CrossOneProps} from '../atoms/cross.one'
import {CrossTwoProps} from '../atoms/cross.two'
import {BlendProps} from '../atoms/blend'
import {DivetProps} from '../atoms/divet'

export type DevicePadProps = {
  rutOne: FunctionComponentElement<RutOneProps>
  rutTwo: FunctionComponentElement<RutTwoProps>
  crossOne: FunctionComponentElement<CrossOneProps>
  crossTwo: FunctionComponentElement<CrossTwoProps>
  blend: FunctionComponentElement<BlendProps>
  divet: FunctionComponentElement<DivetProps>
}

const DevicePad: FC<DevicePadProps> = ({rutOne, rutTwo, crossOne, crossTwo, blend, divet}) => (
  <div className="absolute h-[145px] w-[145px] top-[52.5%] left-[9%] bg-[black] bg-[linear-gradient(_52deg,_rgba(232,_231,_224,_1)_0%,_rgba(223,_215,_208,_1)_100%_)] rounded-[100vw]">
    {rutOne}
    {rutTwo}
    {crossOne}
    {crossTwo}
    {blend}
    {divet}
  </div>
)

export default DevicePad
