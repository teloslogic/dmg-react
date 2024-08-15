import React, {FC, ReactNode} from 'react'

export type BatteryProps = {
  children?: ReactNode
}

const Battery: FC<BatteryProps> = ({children}) => (
  <div className="absolute inline-block top-[44%] left-[2%] text-[white] uppercase text-[11px]">
    {children}
  </div>
)

export default Battery
