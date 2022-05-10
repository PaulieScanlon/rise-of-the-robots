import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from '@rive-app/react-canvas'
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion'

import Bot from './form-bot.riv'

const STATE_MACHINE = 'State Machine 1'

const FormBot = ({ hasError, isSubmitting, isSuccess }) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const { RiveComponent, rive } = useRive({
    src: Bot,
    stateMachines: STATE_MACHINE,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopCenter,
    }),
    autoplay: true,
  })

  const isLimitedInput = useStateMachineInput(rive, STATE_MACHINE, 'isLimited')
  const statesInput = useStateMachineInput(rive, STATE_MACHINE, 'States')

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
    if (rive && statesInput) {
      if (hasError) {
        // console.log('statesInputOne.value = 3')
        statesInput.value = 3
      } else if (isSubmitting) {
        statesInput.value = 1
        // console.log('statesInputThree.value = 1')
      } else if (isSuccess) {
        statesInput.value = 2
        // console.log(' statesInputTwo.value = 2')
      } else {
        statesInput.value = 0
        // console.log('statesInputZero.value = 0')
      }
    }
  }, [rive, statesInput, hasError, isSubmitting, isSuccess])

  return (
    <div className="form-bot-container">
      <RiveComponent
        role="img"
        aria-label="Form Bot Animation"
        width={992}
        height={331}
      />
    </div>
  )
}

FormBot.defaultProps = {
  hasError: false,
  isSubmitting: false,
  isSuccess: false,
}

FormBot.propTypes = {
  /** When form has Error */
  hasError: PropTypes.bool,
  /** When form is submitting */
  isSubmitting: PropTypes.bool,
  /** When form has sent */
  isSuccess: PropTypes.bool,
}

export default FormBot
