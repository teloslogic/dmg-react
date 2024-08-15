import React, {FC, ReactNode} from 'react'

export type StartProps = {
  children?: ReactNode
}

const Start: FC<StartProps> = ({children}) => (
  <div className="absolute h-[20px] w-[70px] top-[81%] left-[31%] rounded-[10vw] -rotate-[25deg] text-[#1b269b] bg-[#908785] bg-[linear-gradient(to_top,_#857d79_0%,#938787_49%,#cec3c0_100%)] text-center [box-shadow:inset_0px_0px_0px_.3vw_rgba(0,_0,_0,_0.25)] cursor-pointer">
    <span className="absolute block text-center top-[135%] text-[18px] w-full">{children}</span>
  </div>
)

export default Start
