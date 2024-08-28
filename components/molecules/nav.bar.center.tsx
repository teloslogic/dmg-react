import React, {FC} from 'react'
import Link from 'next/link'

export type NavBarCenterProps = object

const NavBarCenter: FC<NavBarCenterProps> = () => (
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-lg">
        <Link href="/debugger">Debugger</Link>
      </li>
      <li className="text-lg">
        <Link href="/instructions">Instructions</Link>
      </li>
      <li className="text-lg">
        <Link href="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default NavBarCenter
