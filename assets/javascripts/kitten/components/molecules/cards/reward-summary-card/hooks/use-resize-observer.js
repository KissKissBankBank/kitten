import { useRef, useCallback, useEffect, useState } from 'react'
import { domElementHelper } from '../../../../../helpers/dom/element-helper'

// https://gist.github.com/DominicTobias/c8579667e8a8bd7817c1b4d5b274eb4c
export const useResizeObserver = () => {
  if (!domElementHelper.canUseDom() && !'ResizeObserver' in window) {
    return {}
  }

  const [size, setSize] = useState('large')
  const resizeObserver = useRef(null)

  const onResize = useCallback(entries => {
    const { width } = entries[0].contentRect

    if (width >= 870) {
      setSize('large')
    } else if (width < 870 && width >= 760) {
      setSize('medium')
    } else if (width < 760 && width >= 700) {
      setSize('tablet')
    } else if (width < 700 && width >= 600) {
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
    [onResize],
  )

  useEffect(
    () => () => {
      resizeObserver.current.disconnect()
    },
    [],
  )

  return { ref, size }
}
