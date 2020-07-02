import React, { useEffect, createContext, useReducer, useContext } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactModal from 'react-modal'
import { CloseButton } from '../../../components/buttons/close-button'
import { Button } from '../../../components/buttons/button/button'
import { Paragraph } from '../../../components/typography/paragraph'
import styled, { createGlobalStyle, css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { Title } from '../../typography/title'
import COLORS from '../../../constants/colors-config'
import {
  CONTAINER_PADDING,
  GUTTER,
  CONTAINER_MAX_WIDTH,
} from '../../../constants/grid-config'
import { domElementHelper } from '../../../helpers/dom/element-helper'

const paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER
const oneGridCol = `calc((100vw - ${pxToRem(
  paddingPlusGutters,
)}) / 12 + ${pxToRem(GUTTER)})`

const StyledParagraph = styled(Paragraph)`
  font-size: ${pxToRem(12)};
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${pxToRem(14)};
  }
`

const GlobalStyle = createGlobalStyle`

  body.k-ModalNext__body--open {
    overflow: hidden;
  }
  
  .k-ModalNext__content {
    position: relative;
    background-color: ${COLORS.background1};
    box-sizing: border-box;
    outline: none;
    transform: scale(0.94);
    margin-right: ${pxToRem(20)};
    margin-left: ${pxToRem(20)};
    padding: ${pxToRem(50)} ${pxToRem(30)};
    width: calc(100vw ${pxToRem(20)});
  
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin: auto;
      padding: ${pxToRem(80)} ${oneGridCol};
      width: calc((100vw - ${pxToRem(paddingPlusGutters)}) + (${pxToRem(
  GUTTER,
)} * 11))
    }
  
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding: ${pxToRem(80)} ${oneGridCol};
      ${props => css`
        width: calc(
          ((100vw - ${pxToRem(paddingPlusGutters)}) / 12 + ${pxToRem(GUTTER)}) *
            ${props.cols} - ${pxToRem(GUTTER)}
        );
      `}
    }
    
    @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    ${props => css`
      width: ${pxToRem(
        ((CONTAINER_MAX_WIDTH - paddingPlusGutters) / 12 + GUTTER) *
          props.cols -
          GUTTER,
      )};
    `}
    }
  }

  .k-ModalNext__close {
    position: absolute;
    top: 0;
    right: ${pxToRem(40)};
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      right: ${pxToRem(50)};
  }

    button {
      margin: 0;
    }
  }
  
  .k-ModalNext__overlay {
    position: fixed;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: rgba(34, 34, 34, .8);    
    &::before ,
    &::after {
      content:'';
      flex:1;
      min-height: ${pxToRem(50)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        min-height: ${pxToRem(100)};
      }
    }
    ${props =>
      css`
        z-index: ${props.zIndex};
      `}
  }
  
  .k-ModalNext__overlay--afterOpen {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .k-ModalNext--afterOpen {
    transition: opacity .3s ease, transform .3s ease;
    transform: scale(1);
    opacity: 1;
  }

  .k-ModalNext__overlay--beforeClose {
    opacity: 0;
  }
  .k-ModalNext--beforeClose {
    transition: opacity .3s ease, transform .5s ease;
    transform: scale(1.06);
    opacity: 0;
  }
`

const ModalTitle = ({ children }) => (
  <Title
    modifier="quaternary"
    margin={false}
    tag="p"
    className="k-u-margin-bottom-singleHalf--important k-u-align-center"
  >
    {children}
  </Title>
)

const ModalParagraph = ({ children, withoutMargin, className, align }) => (
  <StyledParagraph
    modifier="quaternary"
    style={{ textAlign: align }}
    margin={false}
    tag="p"
    className={classNames('k-Modal__paragraph', className, {
      'k-u-margin-bottom-triple': !withoutMargin,
      'k-u-margin-bottom-quadruple@s-up': !withoutMargin,
    })}
  >
    {children}
  </StyledParagraph>
)

ModalParagraph.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
}

ModalParagraph.defaultProps = {
  align: 'center',
}

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    flex-direction: row;
  }
`

const ModalButton = styled(props => <Button big fluid {...props} />)`
  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    :not(:last-child) {
      margin-bottom: ${pxToRem(20)};
    }
  }
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    :not(:first-child) {
      margin-left: ${pxToRem(GUTTER)};
    }
  }
`

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

const CloseActionButton = ({ onClick, ...props }) => {
  const [, dispatch] = useContext(ModalContext)
  return (
    <ModalButton
      {...props}
      onClick={e => {
        onClick(e)
        dispatch(updateState(false))
      }}
    />
  )
}

CloseActionButton.propTypes = {
  onClick: PropTypes.func,
}

CloseActionButton.defaultProps = {
  onClick: () => null,
}

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
  big,
  huge,
  isOpen,
  zIndex,
  ...others
}) => {
  const [{ show }, dispatch] = useContext(ModalContext)
  const colsOnDesktop = huge ? 10 : big ? 8 : 6
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
      <GlobalStyle cols={colsOnDesktop} zIndex={zIndex} />
      <ReactModal
        closeTimeoutMS={500}
        role="dialog"
        className={{
          base: 'k-ModalNext__content',
          afterOpen: 'k-ModalNext--afterOpen',
          beforeClose: 'k-ModalNext--beforeClose',
        }}
        overlayClassName={{
          base: 'k-ModalNext__overlay',
          afterOpen: 'k-ModalNext__overlay--afterOpen',
          beforeClose: 'k-ModalNext__overlay--beforeClose',
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
        bodyOpenClassName="k-ModalNext__body--open"
        {...modalProps}
      >
        <>
          {children({
            open: () => dispatch(updateState(true)),
            close: () => dispatch(updateState(false)),
          })}
          {hasCloseButton && (
            <div className="k-ModalNext__close">
              <CloseButton
                style={{ position: 'fixed' }}
                className="k-u-hidden@s-up"
                modifier="beryllium"
                onClick={close}
                size="tiny"
                closeButtonLabel={closeButtonLabel}
              />
              <CloseButton
                style={{ position: 'fixed' }}
                className="k-u-hidden@xs-down"
                modifier="beryllium"
                onClick={close}
                closeButtonLabel={closeButtonLabel}
              />
            </div>
          )}
        </>
      </ReactModal>
    </>,
    document.body,
  )
  return (
    <div className={classNames('k-ModalNext', className)} {...others}>
      {trigger && (
        <span onClick={() => dispatch(updateState(true))}>{trigger}</span>
      )}
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
  modalProps: PropTypes.object,
  hasCloseButton: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool,
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
}

Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  modalProps: {},
  hasCloseButton: true,
  big: false,
  huge: false,
  isOpen: false,
  zIndex: 110,
}

Modal.Title = ModalTitle
Modal.Paragraph = ModalParagraph
Modal.Actions = Actions
Modal.Button = ModalButton
Modal.CloseButton = CloseActionButton
