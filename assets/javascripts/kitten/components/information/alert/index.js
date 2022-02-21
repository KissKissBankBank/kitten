import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { CrossIconNext } from '../../graphics/icons-next/cross-icon-next'
import { IconBadge } from '../../information/icon-badge'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { mq } from '../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

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
  background-color: ${COLORS.primary5};
  color: ${COLORS.font1};

  display: flex;
  align-items: center;
  gap: var(--alert-gap);
  padding: ${pxToRem(18)} var(--alert-gap);

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
  }

  .k-Alert__icon {
    .k-Alert__iconBadge {
      background-color: ${COLORS.primary1};
      border-color: ${COLORS.primary4};
      min-width: ${pxToRem(24)};
      min-height: ${pxToRem(24)};
      border-radius: var(--border-radius-rounded);
    }
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
      fill: ${COLORS.primary1};

      :hover {
        fill: ${COLORS.primary3};
      }
    }
  }

  a {
    ${TYPOGRAPHY.fontStyles.bold};
    color: ${COLORS.primary1};
    text-decoration: underline;
  }

  &.k-Alert--success {
    background-color: ${COLORS.tertiary1};

    [href] {
      color: ${COLORS.valid};
    }

    .k-Alert__iconBadge {
      background-color: ${COLORS.valid};
      border-color: ${COLORS.tertiary2};
    }

    .k-Alert__closeButton {
      svg,
      svg path {
        fill: ${COLORS.valid};

        :hover {
          fill: ${COLORS.tertiary2};
        }
      }
    }
  }

  &.k-Alert--error {
    background-color: ${COLORS.error2};

    [href] {
      color: ${COLORS.error};
    }

    .k-Alert__iconBadge {
      background-color: ${COLORS.error};
      border-color: ${COLORS.error3};
    }

    .k-Alert__closeButton {
      svg,
      svg path {
        fill: ${COLORS.error};

        :hover {
          fill: ${COLORS.error4};
        }
      }
    }
  }

  &.k-Alert--warning {
    background-color: ${COLORS.warning2};

    [href] {
      color: ${COLORS.orange3};
    }

    .k-Alert__iconBadge {
      background-color: ${COLORS.orange3};
      border-color: ${COLORS.orange};
    }

    .k-Alert__closeButton {
      svg,
      svg path {
        fill: ${COLORS.warning};

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
  error,
  success,
  warning,
  closeButton,
  closeButtonLabel,
  children,
  onAfterClose,
  icon,
  iconBadgeBorderColor,
  center,
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
      className={classNames('k-Alert',
        className,
        'k-u-line-height-1-4',
      {
        'k-Alert--center': center,
        'k-Alert--success': success,
        'k-Alert--error': error,
        'k-Alert--warning': warning,
        'k-Alert--hasCloseButton': !!closeButton,
        'k-Alert--hasIcon': !!icon,
        'k-Alert--shouldHide': !isMounted, 
      })}
      {...others}
    >
      {!!icon && (
        <div className="k-Alert__icon">
          <IconBadge
            className="k-Alert__iconBadge"
            children={icon}
            border={{
              width: 2,
              color: iconBadgeBorderColor,
              style: 'solid',
            }}
          />
        </div>
      )}

      <div className="k-Alert__text">{children}</div>

      {closeButton && (
        <button className="k-Alert__closeButton k-u-reset-button">
          <CrossIconNext
            onClick={() => setMounted(false)}
            title={closeButtonLabel}
          />
        </button>
      )}
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
  icon: PropTypes.node,
  iconBadgeBorderColor: PropTypes.string,
  center: PropTypes.bool,
}

Alert.defaultProps = {
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => {},
  icon: null,
  iconBadgeBorderColor: COLORS.primary4,
  center: false,
}
