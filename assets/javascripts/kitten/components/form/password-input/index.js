import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { TextInput } from '../../../components/form/text-input'
import { PasswordIcon } from '../../../components/icons/password-icon'
import COLORS from '../../../constants/colors-config'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledPasswordInput = styled.div`
  position: relative;
  display: flex;
`

const StyledTextInput = styled(TextInput)`
  padding-right: ${pxToRem(40)};
`

const StyledIcon = styled.button`
  display: flex;
  position: absolute;
  z-index: 1;
  padding: 0 ${pxToRem(11)};
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${pxToRem(2)} ${COLORS.background1},
      0 0 0 ${pxToRem(4)} ${COLORS.primary4};
  }

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
          aria-pressed={active}
          tabIndex="0"
          className="k-u-reset-button"
        >
          <PasswordIcon />
        </StyledIcon>
      </StyledPasswordInput>
    )
  }
}
