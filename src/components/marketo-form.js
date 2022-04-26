import React from 'react'
import PropTypes from 'prop-types'

import useMarketo from '../hooks/use-marketo'

const MarketoForm = ({ formId }) => {
  const baseUrl = `https://${process.env.GATSBY_MKTO_LP_DOMAIN}`
  const munchkinId = process.env.GATSBY_MKTO_MUNCHKIN_ID

  const testCallback = () => {
    console.log('testCallback')
  }
  useMarketo({
    baseUrl: baseUrl,
    munchkinId: munchkinId,
    formId: formId,
    callback: testCallback,
  })

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
