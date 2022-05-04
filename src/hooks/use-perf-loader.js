import { useState, useEffect } from 'react'

const usePerfLoader = () => {
  const [isPerf, setIsPerf] = useState(true)

  useEffect(() => {
    if (
      navigator?.connection?.saveData ||
      !matchMedia('(min-width: 768px)').matches
    ) {
      setIsPerf(true)
    } else {
      setIsPerf(false)
    }
  }, [])

  return isPerf
}

export default usePerfLoader
