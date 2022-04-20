import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { isHref } from '../utils/is-href'

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

  const groups = links.reduce((items, item) => {
    const { group } = item

    items[group] = items[group] || []

    items[group].push(item)

    return items
  }, {})

  return (
    <header>
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-4 border-b border-brand-secondary border-solid">
        {Object.values(groups).map((values, index) => {
          return (
            <ul key={index} className="flex items-center gap-x-4">
              {values.map((link, index) => {
                const {
                  name,
                  url,
                  image: {
                    file: {
                      details: {
                        image: { width, height },
                      },
                    },
                    svg: { dataURI },
                  },
                } = link

                const image = (
                  <img src={dataURI} alt={name} width={width} height={height} />
                )

                return (
                  <li key={index}>
                    {isHref(url) ? (
                      <a href={url} target="_blank" rel="noreferrer">
                        {image}
                      </a>
                    ) : (
                      <Link to={url}>{image}</Link>
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
