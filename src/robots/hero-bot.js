import React, { useEffect } from 'react'
import { useRive } from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

import Bot from './hero-bot.riv'

const HeroBot = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const { RiveComponent, rive } = useRive({
    src: Bot,
    stateMachines: 'Idle',
    autoplay: true,
  })

  useEffect(() => {
    if (rive) {
      if (prefersReducedMotion) {
        rive.pause()
      } else {
        rive.play()
      }
    }
  }, [rive, prefersReducedMotion])

  return (
    <RiveComponent
      role="img"
      aria-label="Hero Bot Animation"
      className="hero-bot"
    />
  )
}

export default HeroBot
