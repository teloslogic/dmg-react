import React, {FC, ReactNode} from 'react'
import {Provider} from 'jotai'

export type ProvidersProps = {
  children?: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => <Provider>{children}</Provider>

export default Providers
