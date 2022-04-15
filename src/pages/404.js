import React, { Fragment } from 'react'
import Seo from '../components/seo'

const Page = () => {
  return (
    <Fragment>
      <Seo customDescription="Page Not Found" customUrl="/404" />
      <main>
        <h1>404</h1>
      </main>
    </Fragment>
  )
}

export default Page
