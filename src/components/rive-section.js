import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ContentfulRichTech from './contentful-rich-text'

const RiveSection = () => {
  const { contentfulRiveSection } = useStaticQuery(graphql`
    {
      contentfulRiveSection {
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

  const { title, description, buttons } = contentfulRiveSection

  return (
    <div className="grid lg:grid-cols-2 gap-12 self-center">
      <div />
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h2 className="text-2xl">{title}</h2>
          <ContentfulRichTech richText={description} />
        </div>
        <div className="flex gap-4">
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
    </div>
  )
}

export default RiveSection
