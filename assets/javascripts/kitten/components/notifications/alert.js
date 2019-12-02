import React, { useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { CloseButton } from '../../components/buttons/close-button'
import COLORS from '../../constants/colors-config'
import TYPOGRAPHY from '../../constants/typography-config'
import { ScreenConfig } from '../../constants/screen-config'
import { pxToRem } from '../../helpers/utils/typography'

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const AlertWrapper = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: ${pxToRem(13)} ${pxToRem(20)};
  font-size: ${pxToRem(14)};
  font-family: ${TYPOGRAPHY.fontStyles.light.fontFamily};
  font-weight: ${TYPOGRAPHY.fontStyles.light.fontWeight};
  background-color: ${COLORS.primary5};
  color: ${COLORS.primary1};
  
  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    text-align: left;
  }
  
  a {
     color: inherit;
     text-decoration: underline;
     font-family: ${TYPOGRAPHY.fontStyles.bold.fontFamily};
     font-weight: ${TYPOGRAPHY.fontStyles.bold.fontWeight};
  }
  
  ${props =>
    props.success &&
    css`
      background-color: ${COLORS.tertiary1};
      color: ${COLORS.valid};
    `}
  ${props =>
    props.error &&
    css`
      background-color: ${COLORS.error2};
      color: ${COLORS.error};
    `}
  ${props =>
    props.warning &&
    css`
      background-color: ${COLORS.warning};
      color: ${COLORS.warning2};
    `}
  ${props =>
    props.shouldHide &&
    css`
      pointer-events: none;
      animation: ${fadeOut} 0.4s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
    `}
`

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: 0;
`

export const Alert = ({
  className,
  show,
  error,
  success,
  warning,
  closeButton,
  closeButtonLabel,
  children,
  onAfterClose,
  ...others
}) => {
  const [isTrashed, trashIt] = useState(false)
  const [isMounted, setMounted] = useState(true)
  const alertRef = useRef(null)
  if (isTrashed || !show) {
    return null
  }
  return (
    <AlertWrapper
      ref={alertRef}
      role="alert"
      success={success}
      error={error}
      warning={warning}
      shouldHide={!isMounted}
      className={className}
      onAnimationEnd={() => {
        trashIt(true)
        onAfterClose()
      }}
      {...others}
    >
      <>
        {children}
        {closeButton && (
          <StyledCloseButton
            modifier="carbon"
            closeButtonLabel={closeButtonLabel}
            onClick={() => {
              setMounted(false)
            }}
          />
        )}
      </>
    </AlertWrapper>
  )
}

Alert.defaultProps = {
  className: null,
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => {},
}
