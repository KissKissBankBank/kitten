import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'

const StyledBulletList = styled.ul`
  margin: ${pxToRem(0)};
  padding: ${pxToRem(0)};
  list-style: none;
  text-align: left;
  ${TYPOGRAPHY.fontStyles.light};
  font-size: ${stepToRem(-1)};
  line-height: 1.5;
`

const StyledItem = styled.li`
  margin: ${pxToRem(5)} ${pxToRem(16)};
  display: block;

  &:before {
    margin-left: -${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    box-sizing: border-box;
    border-radius: 50%;
    width: ${pxToRem(6)};
    height: ${pxToRem(6)};
    display: inline-block;
    vertical-align: middle;

    content: '';
    background-color: ${COLORS.font1};
  }

  ${({ small }) =>
    small &&
    css`
      font-size: ${stepToRem(-2)};
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${stepToRem(0)};
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: ${stepToRem(1)};
      margin: ${pxToRem(10)} 0;
    `}

  ${({ huge }) =>
    huge &&
    css`
      font-size: ${stepToRem(2)};
      margin: ${pxToRem(10)} 0;
    `}

  ${({ link }) =>
    link &&
    css`
      ${TYPOGRAPHY.fontStyles.regular};
      font-size: ${stepToRem(-1)};
      text-decoration: none;

      &:hover {
        color: ${COLORS.primary2};
      }

      &:active {
        color: ${COLORS.primary3};
      }
    `}
`

export class BulletList extends PureComponent {
  static propTypes = {
    small: PropTypes.bool,
    large: PropTypes.bool,
    big: PropTypes.bool,
    huge: PropTypes.bool,
  }

  static defaultProps = {
    small: false,
    large: false,
    big: false,
    huge: false,
  }

  render() {
    const { small, large, big, huge, ...others } = this.props

    return (
      <StyledBulletList>
        <StyledItem small={small} large={large} big={big} huge={huge} />
      </StyledBulletList>
    )
  }
}
