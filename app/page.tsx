import React, {FC} from 'react'

import Emulator from '@/components/organisms/emulator'

import Standard from '@/components/templates/standard'

const Home: FC = () => (
  <Standard>
    <div className="flex justify-center items-center">
      <Emulator />
    </div>
  </Standard>
)

export default Home
