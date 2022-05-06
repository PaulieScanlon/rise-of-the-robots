import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { isHref } from '../utils/is-href'
import { groupReducer } from '../utils/group-reducer'

const Header = () => {
  const {
    contentfulHeader: { links },
  } = useStaticQuery(graphql`
    {
      contentfulHeader {
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
    <header className="border-b border-brand-tertiary border-solid">
      <nav className="flex items-center justify-between max-w-screen-lg mx-auto px-4 py-2">
        {Object.values(groupReducer(links)).map((values, index) => {
          return (
            <ul key={index} className="flex items-center gap-x-4">
              {values.map((link, index) => {
                const { name, url, image } = link

                const img = (
                  <img
                    src={image.svg.dataURI}
                    alt={name}
                    width={image.file.details.image.width}
                    height={image.file.details.image.height}
                  />
                )

                const styles = 'svg-link hover:outline-brand-primary'

                return (
                  <li key={index}>
                    {isHref(url) ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles}
                      >
                        {img}
                      </a>
                    ) : (
                      <Link className={styles} to={url}>
                        {img}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
