import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TextInputWithUnit } from '../../../../forms/inputs/text-input-with-unit'
import { Context } from '../context'

export const Input = ({ valid, onChange, className, ...props }) => {
  return (
    <Context.Consumer>
      {({ setEmptyInput }) => (
        <TextInputWithUnit
          wrapperProps={{
            className: 'k-ContributionCard__inputWrapper',
          }}
          valid={valid}
          className={classNames('k-ContributionCard__input', className)}
          onChange={event => {
            setEmptyInput(event.target?.value?.length === 0)
            onChange(event)
          }}
          {...props}
        />
      )}
    </Context.Consumer>
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
