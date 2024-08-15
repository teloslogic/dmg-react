import React, {FC} from 'react'

export type BlendProps = object

const Blend: FC<BlendProps> = () => (
  <div className="absolute w-[25px] h-[25px] top-[30%] left-[36%] rounded-tl-[0] rounded-br-[5vw] rounded-tr-[5vw] rounded-bl-[0] bg-[#2a292d]"></div>
)

export default Blend
