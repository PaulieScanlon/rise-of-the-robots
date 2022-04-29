import React from 'react'
import { withPrefix } from 'gatsby'
import { Partytown } from '@builder.io/partytown/react'

import RootElement from './src/components/root-element'

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
    <script
      key="google-analytics"
      type="text/partytown"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}`}
    />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}', { send_page_view: false })`,
      }}
    />,
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
