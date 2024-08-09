import React, {FC} from 'react'

import Image from 'next/image'

export type LogoProps = {
  altext: string
}

const Logo: FC<LogoProps> = ({altext}) => (
  <div className="absolute left-[5.2%] top-[33%] w-[63%]">
    <Image src="/nintendo.png" alt={altext} width={900} height={900}></Image>
  </div>
)

export default Logo
