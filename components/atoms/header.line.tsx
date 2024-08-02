import React, {FC, ReactNode} from 'react'

export type HeaderLineProps = {
  children?: ReactNode
}

const HeaderLine: FC<HeaderLineProps> = ({children}) => (
  <div className="absolute inline-block top-[1.75%] right-[15%] text-[white] uppercase text-[10px] bg-[#848190]">
    {children}
  </div>
)

export default HeaderLine
