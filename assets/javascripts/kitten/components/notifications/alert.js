import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { CloseButton } from '../../components/buttons/close-button'
import COLORS from '../../constants/colors-config'
import TYPOGRAPHY from '../../constants/typography-config'
import { ScreenConfig } from '../../constants/screen-config'
import { pxToRem, stepToRem } from '../../helpers/utils/typography'

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const AlertWrapper = styled.div`
  ${TYPOGRAPHY.fontStyles.light};
  position: relative;
  overflow: hidden;
  padding: ${pxToRem(13)} ${pxToRem(20)};
  font-size: ${stepToRem(-1)};
  background-color: ${COLORS.primary5};
  color: ${COLORS.primary1};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    text-align: center;
  }

  a {
    ${TYPOGRAPHY.fontStyles.bold};
    color: inherit;
    text-decoration: underline;
  }

  ${props =>
    props.success &&
    css`
      color: ${COLORS.valid};
      background-color: ${COLORS.tertiary1};
    `}
  ${props =>
    props.error &&
    css`
      color: ${COLORS.error};
      background-color: ${COLORS.error2};
    `}
  ${props =>
    props.warning &&
    css`
      color: ${COLORS.warning};
      background-color: ${COLORS.warning2};
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
  useEffect(() => {
    let clearDelayBeforeTrash
    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(() => {
        trashIt(true)
        onAfterClose()
      }, 400)
    }
    return () => clearTimeout(clearDelayBeforeTrash)
  }, [isMounted])
  const alertRef = useRef(null)
  if (isTrashed || !show) {
    return null
  }
  return (
    <AlertWrapper
      ref={ alertRef }
      role="alert"
      success={ success }
      error={ error }
      warning={ warning }
      shouldHide={ !isMounted }
      className={ className }
      { ...others }
    >
      <>
        { children }
        { closeButton && (
          <StyledCloseButton
            modifier="carbon"
            closeButtonLabel={ closeButtonLabel }
            onClick={ () => setMounted(false) }
          />
        ) }
      </>
    </AlertWrapper>
  )
}

Alert.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onAfterClose: PropTypes.func,
}

Alert.defaultProps = {
  className: null,
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => { },
}
