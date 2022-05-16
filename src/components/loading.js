import React from 'react'
import Arrow from './arrow'

const Loading = () => (
  <div className="flex gap-2 items-center min-h[90px] text-brand-secondary">
    <Arrow className="animate-bounce" />
    <span className="text-white">
      Loading<span className="animate-pulse">.</span>
      <span className="animate-pulse delay-500">.</span>
      <span className="animate-pulse delay-1000">.</span>
    </span>
  </div>
)

export default Loading
