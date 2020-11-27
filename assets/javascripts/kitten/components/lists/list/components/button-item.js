import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ArrowIcon } from '../../../icons/arrow-icon'
import classNames from 'classnames'

const Item = styled.div`
  display: flex;
  position: relative;
  border: ${pxToRem(2)} solid ${COLORS.line1};
  border-top: none;
  cursor: pointer;
  padding-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
  background-color: ${COLORS.background1};
  transition: background-color 0.2s ease;

  :hover {
    background-color: ${COLORS.background2};
  }

  &:focus {
    z-index: 1;
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }

  &.k-List__button--withTopBorder {
    border-top: ${pxToRem(2)} solid ${COLORS.line1};
  }

  &[aria-disabled='true'] {
    color: ${COLORS.line2};
    cursor: not-allowed;

    :hover {
      background-color: ${COLORS.background1};
    }

    .k-List__button__arrowIcon {
      fill: ${COLORS.line2};
    }
  }

  &.k-List__button--isActive:not([aria-disabled='true']) {
    color: ${COLORS.background1};
    background-color: ${COLORS.primary1};
    border-color: ${COLORS.primary1};

    :hover {
      background-color: ${COLORS.primary2};
    }

    .k-List__button__arrowIcon {
      fill: ${COLORS.background1};
    }
  }

  &.k-List__button--isFocused:not([aria-disabled='true']) {
    .k-List__button__arrowIcon {
      left: ${pxToRem(5)};
    }
  }

  ${({ styles }) => styles}

  .k-List__button__content {
    flex-grow: 1;
  }

  .k-List__button__arrow {
    display: flex;
    align-items: center;
  }

  .k-List__button__arrowIcon {
    position: relative;
    left: 0;
    transition: left 0.2s;
  }
`

export const ButtonItem = ({
  children,
  disabled,
  style,
  withTopBorder,
  onClick,
  onKeyPress,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  className,
  hasArrow,
  active,
  ...others
}) => {
  const [focus, setFocus] = useState(false)

  const handleKeyPress = event => {
    const enterKey = 13
    const spaceKey = 32

    switch (event.which) {
      case enterKey:
      case spaceKey:
        event.preventDefault
        onClick()
        onKeyPress()
        break
    }
  }

  const handleFocus = () => {
    setFocus(true)
    onFocus()
  }

  const handleBlur = () => {
    setFocus(false)
    onBlur()
  }

  const handleMouseEnter = () => {
    setFocus(true)
    onMouseEnter()
  }

  const handleMouseLeave = () => {
    setFocus(false)
    onMouseLeave()
  }

  return (
    <Item
      role={others.as !== 'a' ? 'button' : null}
      tabIndex={disabled ? '-1' : '0'}
      onClick={disabled ? null : onClick}
      onKeyPress={disabled ? null : handleKeyPress}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      styles={style}
      aria-disabled={disabled}
      className={classNames('k-List__button', className, {
        'k-List__button--withTopBorder': withTopBorder,
        'k-List__button--isActive': active,
        'k-List__button--isFocused': focus,
      })}
      {...others}
    >
      <div className="k-List__button__content">{children}</div>

      {hasArrow && (
        <div className="k-List__button__arrow" aria-hidden>
          <ArrowIcon className="k-Button__icon k-List__button__arrowIcon" />
        </div>
      )}
    </Item>
  )
}

ButtonItem.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  withTopBorder: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onKeyPress: PropTypes.func,
  hasArrow: PropTypes.bool,
  active: PropTypes.bool,
}

ButtonItem.defaultProps = {
  style: {},
  disabled: false,
  withTopBorder: false,
  onClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onKeyPress: () => {},
  hasArrow: true,
  active: false,
}
