import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Hero = () => {
  const { contentfulHeroSection } = useStaticQuery(graphql`
    {
      contentfulHeroSection {
        name
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

  const { logo, eventName, eventTagline, links } = contentfulHeroSection
  return (
    <div className="grid lg:grid-cols-2 gap-4 self-center">
      <div />
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
            <h2 className="text-md font-light">{eventTagline}</h2>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {links.map((link, index) => {
            const { name, url, image } = link
            return (
              <a href={url} target="_blank" rel="noreferrer">
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

export default Hero
