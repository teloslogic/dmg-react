import React, {FC} from 'react'

export type PurpleLineProps = {
  children?: React.ReactNode
}

const PurpleLine: FC<PurpleLineProps> = (props: PurpleLineProps) => (
  <div className="absolute top-[3%] left-[4%] w-[92%] h-[3px] bg-[#923671]">{props.children}</div>
)

export default PurpleLine
