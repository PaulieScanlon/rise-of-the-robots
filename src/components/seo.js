import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ customTitle, customDescription, customUrl, customImage }) => {
  const {
    contentfulSiteMetadata: {
      url,
      cloudUrl,
      title,
      description,
      image,
      language,
      keywords,
    },
  } = useStaticQuery(graphql`
    {
      contentfulSiteMetadata {
        url
        cloudUrl
        title
        description
        image {
          gatsbyImage(layout: FIXED, width: 1024, quality: 100)
        }
        language
        keywords {
          items
        }
      }
    }
  `)

  const seoTitle = customTitle || title
  const seoDescription = customDescription ? customDescription : description
  const seoUrl = customUrl ? `${url}${customUrl}` : url
  const seoImage = customImage
    ? `${cloudUrl}${customImage}`
    : `${cloudUrl}${image.gatsbyImage.images.fallback.src}`

  return (
    <Helmet>
      {/* Default / HTML */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <html lang={language} />
      <title>{seoTitle}</title>
      <link rel="canonical" href={seoUrl} />

      {/* Primary Meta Tags */}
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      <meta
        name="keywords"
        content={keywords ? keywords.items.join(', ') : null}
      />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-16x16.png`}
        data-react-helmet="true"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-32x32.png`}
        data-react-helmet="true"
      />
    </Helmet>
  )
}

Seo.propTypes = {
  /** A custom HTML title that overwrites the default title */
  customTitle: PropTypes.string,
  /** A custom meta description that overwrites the default description */
  customDescription: PropTypes.string,
  /** A custom meta url that overwrites the default url */
  customUrl: PropTypes.string,
  /** A custom open graph image that overwrites the default image */
  customImage: PropTypes.any,
}

export default Seo
