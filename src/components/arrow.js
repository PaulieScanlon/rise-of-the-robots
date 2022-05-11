import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23.99 23.88"
    width="10px"
    height="10px"
    className={className}
  >
    <path
      fill="currentColor"
      d="M18.99 1.86v13.59L3.54 0 0 3.54l15.35 15.34H1.96v5h22.03V1.86h-5z"
    />
  </svg>
)

Arrow.propTypes = {
  /** CSS class */
  className: PropTypes.string,
}

export default Arrow
