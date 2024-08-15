import React, {FC, ReactNode} from 'react'

export type BlueLineProps = {
  children?: ReactNode
}

const BlueLine: FC<BlueLineProps> = ({children}) => (
  <div className="absolute top-[6%] left-[4%] w-[92%] h-[3px] bg-[#201974]">{children}</div>
)

export default BlueLine
