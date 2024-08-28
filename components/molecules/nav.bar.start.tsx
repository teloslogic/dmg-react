import React, {FC} from 'react'
import Link from 'next/link'

export type NavBarStartProps = {
  brandText: string
}

const NavBarStart: FC<NavBarStartProps> = ({brandText}) => (
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
    <Link className="btn btn-ghost text-xl" href="/">
      {brandText}
    </Link>
  </div>
)

export default NavBarStart
