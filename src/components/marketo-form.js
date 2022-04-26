import React from 'react'
import PropTypes from 'prop-types'

import useMarketo from '../hooks/use-marketo'

const MarketoForm = ({ formId }) => {
  const testCallback = () => {
    console.log('testCallback')
  }
  useMarketo({ formId, callback: testCallback })

  return (
    <form
      id={`mktoForm_${formId}`}
      // className="hidden" aria-hidden="true"
    />
  )
}

MarketoForm.propTypes = {
  /** The Marketo Form Id */
  formId: PropTypes.number,
}

export default MarketoForm
