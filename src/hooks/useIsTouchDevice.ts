import { useEffect, useState } from 'react'

export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const hasTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    setIsTouch(hasTouch)
  }, [])

  return isTouch
}
