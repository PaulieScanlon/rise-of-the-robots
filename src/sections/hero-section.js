import React, { lazy, Suspense } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ContentfulRichTech from '../components/contentful-rich-text'

import Loading from '../components/loading'
import usePerfLoading from '../hooks/use-perf-loading'

const HeroBot = lazy(() => import('../robots/hero-bot'))

const HeroSection = () => {
  const perfLoader = usePerfLoading()

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
        eventDetails {
          raw
        }
        hideButton
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
        border {
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
      }
    }
  `)

  const {
    logo,
    eventName,
    eventTagline,
    eventDetails,
    hideButton,
    button: { text, type, url },
    links,
    border,
  } = contentfulHeroSection

  return (
    <div className="grid lg:grid-cols-2 gap-24">
      <div className="grid gap-8 items-center self-center">
        <div className="grid gap-4 justify-items-center lg:justify-items-start">
          <img
            src={logo.svg.dataURI}
            alt={logo.title}
            width={logo.file.details.image.width}
            height={logo.file.details.image.height}
          />
          <div className="grid gap-8 justify-items-center lg:justify-items-start">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl">{eventName}</h1>
              <h2 className="text-md font-light">{eventTagline}</h2>
            </div>
            <div className="grid gap-4 text-center lg:text-left justify-items-center lg:justify-items-start">
              <ContentfulRichTech richText={eventDetails} />
              {hideButton ? null : (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className={`button button-${type}`}
                >
                  {text}
                </a>
              )}
            </div>
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
      <div className="relative hero-bot lg:row-start-1 flex items-center justify-center mx-auto">
        <img
          src={border.svg.dataURI}
          alt={border.title}
          className="hero-border"
        />
        {perfLoader ? (
          <StaticImage src="../robots/hero-bot.png" alt="Hero Bot Image" />
        ) : (
          <Suspense fallback={<Loading />}>
            <HeroBot />
          </Suspense>
        )}
      </div>
    </div>
  )
}

export default HeroSection
