'use client'

import { useNavContext } from './components/NavContext'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import PortfolioItems from './components/PortfolioItems'

const SectionContainer = (props: {
  navName: 'home' | 'about' | 'porfolio'
  children: React.ReactNode
}) => {
  const navRef = useNavContext()

  return (
    <div
      className={`min-h-screen pt-12 flex flex-col items-center ${
        props.navName === 'home' && 'justify-center'
      }`}
      ref={navRef?.[props.navName]}
    >
      <div className="w-[calc(100%_-_23rem)]">{props.children}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <SectionContainer navName={'home'}>
        <div className={`text-center pt-12 pb-6 px-4`}>
          <h1 className={`text-7xl leading-16 font-bold pb-4`}>
            {"Hello, I'm Kok Soon!"}
          </h1>
          <h1 className={`text-2xl font-light my-7`}>
            {'Full Stack Developer | ReactJS & NodeJS'}
          </h1>
          <div className="animate-icons py-1 text-6xl text-custom-blue">
            <a
              className="inline-block px-3 hover:animate-icon-wobble"
              href="https://github.com/koksoon7417"
            >
              <FaGithub />
            </a>
            <a
              className="inline-block px-3 hover:animate-icon-wobble"
              href="https://www.linkedin.com/in/kok-soon-tan/"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer navName={'about'}>
        <h1 className={`py-4 text-6xl`}>About</h1>
        <div className="text-base p-2">
          <p className="py-2">
            Well-qualified Full Stack Developer with years of experience in
            application layers, presentation layers, and databases.
          </p>
          <p className="py-2">
            Prototyped 20 new product features per year for clients. Followed
            and completed Software Development Life Cycle (SDLC) best practices
            within an Agile environment.
          </p>
          <p className="py-2">
            Passionate about building world-class web applications using MERN
            stack.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer navName={'porfolio'}>
        <h1 className={`py-4 text-6xl`}>Porfolio</h1>
        <PortfolioItems />
      </SectionContainer>
    </main>
  )
}
