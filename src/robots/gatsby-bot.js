import React, { useRef, useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

import Bot from './gatsby-bot.riv'

const STATE_MACHINE = 'State Machine 1'

const GatsbyBot = () => {
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
            // console.log('isVisible')
            isVisible.value = true
          } else {
            isVisible.value = false
            // console.log('!isVisible')
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
    <div ref={ref} className="gatsby-bot">
      <RiveComponent
        role="img"
        aria-label="Gatsby Bot Animation"
        className="gatsby-bot"
      />
    </div>
  )
}

export default GatsbyBot
