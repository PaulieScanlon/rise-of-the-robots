import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { groupReducer } from '../utils/group-reducer'

const Footer = () => {
  const {
    contentfulFooter: { links },
  } = useStaticQuery(graphql`
    {
      contentfulFooter {
        name
        links {
          name
          url
          group
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

  return (
    <footer>
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-4 text-brand-gray">
        {Object.values(groupReducer(links)).map((values, index) => {
          return (
            <ul key={index} className="flex items-center gap-x-4">
              {values.map((link, index) => {
                const { name, url, image } = link
                return (
                  <li key={index}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white"
                    >
                      {image ? (
                        <img
                          src={image.svg.dataURI}
                          alt={name}
                          width={image.file.details.image.width}
                          height={image.file.details.image.height}
                        />
                      ) : (
                        <Fragment>{name}</Fragment>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          )
        })}
      </nav>
    </footer>
  )
}

export default Footer
