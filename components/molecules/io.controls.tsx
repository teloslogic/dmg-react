import React, {FC, ReactNode} from 'react'

export type IOControlsProps = {
  children?: ReactNode
}

const IOControls: FC<IOControlsProps> = ({children}) => (
  <div className="absolute top-[80%] w-[82%] h-[60%] width-[300px] border-2 border-red-600">{children}</div>
)

export default IOControls
