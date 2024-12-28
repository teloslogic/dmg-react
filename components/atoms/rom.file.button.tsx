import React, {FC, ReactNode} from 'react'

export type RomFileProps = {
  children?: ReactNode
}

const RomFileButton: FC<RomFileProps> = ({children}) => (
  <label className="btn btn-outline">
    {children}
    <input type="file" className="hidden" id="game-romfile" accept=".gb,.gbc" />
  </label>
)

export default RomFileButton
