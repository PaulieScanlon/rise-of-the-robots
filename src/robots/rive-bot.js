import React, { useState, useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'
import useMousePosition from '../hooks/use-mouse-position'

import Bot from './rive-bot.riv'

const STATE_MACHINE = 'State Machine 1'

const RiveBot = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const mousePosition = useMousePosition()

  const [maxWidth, setMaxWidth] = useState()
  const [maxHeight, setMaxHeight] = useState()

  const { RiveComponent, rive } = useRive({
    src: Bot,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  })

  const isLimitedInput = useStateMachineInput(rive, STATE_MACHINE, 'isLimited')
  const xAxisInput = useStateMachineInput(rive, STATE_MACHINE, 'xAxis', 0)
  const yAxisInput = useStateMachineInput(rive, STATE_MACHINE, 'yAxis', 0)
  const isHoverInput = useStateMachineInput(rive, STATE_MACHINE, 'isHover')

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      const bodyRect = body.getBoundingClientRect()
      setMaxWidth(bodyRect.right)
      setMaxHeight(bodyRect.bottom)
    }
  }, [])

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
    if (rive && maxWidth && maxHeight && xAxisInput && yAxisInput) {
      let x = (mousePosition.x / maxWidth) * 100
      let y = 100 - (mousePosition.y / maxHeight) * 100

      if (!prefersReducedMotion) {
        xAxisInput.value = x
        yAxisInput.value = y
      }
    }
  }, [
    rive,
    prefersReducedMotion,
    mousePosition,
    maxWidth,
    maxHeight,
    xAxisInput,
    yAxisInput,
  ])

  const handleMouseOver = () => {
    if (rive && isHoverInput) {
      if (prefersReducedMotion) {
      } else {
        isHoverInput.value = true
      }
    }
  }

  const handleMouseLeave = () => {
    if (rive && isHoverInput) {
      if (prefersReducedMotion) {
      } else {
        isHoverInput.value = false
      }
    }
  }

  return (
    <RiveComponent
      role="img"
      aria-label="Rive Bot Animation"
      className="rive-bot"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default RiveBot
