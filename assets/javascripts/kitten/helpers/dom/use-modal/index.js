import { useState, useEffect } from 'react'
import { useFocusTrap } from '../../dom/use-focus-trap'
import { usePrevious } from '../../utils/use-previous-hook'

export const useModal = ({ id, modalCloseText, modalOpenText }) => {
  const [show, setShow] = useState(false)
  const modalRef = useFocusTrap({ shouldTrapFocus: show })
  const previousShowValue = usePrevious(show)

  const keyDownHandler = event => {
    if (event.key === 'Escape') {
      setShow(false)
    }
  }

  useEffect(() => {
    if (show || previousShowValue) {
      document.getElementById(`${id}__button`).focus()
    }

    // Prevent scrolling when Modal is open
    // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
    if (show) {
      document.addEventListener('keydown', keyDownHandler)

      document.body.style.top = `-${window.scrollY}px`
      document.body.style.position = 'fixed'
    } else {
      document.removeEventListener('keydown', keyDownHandler)

      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [show])

  return {
    show: show,
    buttonProps: {
      id: `${id}__button`,
      'aria-label': show ? modalCloseText : modalOpenText,
      'aria-controls': `${id}__modal`,
      'aria-expanded': show ? 'true' : null,
      onClick: () => setShow(!show),
    },
    modalProps: {
      id: `${id}__modal`,
      hidden: show ? null : 'hidden',
    },
    wrapperProps: {
      ref: modalRef,
    },
    closeAction: () => setShow(false),
    openAction: () => setShow(true),
  }
}
