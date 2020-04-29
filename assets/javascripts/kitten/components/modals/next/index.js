import React, { useState, useEffect } from 'react'
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
  body.k-Modal__body--open {
    overflow: hidden;
  }
  
  .k-Modal-content {
    position: relative;
    background-color: ${COLORS.background1};
    box-sizing: border-box;
    margin: ${pxToRem(50)} ${pxToRem(20)};
    padding: ${pxToRem(50)} ${pxToRem(30)};
    width: calc(100vw ${pxToRem(20)});
  
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin: ${pxToRem(100)} auto;
      padding: ${pxToRem(80)} ${oneGridCol};
      width: calc((100vw - ${pxToRem(paddingPlusGutters)}) + (${pxToRem(
  GUTTER,
)} * 11))
    }
  
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin: ${pxToRem(100)} auto;
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

  .k-Modal__close {
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
  
  .k-Modal-content {
    transform: scale(0.94);
  }

  .k-Modal__overlay {
    position: fixed;
    z-index: 110;
    overflow: scroll;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(34, 34, 34, .8);
  }
  
  .k-Modal__overlay--afterOpen {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .k-Modal--afterOpen {
    transition: opacity .3s ease, transform .3s ease;
    transform: scale(1);
    opacity: 1;
  }

  .k-Modal__overlay--beforeClose {
    opacity: 0;
  }
  .k-Modal--beforeClose {
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

const ModalParagraph = ({ children }) => (
  <StyledParagraph
    modifier="quaternary"
    margin={false}
    tag="p"
    className="k-u-margin-bottom-triple k-u-margin-bottom-quadruple@s-up"
  >
    {children}
  </StyledParagraph>
)

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    flex-direction: row;
  }
`

const ModalButton = styled(props => <Button big fluid {...props} />)`
  :not(:last-child) {
    margin-bottom: ${pxToRem(20)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    :not(:last-child) {
      margin-bottom: 0;
    }
    &:not(:first-child) {
      margin-left: ${pxToRem(GUTTER)};
    }
  }
`

export const Modal = ({
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
  ...others
}) => {
  const [showModal, setShowModal] = useState(false)
  const colsOnDesktop = huge ? 10 : big ? 8 : 6
  const close = () => {
    setShowModal(false)
    if (onClose) {
      onClose()
    }
  }
  useEffect(() => {
    if (!trigger) {
      setShowModal(true)
    }
  }, [])

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const ModalPortal = ReactDOM.createPortal(
    <>
      <GlobalStyle cols={colsOnDesktop} />
      <ReactModal
        closeTimeoutMS={500}
        role="dialog"
        className={{
          base: 'k-Modal-content',
          afterOpen: 'k-Modal--afterOpen',
          beforeClose: 'k-Modal--beforeClose',
        }}
        overlayClassName={{
          base: 'k-Modal__overlay',
          afterOpen: 'k-Modal__overlay--afterOpen',
          beforeClose: 'k-Modal__overlay--beforeClose',
        }}
        isOpen={showModal}
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
          {children}
          {hasCloseButton && (
            <div className="k-Modal__close">
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
    <div className={classNames('k-Modal', className)} {...others}>
      {trigger && <span onClick={() => setShowModal(true)}>{trigger}</span>}
      {ModalPortal}
    </div>
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
}

Modal.Title = ModalTitle
Modal.Paragraph = ModalParagraph
Modal.Actions = Actions
Modal.Button = ModalButton
