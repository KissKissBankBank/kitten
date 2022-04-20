import React, { useEffect, createContext, useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactDOM from 'react-dom'

// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import { CloseButton } from '../../action/close-button'
import { Title } from '../../typography/title'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { GlobalStyle } from './styles'
import { Button } from '../../action/button'

const ModalTitle = ({
  className,
  align,
  ...props
}) => (
  <Title
    tag="p"
    noMargin
    className={classNames(
      'k-Modal__title',
      className,
      `k-u-align-${align}`,
    )}
    {...props}
  />
)

ModalTitle.propTypes = {
  align: PropTypes.oneOf(['center', 'left']),
}

ModalTitle.defaultProps = {
  align: 'center',
}

const ModalContent = ({
  className,
  align,
  ...props
}) => (
  <div
    className={classNames(
      'k-Modal__content',
      className,
      `k-u-align-${align}`,
    )}
    {...props}
  />
)

ModalContent.propTypes = {
  align: PropTypes.oneOf(['center', 'left']),
}

ModalContent.defaultProps = {
  align: 'center',
}

const ModalForm = ({ className, twoColumns, ...props }) => (
  <div 
    className={classNames(
      'k-Modal__form',
      className,
      {
        'k-Modal__form--twoColumns': twoColumns,
      },  
    )}
      {...props}
  />
)

const ModalAction = ({ className, ...props }) => (
  <div
    className={classNames(
      'k-Modal__action',
      className,
    )}
    {...props}
  />
)


const ModalCloseActionButton = ({ onClick, ...props }) => {
  const [, dispatch] = useContext(ModalContext)
  return (
    <Button
      {...props}
      onClick={e => {
        onClick(e)
        dispatch(updateState(false))
      }}
    />
  )
}

ModalCloseActionButton.propTypes = {
  onClick: PropTypes.func,
}

ModalCloseActionButton.defaultProps = {
  onClick: () => null,
}
  
const initialState = {
  show: false,
}
  
const ModalContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, ...action }
  }
}

export const updateState = show => ({
  type: 'update',
  show,
})

const ModalProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ModalContext.Provider>
  )
}

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
  type,
  ...others
}) => {

  const [{ show }, dispatch] = useContext(ModalContext)
  const close = () => {
    dispatch(updateState(false))
    if (onClose) {
      onClose()
    }
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
      <GlobalStyle zIndex={zIndex} />
      <ReactModal
        closeTimeoutMS={500}
        role="dialog"
        type={type}
        className={{
          base: classNames(
            'k-Modal__wrapper',
            `k-Modal__wrapper--${size}`,
          ),
          afterOpen: 'k-Modal--afterOpen',
          beforeClose: 'k-Modal--beforeClose',
        }}
        overlayClassName={{
          base: classNames(
            'k-Modal__overlay',
          ),
          afterOpen: 'k-Modal__overlay--afterOpen',
          beforeClose: 'k-Modal__overlay--beforeClose',
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
        bodyOpenClassName="k-Modal__body--open"
        {...modalProps}
      >
        <>
          {hasCloseButton && (
            <CloseButton
              className="k-Modal__closeButton"
              size="micro"
              modifier="hydrogen"
              closeButtonLabel={closeButtonLabel}
              onClick={close}
            />
          )}
          <div className="k-Modal__main">
            {children({
              open: () => dispatch(updateState(true)),
              close: () => dispatch(updateState(false)),
            })}
          </div>
        </>
      </ReactModal>
    </>,
    document.body,
  )
  return (
    <div className={classNames('k-Modal', className)} {...others}>
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
    </div>
  )
}

export const Modal = props => {
  if (!domElementHelper.canUseDom()) return null
  return (
    <ModalProvider>
      <InnerModal {...props} />
    </ModalProvider>
  )
}

Modal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  hasCloseButton: PropTypes.bool,
  type: PropTypes.oneOf(['modal', 'dialog']),
}

Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  size: 'medium',
  isOpen: false,
  zIndex: 110,
  hasCloseButton: true,
  type: 'modal',
}

Modal.Title = ModalTitle
Modal.Content = ModalContent
Modal.Form = ModalForm
Modal.Action = ModalAction
Modal.CloseButton = ModalCloseActionButton
