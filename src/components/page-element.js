import React, { Fragment } from 'react'
import { Script, ScriptStrategy } from 'gatsby'

const GTM_ORIGIN = 'https://www.googletagmanager.com'

const PageElement = ({ children }) => {
  console.log('test')
  return (
    <Fragment>
      {children}
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
    </Fragment>
  )
}

export default PageElement
