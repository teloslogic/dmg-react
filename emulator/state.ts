import {atom} from 'jotai'

import {Emulator} from './emulator'
import {EmulatorOf} from './emulator.of'

const emulatorAtom = atom<Emulator>(EmulatorOf())

export default emulatorAtom
