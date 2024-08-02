import React, {FC, ReactNode} from 'react'

export type ScreenProps = {
  children?: ReactNode
}

const Screen: FC<ScreenProps> = ({children}: ScreenProps) => (
  <div className="before:hidden absolute top-[10%] left-[17%] w-[66%] h-[78%] bg-[#819330] [box-shadow:inset_-12px_4px_23px_0px_rgba(0,_0,_0,_0.26),_0px_0px_5px_2px_rgba(255,_255,_255,_0.06)] rounded-[0.25vw]">
    {children}
  </div>
)

export default Screen
