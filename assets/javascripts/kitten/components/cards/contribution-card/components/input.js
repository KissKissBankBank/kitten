import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TextInputWithUnit } from '../../../form/text-input-with-unit'
import { domElementHelper } from '../../../../helpers/dom/element-helper'

export const Input = ({value, ...props}) => {
  const [isInputEmpty, setEmptyInput] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      if (!domElementHelper.canUseDom()) return
  
      const inputElement = document.getElementById('inputElement')
  
      inputElement.focus()
      if (inputElement.value) {
        const valueLength = inputElement.value.length
        inputElement.setSelectionRange(valueLength, valueLength + 1)
      }
    }, 500)
  }, [])

  return (
    <TextInputWithUnit
      id="inputElement"
      defaultValue={value}
      variant="orion"
      {...props}
      className={classNames(
        'k-ContributionCard__input',
        {'k-ContributionCard__input--isEmpty': isInputEmpty},
        props.className,
      )}
      onChange={(event) => {
        setEmptyInput(!event.target.value)
      }}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
}

Input.defaultProps = {
  value: null,
}
