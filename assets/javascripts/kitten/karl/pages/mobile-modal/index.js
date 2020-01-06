import React, {
  createContext,
  useContext,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../../../components/modals/modal'
import styled, { createGlobalStyle } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { CloseButton } from '../../../components/buttons/close-button'

const ModalProperties = createContext({})

const GlobalStyle = createGlobalStyle`
  body.k-Modal__body--open {
    overflow: hidden;
  }

  .k-MobileModal__content {
    position: relative;
    max-height: 100vh;
    max-width: 100vw;

    background-color: ${COLORS.background1};
    text-align: left;

    outline: none;
    box-sizing: border-box;
    overflow: scroll;

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      width: 100vw;
      height: 100vh;
    }
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      max-height: calc(100vh - ${pxToRem(20)} * 2);
      max-width: ${pxToRem(900)};
      margin: 0 ${pxToRem(20)};
      width: 100%;
    }
  }

  .k-MobileModal__overlay {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(34, 34, 34, .9);
  }

  .k-MobileModal__overlay {
    opacity: 0;
  }
  .k-MobileModal__content {
    opacity: 0;
    transform: scale(.94);
  }

  .k-MobileModal__overlay--afterOpen {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .k-MobileModal--afterOpen {
    transition: opacity .3s ease, transform .3s ease;
    transform: scale(1);
    opacity: 1;
  }

  .k-MobileModal__overlay--beforeClose {
    opacity: 0;
  }
  .k-MobileModal--beforeClose {
    transition: opacity .3s ease, transform .5s ease;
    transform: scale(1.06);
    opacity: 0;
  }
`

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${COLORS.background1};

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    padding: ${pxToRem(20)} ${pxToRem(70)};
    border-bottom: ${pxToRem(2)} solid ${COLORS.line1};
    min-height: ${pxToRem(40)};
    display: flex;
    align-items: center;
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    padding: ${pxToRem(80)} ${pxToRem(115)} ${pxToRem(30)};
  }
`
const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    padding: ${pxToRem(20)} ${pxToRem(20)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    padding: ${pxToRem(20)} ${pxToRem(115)} ${pxToRem(20)};
  }
`
const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 5;
  background-color: ${COLORS.background1};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    padding: ${pxToRem(20)} ${pxToRem(115)} ${pxToRem(20)};
  }
`

const StyledCloseButton = styled(CloseButton)`
  position: absolute;

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    top: ${pxToRem(20)};
    left: ${pxToRem(20)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    top: 0;
    right: 0;
  }
`

const MobileModal = forwardRef(({ children, ...props }, ref) => {
  const modalRef = useRef(null)

  useImperativeHandle(ref, () => ({
    close: () => {
      modalRef.current.close()
    },
  }))

  return (
    <>
      <GlobalStyle />
      <Modal
        ref={modalRef}
        disableOutsideScroll
        modalClassNames={{
          className: {
            base: 'k-MobileModal__content',
            afterOpen: 'k-MobileModal--afterOpen',
            beforeClose: 'k-MobileModal--beforeClose',
          },
          overlayClassName: {
            base: 'k-MobileModal__overlay',
            afterOpen: 'k-MobileModal__overlay--afterOpen',
            beforeClose: 'k-MobileModal__overlay--beforeClose',
          },
          closeContainerClassName: 'k-MobileModal__close',
        }}
        content={
          <ModalProperties.Provider value={{ modalRef }}>
            {children}
          </ModalProperties.Provider>
        }
        hasCloseButton={false}
        {...props}
      />
    </>
  )
})

const MobileModalHeader = props => {
  const { modalRef } = useContext(ModalProperties)

  return (
    <StyledHeader>
      <StyledCloseButton
        className="k-u-hidden@m-up"
        modifier="hydrogen"
        size="tiny"
        closeButtonLabel={props.closeButtonLabel}
        onClick={() => modalRef.current.close()}
      />
      {props.children}
      <StyledCloseButton
        className="k-u-hidden@s-down"
        modifier="beryllium"
        closeButtonLabel={props.closeButtonLabel}
        onClick={() => modalRef.current.close()}
      />
    </StyledHeader>
  )
}

MobileModal.defaultProps = {
  closeButtonLabel: 'Close',
}

MobileModal.propTypes = {
  closeButtonLabel: PropTypes.string,
}

MobileModal.Header = MobileModalHeader
MobileModal.Content = StyledContent
MobileModal.Footer = StyledFooter

export default MobileModal
