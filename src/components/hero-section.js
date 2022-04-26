import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <div className="grid lg:grid-cols-2 gap-12 self-center">
      <div className="hero-robot-temp" />
      <div className="grid gap-8">
        <div className="grid gap-4">
          <img
            src={logo.svg.dataURI}
            alt={logo.title}
            width={logo.file.details.image.width}
            height={logo.file.details.image.height}
          />
          <div>
            <h1 className="text-4xl">{eventName}</h1>
            <h2 className="text-sm font-light">{eventTagline}</h2>
          </div>
          <div className="grid gap-4">
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
        <div className="flex gap-4 items-center">
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
    </div>
  )
}

export default HeroSection
