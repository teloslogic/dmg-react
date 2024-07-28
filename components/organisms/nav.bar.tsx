import React, {FC, FunctionComponentElement} from 'react'

import {NavBarStartProps} from '../molecules/nav.bar.start'
import {NavBarCenterProps} from '../molecules/nav.bar.center'
import {NavBarEndProps} from '../molecules/nav.bar.end'

export type NavBarProps = {
  navbarStart: FunctionComponentElement<NavBarStartProps>
  navBarCenter: FunctionComponentElement<NavBarCenterProps>
  navBarEnd: FunctionComponentElement<NavBarEndProps>
}

const NavBar: FC<NavBarProps> = ({navbarStart, navBarCenter, navBarEnd}) => (
  <div className="navbar bg-base-100 shadow-xl border-1">
    {navbarStart}
    {navBarCenter}
    {navBarEnd}
  </div>
)

export default NavBar
