import React, { lazy } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import ContentfulRichTech from './contentful-rich-text'

import RiveLazy from './rive-lazy'

import HeroBot from '../../static/images/rive-bot.riv'
const RiveAnimation = lazy(() => import('../components/rive-animation'))

const RiveSection = () => {
  const { contentfulRiveSection } = useStaticQuery(graphql`
    {
      contentfulRiveSection {
        title
        description {
          raw
        }
        buttons {
          type
          text
          url
        }
      }
    }
  `)

  const { title, description, buttons } = contentfulRiveSection

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="grid gap-8 items-center self-center text-center lg:text-left mx-auto max-w-section">
        <div className="grid gap-2">
          <h2 className="text-2xl">{title}</h2>
          <ContentfulRichTech richText={description} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {buttons.map((button, index) => {
            const { type, text, url } = button
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`button button-${type}`}
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
      <div className="lg:row-start-1  flex items-center justify-center">
        <RiveLazy
          animation={
            <RiveAnimation
              ariaLabel="Rive Bot Animation"
              riveFile={HeroBot}
              className="rive-bot"
            />
          }
          fallback={
            <StaticImage
              className="rive-bot"
              src="../../static/images/rive-bot.png"
              alt="Rive Bot Image"
            />
          }
        />
      </div>
    </div>
  )
}

export default RiveSection
