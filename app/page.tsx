import React, {FC} from 'react'

import Standard from '@/components/templates/standard'
import EmulatorCard from '@/components/organisms/emulator.card'

import ScreenBorder from '@/components/molecules/screen.border'
import PurpleLine from '@/components/atoms/purple.line'
import BlueLine from '@/components/atoms/blue.line'
import HeaderLine from '@/components/atoms/header.line'
import Screen from '@/components/molecules/screen'
import Light from '@/components/atoms/light'
import Battery from '@/components/atoms/battery'

import Logo from '@/components/atoms/logo'

import IOControls from '@/components/molecules/io.controls'

const Home: FC = () => (
  <Standard>
    <div className="flex justify-center items-center">
      <EmulatorCard
        screenBorder={
          <ScreenBorder
            purpleLine={<PurpleLine />}
            blueLine={<BlueLine />}
            headerLine={<HeaderLine>Dot matrix with stereo sound</HeaderLine>}
            screen={<Screen></Screen>}
            light={<Light />}
            battery={<Battery>Battery</Battery>}
          />
        }
        logo={<Logo altext="Nintendo Gameboy Logo" />}>
        <IOControls>
          <p>
            Vivamus tincidunt, justo nec viverra ullamcorper, leo sem sollicitudin lacus, ut hendrerit enim
            ligula non enim. Vestibulum ac tellus aliquet, fringilla orci sit amet, viverra metus. Aliquam
            metus libero, pulvinar id nibh at, ornare vulputate nisl. Praesent vulputate cursus risus, eget
            malesuada purus suscipit sit amet. Vestibulum iaculis molestie dui, a fermentum nisi aliquam a.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis velit vitae libero
            consectetur imperdiet. Maecenas sed turpis justo. Maecenas nec libero pretium est tristique
            vehicula id consectetur nisl. Integer ac elit vel tortor molestie porttitor.
          </p>
        </IOControls>
      </EmulatorCard>
    </div>
  </Standard>
)

export default Home
