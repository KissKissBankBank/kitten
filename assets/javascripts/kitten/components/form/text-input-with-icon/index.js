import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'

const StyledTextInputWithIcon = styled.div`
  display: flex;
  position: relative;
`

const StyledTextInput = styled(TextInput)`
  padding-left: ${pxToRem(50)};
`

const StyledIcon = styled(({ disabled, ...others }) => <span {...others} />)`
  display: flex;
  position: absolute;
  align-self: center;
  padding: 0 ${pxToRem(18)};
  z-index: 1;
  left: 0;

  ${({ disabled }) =>
    disabled &&
    css`
      & > svg [stroke]:not([stroke='none']) {
        stroke: ${COLORS.font2};
      }
      & > svg [fill]:not([fill='none']) {
        fill: ${COLORS.font2};
      }
    `}
`

export class TextInputWithIcon extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    accessibilityLabel: PropTypes.string,
    icon: PropTypes.node.isRequired,
  }

  static defaultProps = {
    accessibilityLabel: '',
    disabled: false,
  }

  render() {
    const { disabled, icon, accessibilityLabel, ...others } = this.props

    return (
      <StyledTextInputWithIcon>
        <StyledTextInput {...others} disabled={disabled} />

        {accessibilityLabel && (
          <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        )}
        <StyledIcon disabled={disabled}>{icon}</StyledIcon>
      </StyledTextInputWithIcon>
    )
  }
}
