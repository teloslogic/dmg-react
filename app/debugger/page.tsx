import React, {FC} from 'react'

import Emulator from '@/components/organisms/emulator'

import Standard from '@/components/templates/standard'

const Debugger: FC = () => (
  <Standard>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div id="column-1">
        <Emulator />
      </div>
      <div id="column-2">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Cartridge Information</h2>
            <p>Cartridge Stuff Goes Here</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div id="column-3">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">CPU Registers</h2>
            <p>Register Stuff Goes Here</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  </Standard>
)

export default Debugger
