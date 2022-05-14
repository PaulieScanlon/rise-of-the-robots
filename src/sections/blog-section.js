import React, { lazy, Suspense } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ContentfulRichTech from '../components/contentful-rich-text'

import Loading from '../components/loading'
import usePerfLoading from '../hooks/use-perf-loading'

const BlogBot = lazy(() => import('../robots/blog-bot'))

const BlogSection = () => {
  const perfLoader = usePerfLoading()

  const { contentfulBlogSection } = useStaticQuery(graphql`
    {
      contentfulBlogSection {
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

  const { title, description, buttons, border } = contentfulBlogSection

  return (
    <div className="grid lg:grid-cols-2 gap-24 self-center">
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
      <div className="relative flex blog-image items-center justify-center">
        <img
          src={border.svg.dataURI}
          alt={border.title}
          className="blog-border"
        />
        {perfLoader ? (
          <StaticImage
            className="blog-bot"
            src="../robots/blog-bot.png"
            alt="Blot Bot Image"
          />
        ) : (
          <Suspense fallback={<Loading />}>
            <BlogBot />
          </Suspense>
        )}
      </div>
    </div>
  )
}

export default BlogSection
