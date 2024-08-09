import React, {FC, ReactNode} from 'react'

export type CrossOneProps = {
  children?: ReactNode
}

const CrossOne: FC<CrossOneProps> = ({children}) => (
  <div className="absolute h-[112px] w-[38px] top-[8%] left-[30%] rounded-[0.5vw] bg-[#302f36] [box-shadow:0.2vw_0.2vw_5vw_rgba(0,_0,_0,_0.25)_inset,_-0.2vw_0.2vw_0.5vw_rgba(255,_255,_255,_0.5)_inset]">
    {children}
  </div>
)

export default CrossOne
