import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ContentfulRichTech from '../components/contentful-rich-text'

const WebinarSection = () => {
  const { contentfulWebinarSection } = useStaticQuery(graphql`
    {
      contentfulWebinarSection {
        title
        description {
          raw
        }
        buttons {
          type
          text
          url
        }
        webinarDetails
        termsAndConditions
      }
    }
  `)

  const { title, description, buttons, webinarDetails, termsAndConditions } =
    contentfulWebinarSection

  return (
    <div className="grid gap-8 items-center self-center text-center mx-auto max-w-section">
      <div className="grid gap-2">
        <h2 className="text-2xl">{title}</h2>
        <ContentfulRichTech richText={description} />
      </div>
      <h3 className="text-xl">{webinarDetails}</h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <p className="text-sm">{termsAndConditions}</p>
    </div>
  )
}

export default WebinarSection
