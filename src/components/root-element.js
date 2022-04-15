import React, { Fragment } from 'react'
import Seo from './seo'

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <main className="min-w-[320px]">{children}</main>
    </Fragment>
  )
}

export default RootElement
