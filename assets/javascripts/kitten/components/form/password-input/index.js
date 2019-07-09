import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { TextInput } from '../../../components/form/text-input'
import { PasswordIcon } from '../../../components/icons/password-icon'
import COLORS from '../../../constants/colors-config'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledPasswordInput = styled.div`
  position: relative;
  display: flex;
`

const StyledTextInput = styled(TextInput)`
  padding-right: ${pxToRem(40)};
`

const StyledIcon = styled.span`
  display: flex;
  position: absolute;
  z-index: 1,
  margin-right: ${pxToRem(11)};
  right: 0;
  top: 0;
  bottom: 0;
`
const StyledSvg = styled(PasswordIcon)`
  cursor: pointer;

  :active {
    fill: ${COLORS.primary1};
  }
`

export class PasswordInput extends PureComponent {
  static propTypes = {
    textInputProps: PropTypes.shape({}),
    iconLabel: PropTypes.string.isRequired,
    hiddenIconLabel: PropTypes.string.isRequired,
    name: PropTypes.string,
  }

  static defaultProps = {
    textInputProps: {},
    name: 'password',
  }

  constructor(props) {
    super(props)

    this.state = {
      isHidden: true,
    }
  }

  handleClick = () => {
    this.setState({ isHidden: !this.state.isHidden })
  }

  handleKeyDown = event => {
    const enterKeyCode = 13

    if (event.keyCode == enterKeyCode) {
      this.handleClick()
    }
  }

  render() {
    const { name, textInputProps, iconLabel, hiddenIconLabel } = this.props

    const type = this.state.isHidden ? 'password' : 'text'

    const iconStyle = [
      styles.icon.svg,
      !this.state.isHidden && styles.icon.svg.active,
    ]

    const iconTitle = this.state.isHidden ? iconLabel : hiddenIconLabel

    return (
      <StyledPasswordInput>
        <StyledTextInput {...textInputProps} name={name} type={type} />
        <StyledIcon title={iconTitle}>
          <PasswordIcon
            tabIndex="0"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            title={iconTitle}
          />
        </StyledIcon>
      </StyledPasswordInput>
    )
  }
}
