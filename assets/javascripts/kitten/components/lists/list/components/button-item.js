import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ArrowIcon as KittenArrowIcon } from '../../../icons/arrow-icon'

const Item = styled.div`
  display: flex;
  border: ${pxToRem(2)} solid ${COLORS.line1};
  border-top: none;
  cursor: pointer;
  padding-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};

  :hover {
    background-color: ${COLORS.background2};
  }

  ${({ withTopBorder }) =>
    withTopBorder &&
    css`
      border-top: ${pxToRem(2)} solid ${COLORS.line1};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${COLORS.line2};
      background-color: ${COLORS.background1};
      cursor: not-allowed;

      :hover {
        background-color: ${COLORS.background1};
      }
    `}

  ${({ styles }) => styles}
`

const Content = styled.div`
  flex-grow: 1;
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
`

const ArrowIcon = styled(({ focus, ...props }) => (
  <KittenArrowIcon {...props} />
))`
  position: relative;
  left: 0;
  transition: left 0.2s;

  ${({ disabled }) =>
    disabled &&
    css`
      fill: ${COLORS.line2};
    `}

  ${({ disabled, focus }) =>
    !disabled &&
    focus &&
    css`
      left: ${pxToRem(5)};
    `}
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
      disabled={disabled}
      aria-disabled={disabled}
      withTopBorder={withTopBorder}
      {...others}
    >
      <Content>{children}</Content>

      <Arrow>
        <ArrowIcon
          className="k-Button__icon"
          focus={focus}
          disabled={disabled}
        />
      </Arrow>
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
}
