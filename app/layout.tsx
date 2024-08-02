import React, {FC, ReactNode} from 'react'
import type {Metadata} from 'next'
import './input.css'

export const metadata: Metadata = {
  title: 'DMG',
  description: 'A Gameboy emulator written with Typescript and React',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'next14', 'pwa', 'next-pwa'],
  authors: [
    {
      name: 'lubin.craig@gmail.com'
    }
  ],
  icons: [
    {rel: 'apple-touch-icon', url: 'icons/icon.png'},
    {rel: 'icon', url: 'icons/icon.png'}
  ]
}

export type RootLayoutProps = {
  children?: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({children}) => (
  <html lang="en" data-theme="winter">
    <head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
