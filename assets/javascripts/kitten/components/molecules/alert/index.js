import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { CrossIcon } from '../../../components/graphics/icons/cross-icon'
import { IconBadge } from '../../../components/atoms/icon-badge'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const AlertWrapper = styled.div`
  ${TYPOGRAPHY.fontStyles.light};
  margin: ${pxToRem(10)};
  border-radius: ${pxToRem(8)};
  position: relative;
  overflow: hidden;
  background-color: ${COLORS.primary5};
  color: ${COLORS.primary1};
  display: flex;
  align-items: flex-start;

  .k-Alert__text {
    padding: ${pxToRem(13)} ${pxToRem(20)};
    flex: 1 0 0;
    font-size: ${stepToRem(-1)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      display: flex;
      justify-content: center;
    }
  }

  .k-Alert__iconBadge {
    margin-right: ${pxToRem(20)};
  }

  .k-Alert__button {
    display: flex;
    flex: 0 0 auto;
    transition: all 0.2s ease;
    align-self: center;
    padding-right: ${pxToRem(20)};
    cursor: pointer;

    svg,
    svg path {
      transition: fill 0.2s ease;
    }

    &:focus {
      outline: ${COLORS.background1} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(-4)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }

  a {
    ${TYPOGRAPHY.fontStyles.bold};
    color: inherit;
    text-decoration: underline;
  }

  &.k-Alert--success {
    color: ${COLORS.valid};
    background-color: ${COLORS.tertiary1};
  }

  &.k-Alert--error {
    color: ${COLORS.error};
    background-color: ${COLORS.error2};
  }

  &.k-Alert--warning {
    color: ${COLORS.warning};
    background-color: ${COLORS.warning2};
  }

  &.k-Alert--hasCloseButton {
    .k-Alert__text {
      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        margin-left: ${pxToRem(50)};
      }
    }
  }

  &.k-Alert--shouldHide {
    pointer-events: none;
    animation: ${fadeOut} 0.4s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
  }
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

  if (isTrashed || !show) return null

  return (
    <AlertWrapper
      ref={alertRef}
      role="alert"
      className={classNames('k-Alert', className, {
        'k-Alert--success': success,
        'k-Alert--error': error,
        'k-Alert--warning': warning,
        'k-Alert--hasCloseButton': closeButton,
        'k-Alert--shouldHide': !isMounted,
      })}
      {...others}
    >
      <>
        <div className="k-Alert__text">
          <IconBadge className="k-Alert__iconBadge" size="tiny">
            <CrossIcon
              width={12}
              height={12}
              color={COLORS.background1}
            />
          </IconBadge>
          {children}
        </div>

        {closeButton && (
          <CrossIcon
            color="currentColor"
            onClick={() => setMounted(false)}
            title={closeButtonLabel}
            className="k-Alert__button"
            width={12}
            height={12}
          />
        )}
      </>
    </AlertWrapper>
  )
}

Alert.propTypes = {
  show: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onAfterClose: PropTypes.func,
}

Alert.defaultProps = {
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => {},
}
