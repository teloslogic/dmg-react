import React, {FC, ReactNode} from 'react'

export type BButtonProps = {
  children?: ReactNode
}

const BButton: FC<BButtonProps> = ({children}) => (
  <a className="bg-[red] absolute h-[70px] w-[70px] top-[5px] left-[12px] bg-[#b02965] rounded-[100vw] text-[#1b269b] text-center [box-shadow:0px_.3vw_.2vw_0_rgba(0,0,0,0.10),_0.2vw_-0.2vw_1vw_rgba(255,_255,_255,_0.2)_inset] before:content-[''] before:w-full before:h-full before:rounded-[100vw] before:block before:absolute before:left-[0] before:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5)_8%,rgba(255,255,255,0)_100%)] before:rotate-[25deg] before:cursor-pointer absolute top-[130%] [text-indent:-0.3vw] text-[23px]">
    <span className=" absolute top-[75px] left-[35px]">{children}</span>
  </a>
)

export default BButton
