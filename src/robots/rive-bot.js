import React, { useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

import Bot from './rive-bot.riv'

const RiveBot = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const { RiveComponent, rive } = useRive({
    src: Bot,
    stateMachines: 'State Machine 1',
    autoplay: true,
  })

  const isLimitedInput = useStateMachineInput(
    rive,
    'State Machine 1',
    'isLimited'
  )

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
      aria-label="Rive Bot Animation"
      className="rive-bot"
    />
  )
}

export default RiveBot
