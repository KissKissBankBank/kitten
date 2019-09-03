import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'

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
    valid: PropTypes.bool,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    tiny: PropTypes.bool,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    valid: false,
    error: false,
    disabled: false,
    tiny: false,
  }

  render() {
    const { valid, error, disabled, tiny, children, ...others } = this.props

    return (
      <StyledTextInputWithIcon>
        <StyledTextInput
          {...others}
          valid={valid}
          error={error}
          disabled={disabled}
          tiny={tiny}
        />
        <StyledIcon disabled={disabled}>{children}</StyledIcon>
      </StyledTextInputWithIcon>
    )
  }
}
