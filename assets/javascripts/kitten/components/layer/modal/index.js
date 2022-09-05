import React, {
  useEffect,
  createContext,
  useReducer,
  useContext,
  Fragment,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import { CloseButton } from '../../action/close-button'
import { Title } from '../../typography/title'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { GlobalStyle } from './styles'
import { Button } from '../../action/button'

const ModalHeader = ({ className, ...props }) => (
  <div className={classNames('k-Modal__header', className)} {...props} />
)

const ModalHeaderLeft = ({ className, ...props }) => (
  <div className={classNames('k-Modal__header_left', className)} {...props} />
)

const ModalHeaderRight = ({ className, ...props }) => (
  <div className={classNames('k-Modal__header_right', className)} {...props} />
)

const ModalTitle = ({ className, align, ...props }) => (
  <Title
    tag="p"
    noMargin
    className={classNames('k-Modal__title', className, `k-u-align-${align}`)}
    {...props}
  />
)

ModalTitle.propTypes = {
  align: PropTypes.oneOf(['center', 'left']),
}

ModalTitle.defaultProps = {
  align: 'center',
}

const ModalContent = ({ className, align, noMargin, ...props }) => (
  <div
    className={classNames('k-Modal__content', className, `k-u-align-${align}`, {
      'k-Modal__content--noMargin': noMargin,
    })}
    {...props}
  />
)

ModalContent.propTypes = {
  align: PropTypes.oneOf(['center', 'left']),
  noMargin: PropTypes.bool,
}

ModalContent.defaultProps = {
  align: 'center',
  noMargin: false,
}

const ModalForm = ({ className, twoColumns, ...props }) => (
  <div
    className={classNames('k-Modal__form', className, {
      'k-Modal__form--twoColumns': twoColumns,
    })}
    {...props}
  />
)

const ModalActions = ({ className, ...props }) => (
  <div className={classNames('k-Modal__actions', className)} {...props} />
)

const ModalCloseActionButton = ({ onClick, ...props }) => {
  const [, dispatch] = useContext(ModalContext)
  console.warn('Please use a normal `Button` instead.')

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
  as: ModalElement,
  ...others
}) => {
  const [{ show }, dispatch] = useContext(ModalContext)

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
          base: classNames('k-Modal__wrapper', `k-Modal__wrapper--${size}`),
          afterOpen: 'k-Modal--afterOpen',
          beforeClose: 'k-Modal--beforeClose',
        }}
        overlayClassName={{
          base: classNames('k-Modal__overlay'),
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
              className="k-Modal__closeButton"
              size="micro"
              modifier="hydrogen"
              closeButtonLabel={closeButtonLabel}
              onClick={close}
            />
          )}
          <div className="k-Modal__main">
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

  const modalElementProps =
    ModalElement === Fragment
      ? { children, key: others.key }
      : {
          children,
          ...others,
          className: classNames('k-Modal', className),
        }

  return (
    <ModalElement {...modalElementProps}>
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
  onClose: PropTypes.func,
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([Fragment])]),
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
  onClose: () => {},
  as: 'div',
}

Modal.Header = ModalHeader
Modal.HeaderLeft = ModalHeaderLeft
Modal.HeaderRight = ModalHeaderRight
Modal.Title = ModalTitle
Modal.Content = ModalContent
Modal.Form = ModalForm
Modal.Actions = ModalActions
Modal.CloseButton = ModalCloseActionButton
