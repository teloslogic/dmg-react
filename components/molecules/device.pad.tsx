import React, {FC, FunctionComponentElement} from 'react'

import {RutOneProps} from '../atoms/rut.one'
import {RutTwoProps} from '../atoms/rute.two'
import {CrossOneProps} from '../atoms/cross.one'
import {CrossTwoProps} from '../atoms/cross.two'

export type DevicePadProps = {
  rutOne: FunctionComponentElement<RutOneProps>
  rutTwo: FunctionComponentElement<RutTwoProps>
  crossOne: FunctionComponentElement<CrossOneProps>
  crossTwo: FunctionComponentElement<CrossTwoProps>
}

const DevicePad: FC<DevicePadProps> = ({rutOne, rutTwo, crossOne, crossTwo}) => (
  <div className="absolute h-[11vw] w-[11vw] top-[59.5%] left-[9%] bg-[black] bg-[linear-gradient(_52deg,_rgba(232,_231,_224,_1)_0%,_rgba(223,_215,_208,_1)_100%_)] rounded-[100vw]">
    {rutOne}
    {rutTwo}
    {crossOne}
    {crossTwo}
  </div>
)

export default DevicePad
