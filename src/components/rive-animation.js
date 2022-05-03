import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useRive } from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

const RiveAnimation = ({ className, ariaLabel, riveFile }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const { RiveComponent, rive } = useRive({
    src: riveFile,
    stateMachines: 'Idle',
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
    <RiveComponent role="img" aria-label={ariaLabel} className={className} />
  )
}

RiveAnimation.propTypes = {
  /** CSS class name */
  className: PropTypes.string,
  /** HTML aria-label */
  ariaLabel: PropTypes.string.isRequired,
  /** .riv file */
  riveFile: PropTypes.string.isRequired,
}

export default RiveAnimation
