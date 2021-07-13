import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ButtonItem } from './components/button-item'
import classNames from 'classnames'

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ radiusValue }) =>
    radiusValue > 0 &&
    css`
      & li:last-child .k-List__button {
        border-bottom-left-radius: ${pxToRem(radiusValue)};
        border-bottom-right-radius: ${pxToRem(radiusValue)};
      }
    `}

  ${({ styles }) => styles}
`

export const List = ({
  children,
  style,
  className,
  bottomBorderRadiusValue,
  withBottomBorderRadius,
  ...props
}) => {
  const radiusValue =
    bottomBorderRadiusValue > 0
      ? bottomBorderRadiusValue
      : withBottomBorderRadius

  return (
    <StyledList
      {...props}
      className={classNames('k-List', className)}
      styles={style}
      radiusValue={radiusValue}
    >
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null

        return <li>{child}</li>
      })}
    </StyledList>
  )
}

List.ButtonItem = ButtonItem

List.defaultProps = {
  bottomBorderRadiusValue: 0,
}

List.propTypes = {
  bottomBorderRadiusValue: PropTypes.number,
  withBottomBorderRadius: deprecated(
    PropTypes.number,
    'This prop is deprecated, please use `bottomBorderRadiusValue instead.',
  ),
}
