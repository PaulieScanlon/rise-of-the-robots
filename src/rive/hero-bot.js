import React from 'react'
import PropTypes from 'prop-types'

import { useRive } from 'rive-react'

import animation from './hero-bot.riv'

const HeroBot = ({ className }) => {
  const { RiveComponent } = useRive({
    src: animation,
  })

  return (
    <RiveComponent
      className={className}
      role="img"
      aria-label="ROTR Hero Bot"
    />
  )
}

HeroBot.propTypes = {
  /** CSS class names */
  className: PropTypes.string,
}

export default HeroBot
