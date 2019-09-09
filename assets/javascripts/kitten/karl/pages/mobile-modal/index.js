import React, { createContext, useContext, useRef, useEffect } from 'react'
import { Modal } from '../../../components/modals/modal'
import styled, { createGlobalStyle } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { createMatchMediaMax } from '../../../helpers/utils/media-queries'
import { CloseButton } from '../../../components/buttons/close-button'

const ModalProperties = createContext({})

const borderWidth = pxToRem(2)
const borderColor = COLORS.line1

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
`

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${COLORS.background1};

  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    padding: ${pxToRem(20)} ${pxToRem(70)};
    border-bottom: ${borderWidth} solid ${borderColor};
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

const MobileModal = ({ children, ...props }) => {
  const modalRef = useRef(null)

  return (
    <>
      <GlobalStyle />
      <Modal
        ref={modalRef}
        disableOutsideScroll={true}
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
}

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

const MobileModalContent = props => {
  return <StyledContent>{props.children}</StyledContent>
}

const MobileModalFooter = props => {
  const { modalRef } = useContext(ModalProperties)

  useEffect(() => {
    if (props.shouldClose) {
      modalRef.current.close()
    }
  }, [props.shouldClose])

  return <StyledFooter>{props.children}</StyledFooter>
}

MobileModal.Header = MobileModalHeader
MobileModal.Content = MobileModalContent
MobileModal.Footer = MobileModalFooter

export default MobileModal
