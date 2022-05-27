import React, { lazy, Suspense } from 'react'
import Loading from '../components/loading'

const GatsbyBot = lazy(() => import('../robots/gatsby-bot'))

const GatsbyBotLazy = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GatsbyBot />
    </Suspense>
  )
}

export default GatsbyBotLazy
