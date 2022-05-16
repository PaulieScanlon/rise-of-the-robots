import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import Seo from './seo'
import BackgroundSvgs from './background-svgs'

const RootElement = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <main className="relative">
        <div className="relative max-w-screen-lg min-w-[320px] min-h-[1800px] mx-auto px-4 py-20 z-10">
          {children}
        </div>
        <BackgroundSvgs />
      </main>
      <Footer />
    </Fragment>
  )
}

export default RootElement
