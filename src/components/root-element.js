import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import Seo from './seo'

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <main className="max-w-screen-xl min-w-[320px] min-h-screen mx-auto px-4">
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default RootElement
