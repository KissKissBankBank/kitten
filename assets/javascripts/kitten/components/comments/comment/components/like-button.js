import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { HeartIcon } from '../../../../components/icons/heart-icon'
import COLORS from '../../../../constants/colors-config'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${pxToRem(40)};
  padding: 0 ${pxToRem(15)};

  border: ${pxToRem(2)} solid ${COLORS.line1};
  background-color: ${COLORS.background1};
  box-sizing: border-box;
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(12)};
  color: ${COLORS.font1};
  text-decoration: none;
  appareance: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  :hover,
  :focus,
  :active {
    svg {
     fill: #ff0000;
  }
`

const StyledHeartIcon = styled(HeartIcon)`
  width: ${pxToRem(14)};
  height: ${pxToRem(12)};
  margin-right: ${pxToRem(10)};
  overflow: hidden;
  transition: all 0.2s;
`

export class LikeButton extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
  }

  render() {
    const { children, ...props } = this.props

    return (
      <StyledButton role="button" {...props}>
        <StyledHeartIcon {...props} />
        {children}
      </StyledButton>
    )
  }
}
