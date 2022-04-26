import React, { useState, useEffect, useRef } from 'react'
import MarketoForm from './marketo-form'

const FormSection = () => {
  const [email, setEmail] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const emailInput = useRef(null)

  // Aron to confirm // Possibly add this to Contentful
  const formId = 1139

  //   useEffect(() => {
  //     validateEmail()
  //   }, [email])

  //   const validateEmail = () => {
  //     const isValid = emailInput.current.checkValidity()
  //     if (email && !isValid) {
  //       setErrorMsg('Please provide a valid email address.')
  //       setSuccessMsg(null)
  //     } else {
  //       setErrorMsg(null)
  //     }
  //     return isValid
  //   }

  //   const handleSubmit = async (evt) => {
  //     console.log('handleSubmit')
  //     evt.preventDefault()
  //     if (validateEmail()) {
  //     if (typeof window !== 'undefined') {
  //       window.MktoForms2.getForm(formId)
  //         .vals({ Email: email })
  //         .onSuccess(() => {
  //           console.log('onSuccess')
  //           setSuccessMsg(
  //             'Success! You have been subscribed to the Gatsby newsletter.'
  //           )
  //           setEmail('')
  //           return false
  //         })
  //         .submit()
  //     }
  //     }
  //   }

  return (
    <div>
      {/* <form onSubmit={handleSubmit} noValidate className="grid">
        <label htmlFor="email" className="grid-area-1">
          Subscribe to our newsletter
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.xyz"
          value={email}
          ref={emailInput}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className="text-brand-background grid-area-2"
        />
        <button type="submit" className="button button-secondary grid-area-2">
          Subscribe
        </button>
      </form>
      {errorMsg || successMsg ? <p>{errorMsg || successMsg}</p> : null} */}
      <MarketoForm formId={formId} />
    </div>
  )
}

export default FormSection
