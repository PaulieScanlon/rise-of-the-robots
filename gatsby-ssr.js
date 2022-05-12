import React from 'react'
import { withPrefix, Script, ScriptStrategy } from 'gatsby'

import RootElement from './src/components/root-element'

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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="Inconsolata-Bold-w2"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-Bold.woff2`}
      as="font"
      type="font/woff2"
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
      key="Inconsolata-Light-w2"
      rel="preload"
      href={`${withPrefix('/')}fonts/Inconsolata-Light.woff2`}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <style
      key="inline-style"
      dangerouslySetInnerHTML={{
        __html: `
      @font-face {
        font-family: 'Inconsolata-Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(${withPrefix(
          '/'
        )}fonts/Inconsolata-Bold.woff2) format('woff2'),
          url(${withPrefix('/')}fonts/Inconsolata-Bold.woff) format('woff');
      }
      @font-face {
        font-family: 'Inconsolata-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${withPrefix(
          '/'
        )}fonts/Inconsolata-Regular.woff2) format('woff2'),
          url(${withPrefix('/')}fonts/Inconsolata-Regular.woff) format('woff');
      }
      @font-face {
        font-family: 'Inconsolata-Light';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${withPrefix(
          '/'
        )}fonts/Inconsolata-Light.woff2) format('woff2'),
          url(${withPrefix('/')}fonts/Inconsolata-Light.woff) format('woff');
      }
    `,
      }}
    />,
  ])
}
