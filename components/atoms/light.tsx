import React, {FC, ReactNode} from 'react'

export type LightProps = {
  children?: ReactNode
}

const Light: FC<LightProps> = ({children}: LightProps) => (
  <div className="absolute top-[36%] left-[5%] w-[12px] h-[12px] bg-[#42312b] rounded-[2vw]">{children}</div>
)

export default Light
