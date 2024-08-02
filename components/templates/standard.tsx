import React, {FC, ReactNode} from 'react'

import NavBar from '../organisms/nav.bar'
import NavBarStart from '../molecules/nav.bar.start'
import NavBarCenter from '../molecules/nav.bar.center'
import NavBarEnd from '../molecules/nav.bar.end'

import ThemeController from '../atoms/theme.controller'
import Footer from '../organisms/footer'

export type StandardProps = {
  children?: ReactNode
}

const Standard: FC<StandardProps> = ({children}) => (
  <div className="flex flex-col min-h-screen">
    <nav>
      <NavBar
        navbarStart={<NavBarStart brandText="Dot Matrix Game" />}
        navBarCenter={<NavBarCenter />}
        navBarEnd={
          <NavBarEnd>
            <ThemeController />
          </NavBarEnd>
        }
      />
    </nav>
    <main className="p-5">{children}</main>
    <footer className="mt-auto">
      <Footer />
    </footer>
  </div>
)

export default Standard
