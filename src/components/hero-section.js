import React, { lazy } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import RiveLazy from './rive-lazy'

import HeroBot from '../../static/images/hero-bot.riv'
const RiveAnimation = lazy(() => import('../components/rive-animation'))

const HeroSection = () => {
  const { contentfulHeroSection } = useStaticQuery(graphql`
    {
      contentfulHeroSection {
        logo {
          title
          file {
            details {
              image {
                width
                height
              }
            }
          }
          svg {
            dataURI
          }
        }
        eventName
        eventTagline
        eventDetails
        button {
          text
          type
          url
        }
        links {
          url
          name
          image {
            file {
              details {
                image {
                  width
                  height
                }
              }
            }
            svg {
              dataURI
            }
          }
        }
      }
    }
  `)

  const {
    logo,
    eventName,
    eventTagline,
    eventDetails,
    button: { text, type, url },
    links,
  } = contentfulHeroSection
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="grid gap-8">
        <div className="grid gap-4 justify-items-center lg:justify-items-start">
          <img
            src={logo.svg.dataURI}
            alt={logo.title}
            width={logo.file.details.image.width}
            height={logo.file.details.image.height}
          />
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl">{eventName}</h1>
            <h2 className="text-md font-light">{eventTagline}</h2>
          </div>
          <div className="grid gap-4 text-center lg:text-left justify-items-center lg:justify-items-start">
            <h3 className="text-md font-bold">{eventDetails}</h3>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={`button button-${type}`}
            >
              {text}
            </a>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center lg:justify-start">
          {links.map((link, index) => {
            const { name, url, image } = link
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="svg-link flex items-center h-10 hover:outline-white"
              >
                <img
                  src={image.svg.dataURI}
                  alt={name}
                  width={image.file.details.image.width}
                  height={image.file.details.image.height}
                />
              </a>
            )
          })}
        </div>
      </div>
      <div className="lg:row-start-1 flex items-center justify-center">
        <RiveLazy
          animation={
            <RiveAnimation
              ariaLabel="Hero Bot Animation"
              riveFile={HeroBot}
              className="hero-bot"
            />
          }
          fallback={
            <StaticImage
              className="hero-bot"
              src="../../static/images/hero-bot.png"
              alt="Hero Bot Image"
            />
          }
        />
      </div>
    </div>
  )
}

export default HeroSection
