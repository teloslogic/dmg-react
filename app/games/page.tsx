import React, {FC} from 'react'

import Standard from '@/components/templates/standard'
import CartridgeCard from '@/components/molecules/cartridge.card'

const Games: FC = () => (
  <Standard>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div id="column-1">
        <CartridgeCard altText="Image Of The Tetris Game Cartridge" src="/roms/tetris-v1-1.webp" />
      </div>
      <div id="column-2">
        <CartridgeCard
          altText="Image Of The Super Mario Land Game Cartridge"
          src="/roms/super-mario-land-v1-1.webp"
        />
      </div>
      <div id="column-3">
        <CartridgeCard altText="Image Of The Mortal Kombat Game Cartridge" src="/roms/mortal-kombat.webp" />
      </div>
    </div>
  </Standard>
)

export default Games
