import React from 'react'
import RootElement from './src/components/root-element'
import { Script, ScriptStrategy } from 'gatsby'

import './src/styles/global.css'

const GTM_ORIGIN = 'https://www.googletagmanager.com'

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Script
        key="gtag"
        src={`${GTM_ORIGIN}/gtag/js?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}`}
        strategy={ScriptStrategy.offMainThread}
        forward={[`gtag`]}
        debug="true"
      />

      <Script
        key="gtag-func"
        id="gtag-func"
        strategy={ScriptStrategy.offMainThread}
        debug="true"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', '${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}', { send_page_view: false })
        `}
      </Script>
    </>
  )
}

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath })
    }
  }, 100)
}
