import React, { Fragment } from 'react'
import Seo from './seo'

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <main>{children}</main>
    </Fragment>
  )
}

export default RootElement
