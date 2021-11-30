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
  border-top: var(--border);
  transition: border var(--transition);

  :hover {
    border-top: var(--border-hover);
  }

  .k-ModalFooterInput__input {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    margin: 0;
    padding: ${pxToRem(15)} ${pxToRem(50)} ${pxToRem(15)} ${pxToRem(10)};
    min-height: ${pxToRem(50)};

    border: none;

    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(18)};

    appearance: none;
    resize: none;
    transition: font-size var(--transition);

    @media ${mq.tabletAndDesktop} {
      padding: ${pxToRem(15)};
      padding-right: ${pxToRem(60)};
    }

    :focus {
      font-size: ${pxToRem(16)};
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }

    &::placeholder,
    &:focus::placeholder {
      font-size: ${pxToRem(14)};
      color: var(--color-grey-600);
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

export const ModalFooterInput = React.forwardRef(
  (
    {
      id,
      defaultValue,
      className,
      placeholder,
      disabled,
      buttonContent,
      onChange,
      onSubmit,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue)

    const handleChange = e => {
      setValue(e.target.value.trim())
      onChange(e)
    }

    const handleSubmit = e => {
      onSubmit(e)
    }

    return (
      <InputWrapper className={classNames('k-ModalFooterInput', className)}>
        <TextareaAutosize
          ref={ref || null}
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
          disabled={disabled || value.length < 1}
          className="k-ModalFooterInput__button"
          onClick={handleSubmit}
        >
          {buttonContent}
        </Button>
      </InputWrapper>
    )
  },
)

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
