import React, { Fragment, Suspense, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const RiveLazy = ({ animation, fallback }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Fragment>
      {!isMounted ||
      navigator?.connection?.saveData ||
      !matchMedia('(min-width: 768px)').matches ? (
        <Fragment>{fallback}</Fragment>
      ) : (
        <Suspense fallback={fallback}>{animation}</Suspense>
      )}
    </Fragment>
  )
}

RiveLazy.propTypes = {
  /** RiveAnimation fallback */
  animation: PropTypes.element.isRequired,
  /** StaticImage fallback */
  fallback: PropTypes.element.isRequired,
}

export default RiveLazy
