import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'

const errorColor = css`
  ${({ error }) =>
    error &&
    css`
      color: ${COLORS.error};
    `}
`

const FocusTextInput = styled(TextInput)`
  :focus + div {
    color: ${COLORS.font1};
    ${errorColor};
  }
`

const StyledTextInputWithLimit = styled.div`
  position: relative;
  display: block;
`

const StyledCounter = styled.div`
  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-2)};
  line-height: 1.3;
  position: absolute;
  right: 0;
  top: 0;

  margin-top: ${pxToRem(5)};
  margin-right: ${pxToRem(5)};

  color: ${COLORS.font2};
  text-shadow: ${pxToRem(2)} 0 0 ${COLORS.background1},
    -${pxToRem(2)} 0 0 ${COLORS.background1},
    0 ${pxToRem(2)} 0 ${COLORS.background1},
    0 -${pxToRem(2)} 0 ${COLORS.background1},
    ${pxToRem(1)} ${pxToRem(1)} ${COLORS.background1},
    -${pxToRem(1)} -${pxToRem(1)} 0 ${COLORS.background1},
    ${pxToRem(1)} -${pxToRem(1)} 0 ${COLORS.background1},
    -${pxToRem(1)} ${pxToRem(1)} 0 ${COLORS.background1};
  pointer-events: none;

  ${errorColor};

  ${({ disabled }) =>
    disabled &&
    css`
      text-shadow: none;
    `}
`

export class TextInputWithLimit extends PureComponent {
  static propTypes = {
    tag: PropTypes.string,
    limit: PropTypes.number,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    tiny: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    tag: 'input',
    limit: 80,
    defaultValue: '',
    disabled: false,
    tiny: false,
    onChange: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.defaultValue,
    }
  }

  handleChange = e => {
    const value = e.target.value
    this.setState({ value })
  }

  render() {
    const {
      valid,
      tiny,
      limit,
      tag,
      onChange,
      disabled,
      textInputProps,
    } = this.props

    const length = this.state.value ? this.state.value.length : 0

    const error = length > limit

    return (
      <StyledTextInputWithLimit>
        <FocusTextInput
          {...textInputProps}
          tag={tag}
          value={this.state.value}
          onChange={this.handleChange}
          disabled={disabled}
          error={error}
          tiny={tiny}
        />
        <StyledCounter error={error} disabled={disabled}>
          {limit - length}
        </StyledCounter>
      </StyledTextInputWithLimit>
    )
  }
}
