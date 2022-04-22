import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import throttle from 'lodash/throttle'
import styled from 'styled-components'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { CONTAINER_PADDING_THIN } from '../../../constants/grid-config'
import { IconBadge } from '../../information/icon-badge'
import { StatusIconNext } from '../../graphics/icons-next/status-icon-next'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledWrapper = styled.span`
  position: relative;
  display: inline-block;

  &,
  &.k-Toggletip--info {
    --toggletipBubble-color: var(--color-primary-100);
  }
  &.k-Toggletip--warning {
    --toggletipBubble-color: var(--color-warning-100);
  }
  &.k-Toggletip--error,
  &.k-Toggletip--danger {
    --toggletipBubble-color: var(--color-danger-100);
  }
  &.k-Toggletip--success {
    --toggletipBubble-color: var(--color-success-100);
  }
  &.k-Toggletip--disabled {
    --toggletipBubble-color: var(--color-grey-300);
  }

  .k-Toggletip__bubble {
    --toggletipBubble-arrowMainPosition: ${pxToRem(-2 * 8)};

    z-index: var(--toggletipBubble-zIndex);
    box-sizing: border-box;
    padding: ${pxToRem(12)};
    background-color: var(--toggletipBubble-color);
    text-align: left;
    border-radius: var(--border-radius-s);

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border: ${pxToRem(10)} solid transparent;
      border-radius: var(--border-radius-s);
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      position: absolute;
      top: calc(var(--toggletipAction-size) + ${pxToRem(20)});
      left: calc(
        -1 * var(--toggletipAction-left) + ${pxToRem(CONTAINER_PADDING_THIN)}
      );
      width: calc(100vw - ${pxToRem(CONTAINER_PADDING_THIN * 2)});

      &:after {
        top: var(--toggletipBubble-arrowMainPosition);
        left: calc(
          var(--toggletipAction-left) - ${pxToRem(CONTAINER_PADDING_THIN)} -
            ${pxToRem(10)} + (var(--toggletipAction-size) / 2)
        );
        border-bottom-color: var(--toggletipBubble-color);
      }
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: calc(100% + ${pxToRem(20)});
      transform: translateY(-50%);
      min-width: ${pxToRem(220)};
      max-width: ${pxToRem(440)};
      width: max-content;

      &.k-Toggletip__bubble--rightLimit {
        max-width: calc(
          100vw - var(--toggletipAction-left) -
            ${pxToRem(CONTAINER_PADDING_THIN + 20)} -
            var(--toggletipAction-size)
        );
      }

      &:after {
        left: var(--toggletipBubble-arrowMainPosition);
        top: calc(50% - ${pxToRem(10)});
        border-right-color: var(--toggletipBubble-color);
      }

      &.k-Toggletip__bubble--lowTop {
        top: calc(
          -1 * var(--toggletipAction-top) + ${pxToRem(CONTAINER_PADDING_THIN)}
        );
        transform: none;

        &:after {
          top: calc(
            var(--toggletipAction-top) - ${pxToRem(CONTAINER_PADDING_THIN)} -
              ${pxToRem(10)} + (var(--toggletipAction-size) / 2)
          );
        }
      }

      &.k-Toggletip__bubble--left {
        left: initial;
        right: calc(100% + ${pxToRem(20)});

        &:after {
          left: initial;
          right: var(--toggletipBubble-arrowMainPosition);
          border-right-color: transparent;
          border-left-color: var(--toggletipBubble-color);
        }
      }
    }
  }
`

