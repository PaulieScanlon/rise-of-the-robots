import React from 'react'
import RootElement from './src/components/root-element'

import './src/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
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
