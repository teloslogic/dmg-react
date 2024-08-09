import React, {FC} from 'react'

import Gameboy from '@/components/organisms/gameboy'

import ScreenBorder from '@/components/molecules/screen.border'

import PurpleLine from '@/components/atoms/purple.line'
import BlueLine from '@/components/atoms/blue.line'
import HeaderLine from '@/components/atoms/header.line'
import Screen from '@/components/molecules/screen'
import Light from '@/components/atoms/light'
import Battery from '@/components/atoms/battery'

import Standard from '@/components/templates/standard'

const Home: FC = () => (
  <Standard>
    <div className="flex justify-center items-center">
      <Gameboy
        screenBorder={
          <ScreenBorder
            purpleLine={<PurpleLine />}
            blueLine={<BlueLine />}
            headerLine={<HeaderLine>Dot matrix with stereo sound</HeaderLine>}
            screen={<Screen />}
            light={<Light />}
            battery={<Battery>Battery</Battery>}
          />
        }
      />
    </div>
  </Standard>
)

export default Home
