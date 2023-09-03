import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from './components/Navbar'
import { NavContextProvider } from './components/NavContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tan Kok Soon | My Portfolio',
  description: 'This is my portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavContextProvider>
          <Navbar />
          {children}
        </NavContextProvider>
      </body>
    </html>
  )
}
