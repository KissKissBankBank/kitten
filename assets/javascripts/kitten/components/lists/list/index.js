import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ButtonItem } from './components/button-item'
import classNames from 'classnames'

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ withBottomBorderRadius }) =>
    !!withBottomBorderRadius &&
    css`
      & li:last-child .k-List__button {
        border-bottom-left-radius: ${pxToRem(withBottomBorderRadius)};
        border-bottom-right-radius: ${pxToRem(withBottomBorderRadius)};
      }
    `}
  ${({ styles }) => styles}
`

export const List = ({ children, style, withBottomBorderRadius }) => (
  <StyledList
    styles={style}
    className={classNames('k-List', {
      'k-List--withBottomBorderRadius': !!withBottomBorderRadius,
    })}
    withBottomBorderRadius={withBottomBorderRadius}
  >
    {React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null

      return <li>{child}</li>
    })}
  </StyledList>
)

List.ButtonItem = ButtonItem

List.defaultProps = {
  withBottomBorderRadius: 0,
}

List.propTypes = {
  withBottomBorderRadius: PropTypes.number,
}