export const Toggletip = ({
  modifier,
  style,
  className,
  children,
  actionLabel,
  actionProps,
  bubbleProps,
  targetElement,
  icon,
  displayIcon,
  iconHasBorder,
  ...props
}) => {
  const [isHover, setHoverState] = useState(false)
  const [hasBeenClicked, setClickedState] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [actionPosition, setActionPosition] = useState({})
  const [bubbleOnLeftSide, setBubbleOnLeftSide] = useState(false)
  const [bubbleLowTop, setBubbleLowTop] = useState(false)
  const [bubbleRightLimit, setBubbleRightLimit] = useState(false)
  const actionElement = useRef(null)

  const {
    className: bubbleClassName,
    zIndex: bubbleZIndex,
    color: bubbleColor,
    style: bubbleStyle,
    ...otherBubbleProps
  } = bubbleProps

  useEffect(() => {
    if (isHover) {
      setOpen(true)
    }

    if (!isHover && !hasBeenClicked) {
      setOpen(false)
    }
  }, [isHover, hasBeenClicked])

  useEffect(() => {
    if (!domElementHelper.canUseDom()) return

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleKeydownEscape)
    window.addEventListener('DOMContentLoaded', updateCoordinates)
    window.addEventListener('resize', throttleUpdateCoordinates)

    const bubbleElement = actionElement.current?.nextElementSibling?.children[0]
    const bubbleElementCoords = bubbleElement?.getBoundingClientRect() || {}

    const shouldDisplayBubbleLowTop =
      actionPosition.top < bubbleElementCoords.height / 2
    setBubbleLowTop(shouldDisplayBubbleLowTop)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleKeydownEscape)
      window.removeEventListener('DOMContentLoaded', updateCoordinates)
      window.removeEventListener('resize', throttleUpdateCoordinates)
    }
  }, [isOpen])

  useEffect(() => {
    if (!domElementHelper.canUseDom()) return

    if (
      document.readyState === 'complete' ||
      document.readyState === 'interactive'
    ) {
      updateCoordinates()
    }
  }, [])

  const updateCoordinates = () => {
    if (!actionElement.current) return

    const actionElementCoords = actionElement.current.getBoundingClientRect()

    setActionPosition({
      top: actionElementCoords.top,
      left: actionElementCoords.left,
    })

    const bubblePlusMargins = 220 + 20 + CONTAINER_PADDING_THIN
    const shouldDisplayOnLeftSide =
      document.body.clientWidth < actionElementCoords.right + bubblePlusMargins
    setBubbleOnLeftSide(shouldDisplayOnLeftSide)

    const shouldDisplayBubbleRightLimit =
      document.body.clientWidth -
        (actionElementCoords.right + CONTAINER_PADDING_THIN + 20) <
      440

    setBubbleRightLimit(shouldDisplayBubbleRightLimit)
  }

  const throttleUpdateCoordinates = throttle(updateCoordinates, 100)

  const handleOutsideClick = event => {
    if (actionElement.current !== event.target) {
      setClickedState(false)
      setOpen(false)
    }
  }
  const handleKeydownEscape = event => {
    if (event.key === 'Escape') {
      setClickedState(false)
      setOpen(false)
    }
  }

  const handleClick = event => {
    event.preventDefault()
    setOpen(false)

    window.setTimeout(() => {
      setOpen(true)
      setClickedState(true)
    }, 100)
  }

  const internalIcon = (() => {
    if (icon) return icon

    return <StatusIconNext status={modifier} />
  })()

  const role = (() => {
    switch (modifier) {
      case 'danger':
        return 'alert'
      case 'warning':
      case 'success':
        return 'status'
      default:
        return null
    }
  })()

  return (
    <StyledWrapper
      className={classNames(
        'k-Toggletip',
        className,
        `k-Toggletip--${modifier}`,
        {
          'k-Toggletip--hasIcon': displayIcon,
        },
      )}
      style={{
        '--toggletipAction-top': actionPosition.top
          ? pxToRem(actionPosition.top)
          : undefined,
        '--toggletipAction-left': actionPosition.left
          ? pxToRem(actionPosition.left)
          : undefined,
        ...style,
      }}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      {...props}
    >
      {displayIcon && (
        <button
          className={classNames(
            'k-Toggletip--hasIcon',
            'k-u-reset-button',
          )}
          type="button"
          aria-label={actionLabel}
          onClick={handleClick}
          ref={actionElement}
        >
          <IconBadge
            className="k-Toggletip__icon"
            children={internalIcon}
            status={modifier}
            size="small"
            hasBorder={iconHasBorder}
          />
        </button>
      )}

      <span role="status">
        {isOpen && (
          <span
            className={classNames(
              'k-Toggletip__bubble',
              'k-u-weight-light',
              'k-u-size-small',
              'k-u-line-height-1-3',
              bubbleClassName,
              {
                'k-Toggletip__bubble--left': bubbleOnLeftSide,
                'k-Toggletip__bubble--lowTop': bubbleLowTop,
                'k-Toggletip__bubble--rightLimit':
                  !bubbleOnLeftSide && bubbleRightLimit,
              },
            )}
            style={{
              '--toggletipBubble-zIndex': bubbleZIndex || 1,
              '--toggletipBubble-color': bubbleColor || null,
              ...bubbleStyle,
            }}
            {...otherBubbleProps}
          >
            {children}
          </span>
        )}
      </span>
    </StyledWrapper>
  )
}

Toggletip.defaultProps = {
  modifier: 'info',
  actionProps: {},
  bubbleProps: {},
  targetElement: null,
  displayIcon: true,
  iconHasBorder: true,
}

Toggletip.propTypes = {
  modifier: deprecated(PropTypes.oneOf([
    'info',
    'warning',
    'danger',
    'success',
    'disabled',
  ]),
  'Please use danger modifier instead'),
  actionLabel: PropTypes.string.isRequired,
  actionProps: PropTypes.object,
  bubbleProps: PropTypes.object,
  targetElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  displayIcon: PropTypes.bool,
  iconHasBorder: PropTypes.bool,
}
