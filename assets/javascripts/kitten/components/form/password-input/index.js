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
  z-index: 1;
  padding: 0 ${pxToRem(11)};
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;

  &[aria-pressed='true'] {
    svg {
      fill: ${COLORS.primary1};
      transition: all 0.2s;
    }
  }
`

export class PasswordInput extends PureComponent {
  static propTypes = {
    iconLabel: PropTypes.string.isRequired,
    hiddenIconLabel: PropTypes.string.isRequired,
    name: PropTypes.string,
  }

  static defaultProps = {
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
    const { name, iconLabel, hiddenIconLabel, ...others } = this.props

    const type = this.state.isHidden ? 'password' : 'text'

    const active = !this.state.isHidden

    const iconTitle = this.state.isHidden ? iconLabel : hiddenIconLabel

    return (
      <StyledPasswordInput>
        <StyledTextInput {...others} name={name} type={type} />
        <StyledIcon
          title={iconTitle}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          aria-pressed={active}
          tabIndex="0"
        >
          <PasswordIcon />
        </StyledIcon>
      </StyledPasswordInput>
    )
  }
}
