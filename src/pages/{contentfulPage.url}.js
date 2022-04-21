import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import Hero from '../components/hero'

const getSection = (name) => {
  switch (name) {
    case 'Hero':
      return <Hero />

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
        const { name } = section
        return (
          <section key={index} className="grid min-h-[400px]">
            {getSection(name)}
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
        name
      }
    }
  }
`
