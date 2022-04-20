import React, { Fragment } from 'react'
import Header from './header'
import Seo from './seo'

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <main className="max-w-screen-xl min-w-[320px] mx-auto px-4">
        {children}
      </main>
    </Fragment>
  )
}

export default RootElement
