import React, { lazy, Suspense } from 'react'
import Loading from '../components/loading'

const HeroBot = lazy(() => import('./hero-bot'))

const HeroBotLazy = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HeroBot />
    </Suspense>
  )
}

export default HeroBotLazy
