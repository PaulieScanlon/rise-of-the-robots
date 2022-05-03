import { useState, useEffect } from 'react'

const QUERY_STRING = '(prefers-reduced-motion: no-preference)'
const EVENT = 'change'

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)

  useEffect(() => {
    const query = window.matchMedia(QUERY_STRING)

    setPrefersReducedMotion(!window.matchMedia(QUERY_STRING).matches)

    const setState = (event) => {
      setPrefersReducedMotion(!event.matches)
    }

    query.addEventListener(EVENT, setState)
    return () => {
      query.removeEventListener(EVENT, setState)
    }
  }, [])
  return prefersReducedMotion
}

export default usePrefersReducedMotion
