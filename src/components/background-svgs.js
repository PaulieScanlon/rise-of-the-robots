import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { groupReducer } from '../utils/group-reducer'

const BackgroundSvgs = () => {
  const {
    contentfulBackground: { backgroundSvg },
  } = useStaticQuery(graphql`
    {
      contentfulBackground {
        name
        backgroundSvg {
          group
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

  return (
    <div className="absolute top-0 left-0 z-0 xl:grid hidden w-screen h-full p-4">
      {Object.values(groupReducer(backgroundSvg)).map((images, index) => {
        return (
          <div key={index} className="flex justify-between">
            {images.map((svg, index) => {
              const { name, image, group } = svg
              return (
                <div
                  key={index}
                  className={`${group === 'top' ? 'self-top' : 'self-end'}`}
                >
                  <img
                    key={index}
                    src={image.svg.dataURI}
                    alt={name}
                    width={image.file.details.image.width}
                    height={image.file.details.image.height}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default BackgroundSvgs
