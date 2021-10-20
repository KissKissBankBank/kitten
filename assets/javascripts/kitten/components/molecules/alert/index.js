import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { CrossIconNext } from '../../../components/graphics/icons-next/cross-icon-next'
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
  overflow: hidden;
  background-color: ${COLORS.primary5};
  color: ${COLORS.font1};
  display: flex;

  [href] {
    color: ${COLORS.primary1};
  }

  .k-Alert__text {
    padding: ${pxToRem(12)} ${pxToRem(10)};
    flex: 1 0 0;
    font-size: ${stepToRem(-1)};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding: ${pxToRem(18)} ${pxToRem(20)};
    }
  }

  .k-Alert__iconBadge {
    margin-right: ${pxToRem(10)};
    background-color: ${COLORS.primary1};
    border-color: ${COLORS.primary4};
    min-width: ${pxToRem(24)};
    min-height: ${pxToRem(24)};
    border-radius: ${pxToRem(24)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-right: ${pxToRem(20)};
    }
  }

  button {
    display: flex;
    flex: 0 0 auto;
    transition: all 0.2s ease;
    align-self: stretch;
    align-items: center;
    padding-right: ${pxToRem(10)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-right: ${pxToRem(20)};
    }
    svg,
    svg path {
      transition: fill 0.2s ease;
      fill: ${COLORS.primary1};
      
      :hover {
        fill: ${COLORS.primary3};
      }
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
    background-color: ${COLORS.tertiary1};
    
    [href] {
      color: ${COLORS.valid};
    }
  
    .k-Alert__iconBadge {
      background-color: ${COLORS.valid};
      border-color: ${COLORS.tertiary2};
    }
    
    button {
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

    button {
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
  
    button {
      svg,
      svg path {
        fill: ${COLORS.warning};

        :hover {
          fill: "#A47600";
        }
      }
    }
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
  icon,
  iconBadgeBorderColor,
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
          {icon && (
            <IconBadge
              className="k-Alert__iconBadge"
              children={icon}
              border={{
                width: 2,
                color: iconBadgeBorderColor,
                style: 'solid',
              }}
            />
          )}
          {children}
        </div>

        {closeButton && (
          <button className="k-u-reset-button">
            <CrossIconNext
              onClick={() => setMounted(false)}
              title={closeButtonLabel}
            />
          </button>
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
  icon: PropTypes.node,
  iconBadgeBorderColor: PropTypes.string,
}

Alert.defaultProps = {
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => {},
  icon: '',
  iconBadgeBorderColor: COLORS.primary4,
}
