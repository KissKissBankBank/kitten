import React, { useEffect, createContext, useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactDOM from 'react-dom'

// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import { CloseButton } from '../../action/close-button'
import { Title } from '../../typography/title'
import { Paragraph } from '../../typography/paragraph'
import { Button } from '../../action/button'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { GlobalStyle } from './styles'

const ModalTitle = ({
  children,
  className,
  titlePosition,
  ...props
}) => (
  <Title
    tag="p"
    className={classNames(
      'k-Modal__title',
      className,
      `k-u-align-${titlePosition}`,
    )}
    {...props}
  >
    {children}
  </Title>
)

ModalTitle.propTypes = {
  titlePosition: 'center',
}

ModalTitle.defaultProps = {
  titlePosition : PropTypes.oneOf(['center', 'left']),
}

const ModalParagraph = ({
  children,
  className,
  paragraphPosition,
  ...props
}) => (
  <Paragraph
    modifier="tertiary"
    className={classNames(
      'k-Modal__paragraph',
      className,
      `k-u-align-${paragraphPosition}`,
    )}
    {...props}
  >
    {children}  
  </Paragraph>
)

ModalParagraph.propTypes = {
  paragraphPosition: 'center',
}

ModalParagraph.defaultProps = {
  paragraphPosition : PropTypes.oneOf(['center', 'left']),
}

  // const ModalAction = ({ children, className, ...props }) => (
  //   <Button
  //     size="medium"
  //     className={classNames(
  //       'k-Modal__action',
  //       className,
  //     )}
  //   >
  //     {children}
  //   </Button>
  // )
   
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
  fullSize,
  fullSizeOnMobile,
  fullSizeTitle,
  headerTitle,
  headerActions,
  headerMessage,
  contentCols,
  headerZIndex,
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

  let customStyle = {
    '--Modal-headerZIndex': headerZIndex,
  }

  const ModalPortal = ReactDOM.createPortal(
    <>
      <GlobalStyle zIndex={zIndex} />
      <ReactModal
        closeTimeoutMS={500}
        role="dialog"
        className={{
          base: classNames(
            'k-Modal__content',
            `k-Modal__content--${size}`,
          ),
          afterOpen: 'k-Modal--afterOpen',
          beforeClose: 'k-Modal--beforeClose',
        }}
        overlayClassName={{
          base: classNames(
            'k-Modal__overlay',
            `k-Modal__overlay--${size}`,
            {
              'k-Modal__overlay--fullSize': fullSize,
              'k-Modal__overlay--fullSizeOnMobile': fullSizeOnMobile,
            },
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
        style={{ content: customStyle }}
        {...modalProps}
      >
        <>
          {hasCloseButton && (
            <div className="k-Modal__closeButton">
              <CloseButton
                style={{ position: 'fixed' }}
                className="k-u-hidden@s-up k-u-margin-none"
                modifier="hydrogen"
                onClick={close}
                size="micro"
                closeButtonLabel={closeButtonLabel}
              />
              <CloseButton
                style={{ position: 'fixed' }}
                className="k-u-hidden@xs-down k-u-margin-none"
                modifier="hydrogen"
                onClick={close}
                closeButtonLabel={closeButtonLabel}
              />
            </div>
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

Modal.PropTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullSize: PropTypes.bool,
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
}

Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  size: 'medium',
  fullSize: false,
  isOpen: false,
  zIndex: 110,
}

Modal.Title = ModalTitle
Modal.Paragraph = ModalParagraph
