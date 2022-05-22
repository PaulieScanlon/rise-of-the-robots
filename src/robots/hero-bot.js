import React, { useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

import Bot from './hero-bot.riv'

const STATE_MACHINE = 'State Machine 1'

const HeroBot = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const { RiveComponent, rive } = useRive({
    src: Bot,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  })

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

  return (
    <RiveComponent
      role="img"
      aria-label="Hero Bot Animation"
      width={400}
      height={400}
    />
  )
}

export default HeroBot
