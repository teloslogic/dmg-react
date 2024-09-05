import React, {FC} from 'react'

import Emulator from '@/components/organisms/emulator'
import Standard from '@/components/templates/standard'

const Home: FC = () => (
  <Standard>
    <Emulator />
  </Standard>
)

export default Home
