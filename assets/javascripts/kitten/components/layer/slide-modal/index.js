import React, { useEffect, createContext, useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import { CloseButton } from '../../action/close-button'
import { Title } from '../../typography/title'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { GlobalStyle } from './styles'

const ModalTitle = ({ className, ...props }) => (
  <Title
    tag="p"
    noMargin
    className={classNames('k-SlideModal__title', className)}
    {...props}
  />
)

const ModalContent = ({ className, align, gradientScroll, ...props }) => (
  <div
    className={classNames('k-SlideModal__content', className, {
      'k-SlideModal__content--gradientScroll': gradientScroll,
    })}
    {...props}
  />
)

ModalContent.propTypes = {
  gradientScroll: PropTypes.bool,
}

ModalContent.defaultProps = {
  gradientScroll: true,
}

const ModalActions = ({ className, ...props }) => (
  <div className={classNames('k-SlideModal__actions', className)} {...props} />
)

const initialState = { show: false }

const SlideModalContext = createContext(initialState)

const reducer = (state, action) => {
  if (action.type === 'update') return { ...state, ...action }
}

export const updateState = show => ({
  type: 'update',
  show,
})

const InnerModal = ({
  trigger,
  children,
  label,
  labelledby,
  describedby,
  className,
  closeButtonLabel,
  onClose,
  modalProps,
  hasCloseButton,
  maxWidth,
  size,
  isOpen,
  zIndex,
  as: ModalElement,
  ...others
}) => {
  const [{ show }, dispatch] = useContext(SlideModalContext)

  const close = () => {
    dispatch(updateState(false))
    onClose()
  }

  useEffect(() => {
    if (!trigger) {
      dispatch(updateState(true))
    }
  }, [])

  useEffect(() => {
    dispatch(updateState(isOpen))
  }, [isOpen])

  const ModalPortal = ReactDOM.createPortal(
    <>
      <GlobalStyle />
      <ReactModal
        closeTimeoutMS={500}
        role="dialog"
        className={{
          base: classNames(
            'k-SlideModal__wrapper',
            `k-SlideModal__wrapper--${size}`,
          ),
          afterOpen: 'k-SlideModal__wrapper--afterOpen',
          beforeClose: 'k-SlideModal__wrapper--beforeClose',
        }}
        overlayClassName={{
          base: classNames('k-SlideModal__overlay'),
          afterOpen: 'k-SlideModal__overlay--afterOpen',
          beforeClose: 'k-SlideModal__overlay--beforeClose',
        }}
        isOpen={show}
        onAfterOpen={({ overlayEl }) => {
          overlayEl.scrollTop = 0
        }}
        aria={{
          labelledby,
          describedby,
        }}
        ariaHideApp={false}
        onRequestClose={close}
        contentLabel={label}
        bodyOpenClassName="k-SlideModal__body--open"
        {...modalProps}
        style={{
          overlay: {
            ...modalProps?.style?.overlay,
            '--modal-zIndex': zIndex,
          },
          content: {
            ...modalProps?.style?.content,
          },
        }}
      >
        <>
          {hasCloseButton && (
            <CloseButton
              className="k-SlideModal__closeButton"
              size="small"
              modifier="hydrogen"
              closeButtonLabel={closeButtonLabel}
              onClick={close}
            />
          )}
          <div className="k-SlideModal__main">
            {typeof children === 'function'
              ? children({
                  open: () => dispatch(updateState(true)),
                  close: () => dispatch(updateState(false)),
                })
              : children}
          </div>
        </>
      </ReactModal>
    </>,
    document.body,
  )

  return (
    <ModalElement className={classNames('k-SlideModal', className)} {...others}>
      {trigger &&
        React.cloneElement(trigger, {
          onClick: clickEvent => {
            dispatch(updateState(true))
            if (
              'onClick' in trigger.props &&
              typeof trigger.props.onClick === 'function'
            ) {
              trigger.props.onClick(clickEvent)
            }
          },
        })}
      {ModalPortal}
    </ModalElement>
  )
}

export const SlideModal = props => {
  if (!domElementHelper.canUseDom()) return null

  return (
    <SlideModalContext.Provider value={useReducer(reducer, initialState)}>
      <InnerModal {...props} />
    </SlideModalContext.Provider>
  )
}

SlideModal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  hasCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
  as: PropTypes.string,
}

SlideModal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  size: 'medium',
  isOpen: false,
  zIndex: 110,
  hasCloseButton: true,
  onClose: () => {},
  as: 'div',
}

SlideModal.Title = ModalTitle
SlideModal.Content = ModalContent
SlideModal.Actions = ModalActions
