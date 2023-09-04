'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md'

import { useNavContext } from './NavContext'

export const Navbar = () => {
  const navRef = useNavContext()

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const executeScroll = (name: 'home' | 'about' | 'porfolio') =>
    navRef?.[name]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

  const getTheme = () => {
    if (
      sessionStorage.theme === 'dark' ||
      (!('theme' in sessionStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkTheme(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkTheme(false)
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    getTheme()
  }, [isDarkTheme])

  return (
    <nav className=" top-0 w-full h-14 fixed flex items-center justify-end bg-white/75 dark:shadow dark:bg-gray-800/75">
      <div
        onClick={() => executeScroll('home')}
        className="cursor-pointer mx-4 sm:mx-6 animate-bounce-xy"
      >
        <Image
          src={`${process.env.exportPath || ''}/logo192.png`}
          alt="Vercel Logo"
          width={50}
          height={30}
          priority
        />
      </div>

      <div className="container flex justify-end p-6 mx-auto text-custom-blue dark:text-gray-300">
        <div
          onClick={() => {
            sessionStorage.theme = isDarkTheme ? 'light' : 'dark'
            setIsDarkTheme(!isDarkTheme)
          }}
          className="text-2xl border-b-2 border-transparent dark:hover:text-gray-200 hover:border-custom-blue hover:cursor-pointer mx-1.5 sm:mx-6 mt-1"
        >
          {isDarkTheme ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
        </div>
        <div
          onClick={() => executeScroll('about')}
          className="text-2xl border-b-2 border-transparent dark:hover:text-gray-200 hover:border-custom-blue hover:cursor-pointer mx-1.5 sm:mx-6"
        >
          About
        </div>

        <div
          onClick={() => executeScroll('porfolio')}
          className="text-2xl border-b-2 border-transparent dark:hover:text-gray-200 hover:border-custom-blue hover:cursor-pointer mx-1.5 sm:mx-6"
        >
          Portfolio
        </div>
      </div>
    </nav>
  )
}
