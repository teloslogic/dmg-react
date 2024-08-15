import React, {FC, ReactNode} from 'react'

export type CrossTwoProps = {
  children?: ReactNode
}

const CrossTwo: FC<CrossTwoProps> = ({children}) => (
  <div className="absolute w-[120px] h-[30px] top-[37%] left-[1%] rounded-[0.5vw] bg-[#302f36] [box-shadow:0.2vw_0.2vw_5vw_rgba(0,_0,_0,_0.25)_inset,_-0.2vw_0.2vw_0.5vw_rgba(255,_255,_255,_0.5)_inset]">
    {children}
  </div>
)

export default CrossTwo
