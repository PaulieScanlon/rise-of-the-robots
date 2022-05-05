import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setPosition = (event) =>
      setMousePosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', setPosition)

    return () => {
      window.removeEventListener('mousemove', setPosition)
    }
  }, [])

  return mousePosition
}

export default useMousePosition
