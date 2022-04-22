import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import HeroSection from '../components/hero-section'
import GatsbySection from '../components/gatsby-section'

const getSection = (__typename) => {
  switch (__typename) {
    case 'ContentfulHeroSection':
      return <HeroSection />

    case 'ContentfulGatsbySection':
      return <GatsbySection />

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
        return (
          <section key={index} className="grid min-h-[400px]">
            {getSection(__typename)}
          </section>
        )
      })}
    </Fragment>
  )
}

export default Page

export const query = graphql`
  {
    contentfulPage {
      sections {
        __typename
      }
    }
  }
`
