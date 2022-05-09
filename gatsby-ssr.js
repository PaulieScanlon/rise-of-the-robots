import React from 'react'
import { withPrefix } from 'gatsby'
// import { Partytown } from '@builder.io/partytown/react'

import RootElement from './src/components/root-element'

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setHeadComponents([
    // <Partytown
    //   key="partytown"
    //   forward={['gtag']}
    //   lib={withPrefix('~partytown')}
    // />,
    // <script
    //   key="google-analytics"
    //   type="text/partytown"
    //   src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}`}
    // />,
    // https://developers.google.com/tag-platform/tag-manager/web
    // <script
    //   key="google-analytics-config"
    //   type="text/partytown"
    //   dangerouslySetInnerHTML={{
    //     __html: `window.dataLayer = window.dataLayer || [];
    //     window.gtag = function gtag(){ window.dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', '${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}', { send_page_view: false })`,
    //   }}
    // />,
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
