import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MarketoForm from './marketo-form'
import ContentfulRichTech from './contentful-rich-text'

const FormSection = () => {
  const [email, setEmail] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const emailInput = useRef(null)

  const { contentfulFormSection } = useStaticQuery(graphql`
    {
      contentfulFormSection {
        title
        description {
          raw
        }
      }
    }
  `)

  const { title, description } = contentfulFormSection

  useEffect(() => {
    validateEmail()
  }, [email])

  const validateEmail = () => {
    const isValid = emailInput.current.checkValidity()
    if (email && !isValid) {
      setErrorMsg('Please provide a valid email address.')
      setSuccessMsg(null)
    } else {
      setErrorMsg(null)
    }
    return isValid
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (validateEmail()) {
      if (typeof window !== 'undefined') {
        window.MktoForms2.getForm(process.env.GATSBY_MKTO_FORM_ID)
          .vals({ Email: email })
          .onSuccess(() => {
            setSuccessMsg(
              'Success! You have been subscribed to the Gatsby newsletter.'
            )
            setEmail('')
            return false
          })
          .submit()
      }
    }
  }

  return (
    <div className="grid gap-24 lg:justify-items-center self-center">
      <div className="grid gap-2 text-center mx-auto max-w-section">
        <h2 className="text-2xl">{title}</h2>
        <ContentfulRichTech richText={description} />
      </div>
      <div className="mx-auto min-h-[90px]">
        <form onSubmit={handleSubmit} noValidate className="grid">
          <label
            htmlFor="email"
            className="text-sm text-brand-gray grid-area-1"
          >
            Subscribe to the Gatsby newsletter
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
            className="text-brand-background px-2 py-1 grid-area-2 border-2 border-brand-secondary"
          />
          <button type="submit" className="button button-secondary grid-area-2">
            Subscribe
          </button>
        </form>
        {errorMsg || successMsg ? (
          <p className="text-sm">{errorMsg || successMsg}</p>
        ) : null}
        <MarketoForm formId={process.env.GATSBY_MKTO_FORM_ID} />
      </div>
    </div>
  )
}

export default FormSection
