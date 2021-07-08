import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TextInputWithUnit } from '../../../form/text-input-with-unit'

export const Input = ({ valid, onChange, className, ...props }) => {
  const [isInputEmpty, setEmptyInput] = useState(true)

  return (
    <TextInputWithUnit
      wrapperProps={{
        className: classNames({
          'k-ContributionCard__inputWrapper--isEmpty': isInputEmpty,
        }),
      }}
      variant="orion"
      valid={valid}
      className={classNames('k-ContributionCard__input', className)}
      onChange={event => {
        setEmptyInput(event.target?.value?.length === 0)
        onChange(event)
      }}
      {...props}
    />
  )
}

Input.propTypes = {
  valid: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
}

Input.defaultProps = {
  onChange: () => null,
}
