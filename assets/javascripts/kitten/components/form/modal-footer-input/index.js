import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextareaAutosize from 'react-textarea-autosize'

import { Button } from '../../../components/molecules/buttons/button'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { mq } from '../../../constants/screen-config'

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .k-ModalFooterInput__input {
    position: relative;
    bottom: ${pxToRem(-1)};
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    padding: ${pxToRem(7)} ${pxToRem(50)} ${pxToRem(6)} ${pxToRem(10)};
    min-height: ${pxToRem(50)};

    border: none;
    border-top: var(--border);

    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(18)};

    appearance: none;
    resize: none;
    transition: border var(--transition);

    @media ${mq.tabletAndDesktop} {
      padding: ${pxToRem(15)};
      padding-right: ${pxToRem(60)};
    }

    :hover {
      border-top: var(--border-hover);
    }
    :active {
      border-top: var(--border-active);
    }
    :focus {
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }
  }
  .k-ModalFooterInput__button {
    position: absolute;
    display: flex;
    right: ${pxToRem(5)};
    bottom: ${pxToRem(5)};
    margin: 0 !important;
  }
`

export const ModalFooterInput = ({
  id,
  defaultValue,
  className,
  placeholder,
  disabled,

  buttonContent,

  onChange,
  onSubmit,

  ...props
}) => {
  const [value, setValue] = useState(defaultValue)
  const [isButtonDisabled, setButtonDisabled] = useState(
    disabled || defaultValue.length < 1,
  )

  const handleChange = e => {
    setValue(e.target.value)
    onChange(e)
  }

  const handleSubmit = e => {
    onSubmit(e)
  }

  useEffect(() => {
    setButtonDisabled(value.length < 1)
  }, [value])

  return (
    <InputWrapper className={classNames('k-ModalFooterInput', className)}>
      <TextareaAutosize
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        minRows={1}
        maxRows={5}
        aria-label={props['aria-label']}
        className="k-ModalFooterInput__input"
      />
      <Button
        type="button"
        modifier="beryllium"
        fit="icon"
        size="tiny"
        disabled={isButtonDisabled}
        className="k-ModalFooterInput__button"
        onClick={handleSubmit}
      >
        {buttonContent}
      </Button>
    </InputWrapper>
  )
}

ModalFooterInput.propTypes = {
  id: PropTypes.string.isRequired,
  'aria-label': PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  buttonContent: PropTypes.node,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

ModalFooterInput.defaultProps = {
  defaultValue: '',
  placeholder: '',
  disabled: false,

  buttonContent: 'Send',

  onChange: () => {},
  onSubmit: () => {},
}
