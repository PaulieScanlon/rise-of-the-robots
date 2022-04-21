import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const BackgroundSvgs = () => {
  const {
    contentfulBackground: { backgroundSvg },
  } = useStaticQuery(graphql`
    {
      contentfulBackground {
        name
        backgroundSvg {
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
    <div className="absolute top-0 left-0 z-0 xl:flex hidden w-screen h-screen items-start justify-between p-4 ">
      {backgroundSvg.map((svg, index) => {
        const { name, image } = svg
        return (
          <img
            key={index}
            src={image.svg.dataURI}
            alt={name}
            width={image.file.details.image.width}
            height={image.file.details.image.height}
          />
        )
      })}
    </div>
  )
}

export default BackgroundSvgs
