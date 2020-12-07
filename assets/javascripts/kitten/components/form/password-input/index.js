import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from '../../../components/form/text-input'
import { PasswordIcon } from '../../../components/icons/password-icon'
import COLORS from '../../../constants/colors-config'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const StyledPasswordInput = styled.div`
  position: relative;
  display: flex;

  .k-Form-PasswordInput__input {
    padding-right: ${pxToRem(40)};
  }

  .k-Form-PasswordInput__icon {
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
  }
`

export const PasswordInput = ({
  name,
  iconLabel,
  hiddenIconLabel,
  ...others
}) => {

  const [isHidden, setIsHidden ] = useState(true)
  const type = isHidden ? 'password' : 'text'
  const active = !isHidden
  const iconTitle = isHidden ? iconLabel : hiddenIconLabel

  const handleClick = () => {
    setIsHidden(!isHidden)
  }

  const handleKeyDown = () => {
    const enterKeyCode = 13

    if (event.keyCode == enterKeyCode) { handleClick }
  } 

  return (
    <StyledPasswordInput className="k-Form-PasswordInput">
      <TextInput
        {...others}
        name={name}
        type={type}
        className={classNames('k-Form-PasswordInput__input')}
      />
      <span
        title={iconTitle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-pressed={active}
        tabIndex="0"
        className={classNames('k-Form-PasswordInput__icon')}
      >
        <PasswordIcon />
      </span>
    </StyledPasswordInput>
  )
}

PasswordInput.propTypes = {
  iconLabel: PropTypes.string.isRequired,
  hiddenIconLabel: PropTypes.string.isRequired,
  name: PropTypes.string,
}

PasswordInput.defaultProps = {
  name: 'password',
}
