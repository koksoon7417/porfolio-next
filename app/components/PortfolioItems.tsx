import React from 'react'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaAngular, FaNodeJs } from 'react-icons/fa'

const portfolioItemsInit = [
  {
    name: 'Weather Forecast',
    content:
      'Worked actively with 3 enginnering students to create a webpage that can provide a range of weather forecast at the current location or any locations.',
    footerIcons: [<BiLogoJavascript key={'weather1'} />],

    links: [
      {
        url: 'https://koksoon7417.github.io/weatherForecast/',
        title: 'Web App',
      },
      {
        url: 'https://github.com/koksoon7417/weatherForecast',
        title: 'Codes',
      },
    ],
  },
  {
    name: 'Challenges',
    content:
      'Partnered with the University of Malaya Medical Centre, doctors and the UMCH team to design a challenges project that allows a user to compete with other users.',
    footerIcons: [
      <FaAngular key={'challenge1'} />,
      <FaNodeJs key={'challenge2'} />,
      <BiLogoJavascript key={'challenge3'} />,
    ],
    links: [],
  },
]

export const PortfolioItem = (props: {
  title: string
  content: string
  footerIcons: React.ReactNode[]
  links: {
    url: string
    title: string
  }[]
}) => {
  const { title, content, footerIcons, links } = props

  return (
    <div className="text-white font-light text-center">
      <div className="flex-1 text-xl px-6 py-4 "> {title}</div>
      <div className="flex flex-col px-2 font-extralight text-sm">
        {content}
      </div>
      <div className="flex gap-1 py-4 text-3xl justify-center">
        {footerIcons.map((footerIcon) => footerIcon)}
      </div>
      <div className="flex pb-3 justify-around text-sm">
        {links &&
          links.map((link, i) => (
            <a
              className="pb-1 border-b-2 border-transparent hover:border-white"
              href={link.url}
              key={i}
            >
              {link.title}
            </a>
          ))}
      </div>
    </div>
  )
}

export const PortfolioItems = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {portfolioItemsInit.map((item, i) => (
        <div
          className="bg-custom-blue flex flex-col rounded-xl shadow-sm hover:shadow-lg w-72 m-4"
          key={i}
        >
          <PortfolioItem
            title={item.name}
            content={item.content}
            footerIcons={item.footerIcons}
            links={item.links}
            key={i}
          />
        </div>
      ))}
    </div>
  )
}

export default PortfolioItems
