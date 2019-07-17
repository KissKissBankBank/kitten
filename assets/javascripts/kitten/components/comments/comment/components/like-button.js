import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { HeartIcon } from '../../../../components/icons/heart-icon'
import COLORS from '../../../../constants/colors-config'
import { VisuallyHidden } from '../../../accessibility/visually-hidden'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${pxToRem(40)};
  padding: 0 ${pxToRem(15)};
  border: ${pxToRem(2)} solid ${COLORS.line1};
  background-color: ${COLORS.background1};
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(12)};
  color: ${COLORS.font1};
  text-decoration: none;

  appareance: none;
  box-sizing: border-box;
  outline: none;

  &[aria-pressed='true'] {
    svg {
      fill: ${COLORS.error};
    }
  }

  ${({ as, onClick }) =>
    (as === 'a' || onClick) &&
    css`
      cursor: pointer;

      :hover {
        svg {
          fill: ${COLORS.error};
        }
      }

      :focus,
      :active {
        border-color: ${COLORS.line2};
      }
    `}
`

const StyledHeartIcon = styled(HeartIcon)`
  width: ${pxToRem(14)};
  height: ${pxToRem(12)};
  margin-right: ${pxToRem(10)};
  overflow: hidden;
  transition: fill 0.2s;
`

export class LikeButton extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    accessibilityLabel: PropTypes.string,
    hasLiked: PropTypes.bool,
  }

  static defaultProps = {
    accessibilityLabel: '',
    hasLiked: false,
  }

  render() {
    const { children, accessibilityLabel, hasLiked, ...props } = this.props

    return (
      <StyledButton role="button" aria-pressed={`${hasLiked}`} {...props}>
        {accessibilityLabel && (
          <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        )}
        <StyledHeartIcon aria-hidden="true" focusable="false" />
        {children}
      </StyledButton>
    )
  }
}
