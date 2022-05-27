import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import Loading from '../components/loading'

const FormBot = lazy(() => import('../robots/form-bot'))

const FormBotLazy = ({ hasError, isSubmitting, isSuccess }) => {
  return (
    <Suspense fallback={<Loading />}>
      <FormBot
        hasError={hasError}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
      />
    </Suspense>
  )
}

FormBotLazy.defaultProps = {
  hasError: false,
  isSubmitting: false,
  isSuccess: false,
}

FormBotLazy.propTypes = {
  /** When form has Error */
  hasError: PropTypes.bool,
  /** When form is submitting */
  isSubmitting: PropTypes.bool,
  /** When form has sent */
  isSuccess: PropTypes.bool,
}

export default FormBotLazy
