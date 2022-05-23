import React, { useRef, useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

import Bot from './blog-bot.riv'

const STATE_MACHINE = 'State Machine 1'

const BlogBot = () => {
  const ref = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const { RiveComponent, rive } = useRive({
    src: Bot,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  })

  const isVisible = useStateMachineInput(rive, STATE_MACHINE, 'isVisible')
  const isLimitedInput = useStateMachineInput(rive, STATE_MACHINE, 'isLimited')

  useEffect(() => {
    if (rive && isLimitedInput) {
      if (prefersReducedMotion) {
        isLimitedInput.value = true
      } else {
        isLimitedInput.value = false
      }
    }
  }, [rive, prefersReducedMotion, isLimitedInput])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (rive && isVisible) {
          if (entry.isIntersecting) {
            isVisible.value = true
          } else {
            isVisible.value = false
          }
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    )
    if (ref && ref.current) {
      observer.observe(ref.current)
    }
  }, [rive, isVisible])

  return (
    <div ref={ref} className="blog-bot">
      <RiveComponent
        role="img"
        aria-label="Blog Bot Animation"
        width={380}
        height={380}
      />
    </div>
  )
}

export default BlogBot
