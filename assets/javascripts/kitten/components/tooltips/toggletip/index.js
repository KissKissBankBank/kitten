import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import throttle from 'lodash/throttle'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { CONTAINER_PADDING_THIN } from '../../../constants/grid-config'
import { QuestionMarkIcon } from '../../../components/icons/question-mark-icon'
import { WarningIcon } from '../../../components/icons/warning-icon'

const StyledWrapper = styled.span`
  --toggletipAction-size: ${pxToRem(24)};

  position: relative;
  display: inline-block;

  &,
  &.k-Toggletip--info {
    --toggletipAction-color: ${COLORS.primary1};
    --toggletipBubble-color: ${COLORS.primary4};
  }
  &.k-Toggletip--warning {
    --toggletipAction-color: ${COLORS.orange};
    --toggletipBubble-color: ${COLORS.orange1};
  }
  &.k-Toggletip--error {
    --toggletipAction-color: ${COLORS.error};
    --toggletipBubble-color: ${COLORS.error2};
  }
  &.k-Toggletip--success {
    --toggletipAction-color: ${COLORS.valid};
    --toggletipBubble-color: ${COLORS.valid1};
  }
  &.k-Toggletip--disabled {
    --toggletipAction-color: ${COLORS.font2};
    --toggletipBubble-color: ${COLORS.line1};
  }

  .k-Toggletip__action {
    position: relative;
    background-color: var(--toggletipAction-color);
    width: var(--toggletipAction-size);
    height: var(--toggletipAction-size);
    border-radius: 50%;
  }

  .k-Toggletip__bubble {
    --toggletipBubble-arrowMainPosition: ${pxToRem(-2 * 10)};

    z-index: 1;
    box-sizing: border-box;
    padding: ${pxToRem(12)};
    background-color: var(--toggletipBubble-color);
    text-align: left;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border: ${pxToRem(10)} solid transparent;
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      border-radius: ${pxToRem(6)};
      position: fixed;
      top: calc(
        var(--toggletipAction-top) + var(--toggletipAction-size) +
          ${pxToRem(20)}
      );
      left: ${pxToRem(CONTAINER_PADDING_THIN)};
      right: ${pxToRem(CONTAINER_PADDING_THIN)};

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
      border-radius: ${pxToRem(8)};
      position: absolute;
      top: calc(var(--toggletipAction-size) / 2);
      left: calc(100% + ${pxToRem(20)});
      transform: translateY(-50%);
      min-width: ${pxToRem(220)};
      max-width: ${pxToRem(440)};

      &:after {
        left: var(--toggletipBubble-arrowMainPosition);
        top: calc(50% - ${pxToRem(10)});
        border-right-color: var(--toggletipBubble-color);
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

const ButtonIcon = ({ modifier }) => {
  if (modifier === 'info') {
    return <QuestionMarkIcon width={6} height={10} color={COLORS.background1} />
  }

  return <WarningIcon width={2} height={10} color={COLORS.background1} />
}

export const Toggletip = ({
  modifier,
  style,
  className,
  children,
  actionLabel,
  actionProps,
  bubbleProps,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false)
  const [actionPosition, setActionPosition] = useState({})
  const [bubbleOnLeftSide, setBubbleOnLeftSide] = useState(false)
  const actionElement = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleKeydownEscape)
    window.addEventListener('resize', throttle(updateCoordinates, 50))

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleKeydownEscape)
      window.removeEventListener('resize', throttle(updateCoordinates, 50))
    }
  }, [isOpen])

  useEffect(() => {
    updateCoordinates()
  }, [actionElement])

  const updateCoordinates = () => {
    if (!actionElement.current) return

    const actionElementCoords = actionElement.current?.getBoundingClientRect()

    setActionPosition({
      top: actionElementCoords.top,
      left: actionElementCoords.left,
    })

    const bubblePlusMargins = 220 + 20 + CONTAINER_PADDING_THIN
    const shouldDisplayOnLeftSide =
      document.body.clientWidth < actionElementCoords.right + bubblePlusMargins
    setBubbleOnLeftSide(shouldDisplayOnLeftSide)
  }

  const handleOutsideClick = event => {
    if (actionElement.current !== event.target) {
      setOpen(false)
    }
  }
  const handleKeydownEscape = event => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const handleClick = event => {
    event.preventDefault()
    setOpen(false)

    window.setTimeout(() => setOpen(true), 100)
  }

  return (
    <StyledWrapper
      className={classNames(
        'k-Toggletip',
        className,
        `k-Toggletip--${modifier}`,
      )}
      style={{
        style,
        '--toggletipAction-top': pxToRem(actionPosition.top),
        '--toggletipAction-left': pxToRem(actionPosition.left),
      }}
      {...props}
    >
      <button
        {...actionProps}
        className={classNames(
          'k-Toggletip__action',
          'k-u-reset-button',
          actionProps.className,
        )}
        type="button"
        aria-label={actionLabel}
        onClick={handleClick}
        onBlur={() => setOpen(false)}
        ref={actionElement}
      >
        <ButtonIcon modifier={modifier} />
      </button>
      <span role="status">
        {isOpen && (
          <span
            {...bubbleProps}
            className={classNames(
              'k-Toggletip__bubble',
              'k-u-weight-light',
              'k-u-size-tiny',
              'k-u-line-height-1-3',
              bubbleProps.className,
              {
                'k-Toggletip__bubble--left': bubbleOnLeftSide,
              },
            )}
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
}

Toggletip.propTypes = {
  modifier: PropTypes.oneOf([
    'info',
    'warning',
    'error',
    'success',
    'disabled',
  ]),
  actionLabel: PropTypes.string.isRequired,
  actionProps: PropTypes.object,
  bubbleProps: PropTypes.object,
}
