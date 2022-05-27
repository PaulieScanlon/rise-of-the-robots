import React, { lazy, Suspense } from 'react'
import Loading from '../components/loading'

const BlogBot = lazy(() => import('../robots/blog-bot'))

const BlogBotLazy = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BlogBot />
    </Suspense>
  )
}

export default BlogBotLazy
