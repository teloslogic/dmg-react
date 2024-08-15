import React, {FC} from 'react'

import Gameboy from '@/components/organisms/gameboy'

import ScreenBorder from '@/components/molecules/screen.border'

import PurpleLine from '@/components/atoms/purple.line'
import BlueLine from '@/components/atoms/blue.line'
import HeaderLine from '@/components/atoms/header.line'
import Screen from '@/components/molecules/screen'
import Light from '@/components/atoms/light'
import Battery from '@/components/atoms/battery'

import Logo from '@/components/atoms/logo'
import DevicePad from '@/components/molecules/device.pad'

import RutOne from '@/components/atoms/rut.one'
import RutTwo from '@/components/atoms/rute.two'
import CrossOne from '@/components/atoms/cross.one'
import CrossTwo from '@/components/atoms/cross.two'
import Blend from '@/components/atoms/blend'
import Divet from '@/components/atoms/divet'

import BA from '@/components/molecules/ba'
import AButton from '@/components/atoms/a.button'
import BButton from '@/components/atoms/b.button'
import Select from '@/components/atoms/select'
import Start from '@/components/atoms/start'

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
        logo={<Logo altext="Nintendo Gameboy Logo" />}
        devicePad={
          <DevicePad
            rutOne={<RutOne />}
            rutTwo={<RutTwo />}
            crossOne={<CrossOne />}
            crossTwo={<CrossTwo />}
            blend={<Blend />}
            divet={<Divet />}
          />
        }
        ba={<BA bbutton={<BButton>B</BButton>} abutton={<AButton>A</AButton>} />}
        select={<Select>SELECT</Select>}
        start={<Start>START</Start>}
      />
    </div>
  </Standard>
)

export default Home
