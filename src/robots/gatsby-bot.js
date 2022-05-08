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

  const isHoveredInput = useStateMachineInput(rive, STATE_MACHINE, 'isHovered')
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
        if (rive && isHoveredInput) {
          if (entry.isIntersecting) {
            // console.log('visible')
            isHoveredInput.value = true
          } else {
            // console.log('!visible')
            isHoveredInput.value = false
          }
        }
      },
      {
        rootMargin: '0px',
        threshold: 0,
      }
    )
    if (ref && ref.current) {
      observer.observe(ref.current)
    }
  }, [rive, isHoveredInput])

  return (
    <div ref={ref}>
      <RiveComponent
        role="img"
        aria-label="Gatsby Bot Animation"
        className="gatsby-bot"
      />
    </div>
  )
}

export default GatsbyBot
