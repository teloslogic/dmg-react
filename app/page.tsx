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
        <ul>
          <li>
            Arrow keys: <kbd className="kbd kdb-sm">▲</kbd>
            <kbd className="kbd kdb-sm">◀︎</kbd>
            <kbd className="kbd kdb-sm">▶︎</kbd>
            <kbd className="kbd kdb-sm">▼</kbd>
          </li>
          <li>
            Select: <kbd className="kbd kdb-sm">Enter</kbd>&nbsp; Start:{' '}
            <kbd className="kbd kdb-sm">Shift</kbd>&nbsp; B: <kbd className="kbd kdb-sm">B</kbd>&nbsp; A:{' '}
            <kbd className="kbd kdb-sm">A</kbd>
          </li>
        </ul>
      </EmulatorCard>
    </div>
  </Standard>
)

export default Home
