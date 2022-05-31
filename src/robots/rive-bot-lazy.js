import React, { lazy, Suspense } from 'react'
import Loading from '../components/loading'

const RiveBot = lazy(() => import('./rive-bot'))

const RiveBotLazy = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RiveBot />
    </Suspense>
  )
}

export default RiveBotLazy
