import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import HeroSection from '../sections/hero-section'
import GatsbySection from '../sections/gatsby-section'
import RiveSection from '../sections/rive-section'
import FormSection from '../sections/form-section'
import BlogSection from '../sections/blog-section'
import NotFoundSection from '../sections/not-found-section'

const getSection = (__typename) => {
  switch (__typename) {
    case 'ContentfulHeroSection':
      return <HeroSection />

    case 'ContentfulGatsbySection':
      return <GatsbySection />

    case 'ContentfulRiveSection':
      return <RiveSection />

    case 'ContentfulFormSection':
      return <FormSection />

    case 'ContentfulBlogSection':
      return <BlogSection />

    case 'ContentfulNotFoundSection':
      return <NotFoundSection />

    default:
      break
  }
}

const Page = ({
  data: {
    contentfulPage: { sections },
  },
}) => {
  return (
    <Fragment>
      {sections.map((section, index) => {
        const { __typename } = section
        return <section key={index}>{getSection(__typename)}</section>
      })}
    </Fragment>
  )
}

export default Page

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      sections {
        __typename
      }
    }
  }
`
