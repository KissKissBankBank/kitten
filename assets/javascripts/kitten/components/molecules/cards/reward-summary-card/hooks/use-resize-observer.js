import { useRef, useCallback, useEffect, useState } from 'react'
import debounce from 'lodash/fp/debounce'

// https://gist.github.com/DominicTobias/c8579667e8a8bd7817c1b4d5b274eb4c
export const useResizeObserver = () => {
  if (!"ResizeObserver" in window) {
    return { }
  }

  const [size, setSize] = useState('large')
  const resizeObserver = useRef(null)

  const onResize = useCallback(entries => {
    const { width } = entries[0].contentRect

    if (width >= 870) {
      setSize('large')
    } else if (width < 870 && width >= 720) {
      setSize('medium')
    } else if (width < 720 && width >= 600) {
      setSize('small')
    } else if (width < 600) {
      setSize('mobile')
    }
  }, [])

  const ref = useCallback(
    node => {
      if (node !== null) {
        if (resizeObserver.current) {
          resizeObserver.current.disconnect()
        }
        resizeObserver.current = new ResizeObserver(onResize)
        resizeObserver.current.observe(node)
      }
    },
    [onResize]
  )

  useEffect(() => () => {
    resizeObserver.current.disconnect()
  }, [])

  return { ref, size }
}
