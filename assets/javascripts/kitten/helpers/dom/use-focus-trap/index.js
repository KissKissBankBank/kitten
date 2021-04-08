import { useRef, useEffect } from 'react'

const KEYCODE_TAB = 9

export const useFocusTrap = ({ shouldTrapFocus }) => {
  const elRef = useRef(null)

  function handleFocus(e) {
    const focusableEls = elRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
      ),
      firstFocusableEl = focusableEls[0],
      lastFocusableEl = focusableEls[focusableEls.length - 1]

    const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB

    if (!isTabPressed) {
      return
    }

    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus()
        e.preventDefault()
      }
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus()
        e.preventDefault()
      }
    }
  }

  useEffect(() => {
    if (shouldTrapFocus) {
      elRef.current.addEventListener('keydown', handleFocus)

      return _ => {
        elRef.current.removeEventListener('keydown', handleFocus)
      }
    }
  }, [shouldTrapFocus])

  return elRef
}
