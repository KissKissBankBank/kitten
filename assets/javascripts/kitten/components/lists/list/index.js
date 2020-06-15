import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ButtonItem } from './components/button-item'
import classNames from 'classnames'

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

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
      className={classNames('k-List', className)}
      styles={{
        ...style,
        borderBottomLeftRadius: pxToRem(radiusValue),
        borderBottomRightRadius: pxToRem(radiusValue),
      }}
      {...props}
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
    'This prop is deprecated, please use `bottomBorderRadiusValue` instead.',
  ),
}
