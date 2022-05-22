import React, { useState, useRef, lazy, Suspense } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import ContentfulRichTech from '../components/contentful-rich-text'

import MarketoForm from '../components/marketo-form'
import Loading from '../components/loading'
import usePerfLoading from '../hooks/use-perf-loading'

const FormBot = lazy(() => import('../robots/form-bot'))

const FormSection = () => {
  const perfLoader = usePerfLoading()
  const [email, setEmail] = useState('')
  const [successMsg, setSuccessMsg] = useState()
  const [submittingMsg, setSubmittingMsg] = useState()
  const [errorMsg, setErrorMsg] = useState()
  const emailInput = useRef(null)

  const { contentfulFormSection } = useStaticQuery(graphql`
    {
      contentfulFormSection {
        title
        description {
          raw
        }
        border {
          title
          file {
            details {
              image {
                width
                height
              }
            }
          }
          svg {
            dataURI
          }
        }
      }
    }
  `)

  const { title, description, border } = contentfulFormSection

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
        setSubmittingMsg('Submitting...')
        window.MktoForms2.getForm(process.env.GATSBY_MKTO_FORM_ID)
          .vals({ Email: email })
          .onSuccess(() => {
            setSubmittingMsg(null)
            setSuccessMsg(
              'Success! You have been subscribed to the Gatsby Gazette.'
            )
            setEmail('')
            return false
          })
          .submit()
      }
    }
  }

  return (
    <div className="grid gap-24 lg:gap-0">
      <div className="relative form-image flex items-center justify-center">
        <img
          src={border.svg.dataURI}
          alt={border.title}
          width={border.file.details.image.width}
          height={border.file.details.image.height}
          className="form-border"
        />

        {perfLoader ? (
          <StaticImage
            className="form-image"
            src="../robots/form-bot.png"
            alt="Form Bot Image"
          />
        ) : (
          <Suspense fallback={<Loading />}>
            <FormBot
              hasError={Boolean(errorMsg)}
              isSubmitting={Boolean(submittingMsg)}
              isSuccess={Boolean(successMsg)}
            />
          </Suspense>
        )}
      </div>
      <div className="grid gap-8 row-start-1 lg:row-auto text-center mx-auto max-w-section">
        <div className="grid gap-2">
          <h2 className="text-2xl">{title}</h2>
          <ContentfulRichTech richText={description} />
        </div>
        <div className="grid gap-2 justify-center mx-auto min-h-[90px]">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-y-2 content-start"
          >
            <label
              htmlFor="email"
              className="text-left text-sm text-brand-gray grid-area-1"
            >
              Subscribe to the Gatsby Gazette
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
              className="rounded-none text-brand-background px-2 py-1 grid-area-2 border-2 border-brand-secondary lg:w-[320px]"
            />
            <button
              type="submit"
              className="button button-secondary grid-area-2"
            >
              Subscribe
            </button>
          </form>
          {errorMsg || successMsg || submittingMsg ? (
            <p
              className={`text-sm text-left max-w-[280px] ${
                successMsg || submittingMsg
                  ? 'text-brand-primary'
                  : 'text-brand-error'
              }`}
            >
              {errorMsg || successMsg || submittingMsg}
            </p>
          ) : null}
          <MarketoForm formId={process.env.GATSBY_MKTO_FORM_ID} />
        </div>
      </div>
    </div>
  )
}

export default FormSection
