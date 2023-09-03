'use client'
import { createContext, createRef, useContext } from 'react'

interface NavRefType {
  home: React.RefObject<HTMLParagraphElement>
  about: React.RefObject<HTMLParagraphElement>
  porfolio: React.RefObject<HTMLParagraphElement>
}

const navRef = {
  home: createRef<HTMLParagraphElement>(),
  about: createRef<HTMLParagraphElement>(),
  porfolio: createRef<HTMLParagraphElement>(),
}
const NavContext = createContext<NavRefType>(navRef)

export const NavContextProvider = (props: { children: React.ReactNode }) => {
  return (
    <NavContext.Provider value={navRef}>{props.children}</NavContext.Provider>
  )
}

export const useNavContext = () => useContext(NavContext)
