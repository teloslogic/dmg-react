import React, {FC, FunctionComponentElement} from 'react'

import {AButtonProps} from '../atoms/a.button'
import {BButtonProps} from '../atoms/b.button'

export type BAProps = {
  bbutton: FunctionComponentElement<BButtonProps>
  abutton: FunctionComponentElement<AButtonProps>
}

const BA: FC<BAProps> = ({bbutton, abutton}) => (
  <div className="absolute h-[75px] w-[200px] top-[410px] left-[250px] bg-[linear-gradient(to_bottom,_#eae4dd_0%,_#dcd4ce_65%,_#dad1cf_100%)] rounded-[100vw] -rotate-[25deg]">
    <div className="buttons">
      {bbutton}
      {abutton}
    </div>
  </div>
)

export default BA
