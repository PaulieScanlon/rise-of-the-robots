import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ContentfulRichTech from '../components/contentful-rich-text'
import YouTubeEmbed from '../components/youtube-embed'

const TrailerSection = () => {
  const { contentfulTrailerSection } = useStaticQuery(graphql`
    {
      contentfulTrailerSection {
        title
        description {
          raw
        }
        videoId
        videoTitle
      }
    }
  `)

  const { title, description, videoId, videoTitle } = contentfulTrailerSection

  return (
    <div className="grid gap-8 items-center self-center text-center mx-auto max-w-section">
      <div className="grid gap-2">
        <h2 className="text-2xl">{title}</h2>
        <ContentfulRichTech richText={description} />
      </div>
      <div>
        <YouTubeEmbed id={videoId} title={videoTitle} />
      </div>
    </div>
  )
}

export default TrailerSection
