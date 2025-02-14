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
    color: var(--toggletipBubble-colorText);
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
      top: calc(var(--toggletipAction-height) + ${pxToRem(20)});
      left: calc(
        -1 * var(--toggletipAction-left) + ${pxToRem(CONTAINER_PADDING_THIN)}
      );
      width: calc(100vw - ${pxToRem(CONTAINER_PADDING_THIN * 2)});

      &:after {
        top: var(--toggletipBubble-arrowMainPosition);
        left: calc(
          var(--toggletipAction-left) - ${pxToRem(CONTAINER_PADDING_THIN)} -
            ${pxToRem(10)} + (var(--toggletipAction-height) / 2)
        );
        border-bottom-color: var(--toggletipBubble-color);
      }

      &.k-Toggletip__bubble--mobileTop {
        top: initial;
        bottom: calc(var(--toggletipAction-height) + ${pxToRem(20)});
        &:after {
          top: initial;
          bottom: var(--toggletipBubble-arrowMainPosition);
          border-top-color: var(--toggletipBubble-color);
          border-bottom-color: transparent;
        }
      }
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      position: absolute;
      top: 50%;
      left: calc(100% + ${pxToRem(10)});
      transform: translateY(-50%);
      min-width: ${pxToRem(220)};
      max-width: ${pxToRem(440)};
      width: max-content;

      &.k-Toggletip__bubble--rightLimit {
        max-width: calc(
          100vw - var(--toggletipAction-left) -
            ${pxToRem(CONTAINER_PADDING_THIN + 20)} -
            var(--toggletipAction-height)
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
              ${pxToRem(10)} + (var(--toggletipAction-height) / 2)
          );
        }
      }

      &.k-Toggletip__bubble--highBottom :not(.k-Toggletip__bubble--lowTop) {
        top: initial;
        bottom: calc(-1 * ${pxToRem(CONTAINER_PADDING_THIN)});
        transform: none;

        &:after {
          top: initial;
          bottom: calc(
            ${pxToRem(CONTAINER_PADDING_THIN)} - ${pxToRem(10)} +
              (var(--toggletipAction-height) / 2)
          );
        }
      }

      &.k-Toggletip__bubble--left {
        left: initial;
        right: calc(100% + ${pxToRem(10)});

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
  bubbleColorText,
  ...props
}) => {
  const [isHover, setHoverState] = useState(false)
  const [hasBeenClicked, setClickedState] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [actionPosition, setActionPosition] = useState({})
  const [bubbleOnLeftSide, setBubbleOnLeftSide] = useState(false)
  const [bubbleLowTop, setBubbleLowTop] = useState(false)
  const [bubbleHighBottom, setBubbleHighBottom] = useState(false)
  const [bubbleMobileTop, setBubbleMobileTop] = useState(false)
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
    const scrollTop = window.scrollY
    const innerHeight = window.innerHeight

    const shouldDisplayBubbleLowTop =
      actionPosition.top - bubbleElementCoords.height / 2 < scrollTop
    setBubbleLowTop(shouldDisplayBubbleLowTop)

    const shouldDisplayBubbleHighBottom =
      actionPosition.bottom + bubbleElementCoords.height / 2 >
      scrollTop + innerHeight
    setBubbleHighBottom(shouldDisplayBubbleHighBottom)

    const shouldDisplayBubbleMobileTop =
      actionPosition.bottom +
        bubbleElementCoords.height +
        CONTAINER_PADDING_THIN >
        scrollTop + innerHeight &&
      actionPosition.top > bubbleElementCoords.height
    setBubbleMobileTop(shouldDisplayBubbleMobileTop)

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

    setActionPosition(actionElementCoords)

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
      case 'error':
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
        'k-Toggletip--action',
        className,
        `k-Toggletip--${modifier}`,
      )}
      style={{
        '--toggletipAction-height': actionPosition.height
          ? pxToRem(actionPosition.height)
          : undefined,
        '--toggletipAction-top': actionPosition.top
          ? pxToRem(actionPosition.top)
          : undefined,
        '--toggletipAction-bottom': actionPosition.bottom
          ? pxToRem(actionPosition.bottom)
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
      <button
        ref={actionElement}
        onBlur={() => setOpen(false)}
        onClick={handleClick}
        type="button"
        aria-label={actionLabel}
        className="k-u-reset-button k-Toggletip__action"
        style={{
          '--toggletipAction-color': actionProps?.color || null,
          ...actionProps?.style,
        }}
      >
        {!!targetElement && React.isValidElement(targetElement) ? (
          targetElement
        ) : (
          <IconBadge
            className="k-Toggletip__icon"
            children={internalIcon}
            status={modifier}
            size="small"
            hasBorder={iconHasBorder}
          />
        )}
      </button>

      <span role={role}>
        {isOpen && (
          <span
            className={classNames(
              'k-Toggletip__bubble',
              'k-u-weight-400',
              'k-u-size-small',
              'k-u-line-height-1-3',
              bubbleClassName,
              {
                'k-Toggletip__bubble--left': bubbleOnLeftSide,
                'k-Toggletip__bubble--lowTop': bubbleLowTop,
                'k-Toggletip__bubble--highBottom': bubbleHighBottom,
                'k-Toggletip__bubble--mobileTop': bubbleMobileTop,
                'k-Toggletip__bubble--rightLimit':
                  !bubbleOnLeftSide && bubbleRightLimit,
              },
            )}
            style={{
              '--toggletipBubble-colorText': bubbleColorText || null,
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
  bubbleProps: {},
  targetElement: null,
  iconHasBorder: true,
}

Toggletip.propTypes = {
  modifier: PropTypes.oneOf([
    'info',
    'warning',
    'danger',
    'success',
    'disabled',
  ]),
  actionLabel: PropTypes.string.isRequired,
  actionProps: deprecated(PropTypes.object),
  bubbleProps: PropTypes.object,
  targetElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  iconHasBorder: PropTypes.bool,
  bubbleColorText: PropTypes.string,
}
