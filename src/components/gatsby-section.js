import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ContentfulRichTech from './contentful-rich-text'

const GatsbySection = () => {
  const { contentfulGatsbySection } = useStaticQuery(graphql`
    {
      contentfulGatsbySection {
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

  const { title, description, buttons } = contentfulGatsbySection

  return (
    <div className="grid lg:grid-cols-2 gap-12 self-center">
      <div className="grid gap-8 text-center lg:text-left mx-auto max-w-section">
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
      <div />
    </div>
  )
}

export default GatsbySection
