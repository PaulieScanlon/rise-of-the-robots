import { useState, useEffect } from 'react'

const useMousePosition = (canvas) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setPosition = (event) => {
      setMousePosition({ x: event.offsetX, y: event.offsetY })
    }
    if (canvas) {
      canvas.addEventListener('mousemove', setPosition)
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousemove', setPosition)
      }
    }
  }, [canvas])

  return mousePosition
}

export default useMousePosition
