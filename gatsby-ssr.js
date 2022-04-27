import React from 'react'
import { withPrefix } from 'gatsby'

import RootElement from './src/components/root-element'

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setHeadComponents([
    <link
      key="Inconsolata-Bold-w"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-Bold.woff`}
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Inconsolata-Bold-w2"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-Bold.woff2`}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Inconsolata-Regular-w"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-Regular.woff`}
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Inconsolata-Regular-w2"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-Regular.woff2`}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Inconsolata-ExtraLight-w"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-ExtraLight.woff`}
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Inconsolata-ExtraLight-w2"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-ExtraLight.woff2`}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}
