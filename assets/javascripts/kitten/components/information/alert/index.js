import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { StatusIconNext } from '../../graphics/icons-next/status-icon-next'
import { CrossIconNext } from '../../graphics/icons-next/cross-icon-next'
import { IconBadge } from '../../information/icon-badge'
import TYPOGRAPHY from '../../../constants/typography-config'
import { mq } from '../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'
import deprecated from 'prop-types-extra/lib/deprecated'

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const AlertWrapper = styled.div`
  --alert-gap: ${pxToRem(10)};
  @media ${mq.tabletAndDesktop} {
    --alert-gap: ${pxToRem(20)};
  }

  ${TYPOGRAPHY.fontStyles.light};
  margin: ${pxToRem(10)};
  border-radius: var(--border-radius-m);
  overflow: hidden;
  background-color: var(--color-primary-100);
  color: var(--color-grey-900);

  display: flex;
  align-items: center;
  gap: var(--alert-gap);
  padding: ${pxToRem(18)} var(--alert-gap);

  background-color: var(--color-primary-100);

  [href] {
    color: var(--color-primary-700);
  }

  .k-Alert__closeButton {
    svg,
    svg path {
      fill: var(--color-primary-700);

      :hover {
        fill: var(--color-primary-900);
      }
    }
  }

  &.k-Alert--hasCloseButton {
    --alert-close-width: calc(var(--alert-gap) + ${pxToRem(17)});
  }
  &.k-Alert--hasIcon {
    --alert-icon-width: calc(var(--alert-gap) + ${pxToRem(30)});
  }

  &.k-Alert--center {
    &.k-Alert--hasIcon:not(.k-Alert--hasCloseButton) .k-Alert__text {
      padding-right: var(--alert-icon-width);
    }

    &.k-Alert--hasCloseButton:not(.k-Alert--hasIcon) .k-Alert__text {
      padding-left: var(--alert-close-width);
    }

    &.k-Alert--hasCloseButton.k-Alert--hasIcon .k-Alert__text {
      padding-right: calc(var(--alert-icon-width) - var(--alert-close-width));
    }

    .k-Alert__text {
      text-align: center;
      flex-basis: auto;
    }
  }

  .k-Alert__text {
    flex: 1 0
      calc(100% - var(--alert-close-width, 0px) - var(--alert-icon-width, 0px));
    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(18)};
  }

  .k-Alert__iconBadge {
    min-width: ${pxToRem(20)};
    min-height: ${pxToRem(20)};
  }

  .k-Alert__closeButton {
    flex: 0 0 ${pxToRem(17)};
    transition: all 0.2s ease;

    display: flex;
    align-self: stretch;
    align-items: center;

    margin: ${pxToRem(-18)} calc(var(--alert-gap) * -1);
    padding: ${pxToRem(18)} var(--alert-gap);

    border-top-right-radius: var(--border-radius-m);
    border-bottom-right-radius: var(--border-radius-m);
    outline-offset: ${pxToRem(-2)};

    svg,
    svg path {
      transition: fill 0.2s ease;
      fill: var(--color-primary-700);

      :hover {
        fill: var(--color-primary-900);
      }
    }
  }

  a {
    ${TYPOGRAPHY.fontStyles.bold};
    color: var(--color-primary-500);
    text-decoration: underline;
  }

  &.k-Alert--success {
    background-color: var(--color-success-100);

    [href] {
      color: var(--color-success-700);
    }

    .k-Alert__closeButton {
      svg,
      svg path {
        fill: var(--color-success-700);

        :hover {
          fill: var(--color-success-900);
        }
      }
    }
  }

  &.k-Alert--error,
  &.k-Alert--danger {
    background-color: var(--color-danger-100);

    [href] {
      color: var(--color-danger-700);
    }

    .k-Alert__closeButton {
      svg,
      svg path {
        fill: var(--color-danger-700);

        :hover {
          fill: var(--color-danger-900);
        }
      }
    }
  }

  &.k-Alert--warning {
    background-color: var(--color-warning-100);

    [href] {
      color: var(--color-warning-700);
    }

    .k-Alert__closeButton {
      svg,
      svg path {
        fill: var(--color-warning-700);

        :hover {
          fill: '#A47600';
        }
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
  error, // Deprecated
  danger, // Deprecated
  success, // Deprecated
  warning, // Deprecated
  closeButton,
  closeButtonLabel,
  children,
  onAfterClose,
  icon,
  center,
  status,
  hasBorder,
  displayIcon,
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

  const internalIcon = (() => {
    if (icon) return icon

    return <StatusIconNext status={status} />
  })()

  const role = (() => {
    switch (true) {
      case danger: //deprecated
      case status === 'danger':
        return 'alert'
      case warning: //deprecated
      case success: //deprecated
      case status === 'warning':
      case status === 'success':
        return 'status'
      default:
        return null
    }
  })()

  const statusIcon = (() => {
    switch (true) {
      case warning:
        return 'warning'
      case success:
        return 'success'
      case danger:
      case error:
        return 'danger'
      default:
        return status
    }
  })()

  return (
    <AlertWrapper
      ref={alertRef}
      role={role}
      className={classNames('k-Alert', className, `k-Alert--${status}`, {
        'k-Alert--center': center,
        'k-Alert--hasCloseButton': !!closeButton,
        'k-Alert--hasIcon': !!icon || displayIcon,
        'k-Alert--shouldHide': !isMounted,
        // Status classes through deprecated props
        'k-Alert--success': !!success,
        'k-Alert--danger': !!danger,
        'k-Alert--error': !!error,
        'k-Alert--warning': !!warning,
      })}
      {...others}
    >
      {displayIcon && (
        <IconBadge
          className="k-Alert__iconBadge"
          children={internalIcon}
          status={statusIcon}
          hasBorder={hasBorder}
        />
      )}

      <div className="k-Alert__text">{children}</div>

      {closeButton && (
        <button
          onClick={() => setMounted(false)}
          className="k-Alert__closeButton k-u-reset-button"
          title={closeButtonLabel}
          aria-label={closeButtonLabel}
        >
          <CrossIconNext />
        </button>
      )}
    </AlertWrapper>
  )
}

Alert.propTypes = {
  show: PropTypes.bool,
  error: deprecated(PropTypes.bool, 'Use the "status=danger" prop instead'),
  danger: deprecated(PropTypes.bool, 'Use the "status=danger" prop instead'),
  success: deprecated(PropTypes.bool, 'Use the "status=success" prop instead'),
  warning: deprecated(PropTypes.bool, 'Use the "status=warning" prop instead'),
  closeButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onAfterClose: PropTypes.func,
  icon: PropTypes.node,
  center: PropTypes.bool,
  displayIcon: PropTypes.bool,
  status: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
}

Alert.defaultProps = {
  show: true,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => {},
  icon: null,
  center: false,
  displayIcon: true,
  status: 'info',
}
