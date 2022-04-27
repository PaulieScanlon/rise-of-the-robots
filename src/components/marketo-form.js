import React from 'react'
import PropTypes from 'prop-types'

import useMarketo from '../hooks/use-marketo'

const MarketoForm = ({ formId }) => {
  useMarketo({ formId, callback: () => {} })

  return (
    <form id={`mktoForm_${formId}`} className="hidden" aria-hidden="true" />
  )
}

MarketoForm.propTypes = {
  /** The Marketo Form Id */
  formId: PropTypes.string,
}

export default MarketoForm
