import React, { lazy, Suspense } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import ContentfulRichTech from '../components/contentful-rich-text'
import Loading from '../components/loading'
import usePerfLoading from '../hooks/use-perf-loading'

const FormBot = lazy(() => import('../robots/form-bot'))

const NotFoundSection = () => {
  const perfLoader = usePerfLoading()

  const { contentfulNotFoundSection } = useStaticQuery(graphql`
    {
      contentfulNotFoundSection {
        title
        description {
          raw
        }
        border {
          title
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
  `)

  const { title, description, border } = contentfulNotFoundSection

  return (
    <div className="grid gap-0">
      <div className="relative form-image flex items-center justify-center">
        <img
          src={border.svg.dataURI}
          alt={border.title}
          width={border.file.details.image.width}
          height={border.file.details.image.height}
          className="form-border"
        />

        {perfLoader ? (
          <StaticImage
            className="form-image"
            src="../robots/form-bot.png"
            alt="Form Bot Image"
          />
        ) : (
          <Suspense fallback={<Loading />}>
            <FormBot hasError={true} />
          </Suspense>
        )}
      </div>
      <div className="grid gap-8 text-center mx-auto max-w-section">
        <div className="grid gap-2">
          <h1 className="text-2xl md:text-3xl">{title}</h1>
          <ContentfulRichTech richText={description} />
        </div>
        <div className="flex gap-4 justify-center ">
          <Link to="/" className="button button-ghost">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundSection
