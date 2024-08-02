import React, {FC, FunctionComponentElement, ReactNode} from 'react'

import {ScreenBorderProps} from '../molecules/screen.border'
import {LogoProps} from '../atoms/logo'

export type EmulatorCardProps = {
  children?: ReactNode
  screenBorder: FunctionComponentElement<ScreenBorderProps>
  logo: FunctionComponentElement<LogoProps>
}

const EmulatorCard: FC<EmulatorCardProps> = ({children, screenBorder, logo}) => (
  <div className="card bg-base-300 w-[450px] shadow-xl">
    <div className="h-96 w-[100%]">{screenBorder}</div>
    <div className="card-body">
      {logo}
      {children}
    </div>
  </div>
)

export default EmulatorCard
