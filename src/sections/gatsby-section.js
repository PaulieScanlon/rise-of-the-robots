import React, { lazy, Suspense } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ContentfulRichTech from '../components/contentful-rich-text'

import Loading from '../components/loading'
import usePerfLoading from '../hooks/use-perf-loading'

const GatsbyBot = lazy(() => import('../robots/gatsby-bot'))

const GatsbySection = () => {
  const perfLoader = usePerfLoading()
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
        border {
          title
          svg {
            dataURI
          }
        }
      }
    }
  `)

  const { title, description, buttons, border } = contentfulGatsbySection

  return (
    <div className="grid lg:grid-cols-2 gap-24">
      <div className="grid gap-8 items-center self-center text-center lg:text-left mx-auto max-w-section">
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
      <div className="relative gatsby-bot flex items-center justify-center mx-auto">
        <img
          src={border.svg.dataURI}
          alt={border.title}
          className="gatsby-border"
        />

        {perfLoader ? (
          <StaticImage src="../robots/gatsby-bot.png" alt="Gatsby Bot Image" />
        ) : (
          <Suspense fallback={<Loading />}>
            <GatsbyBot />
          </Suspense>
        )}
      </div>
    </div>
  )
}

export default GatsbySection
