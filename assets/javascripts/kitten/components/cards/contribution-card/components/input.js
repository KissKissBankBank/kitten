import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TextInputWithUnit } from '../../../form/text-input-with-unit'

export const Input = props => {
  const [isInputEmpty, setEmptyInput] = useState(true)

  return (
    <TextInputWithUnit
      wrapperProps={{
        className: classNames(
          { 'k-ContributionCard__input--isEmpty': isInputEmpty },
        ),
      }}
      variant="orion"
      {...props}
      className={classNames(
        'k-ContributionCard__input',
        props.className,
      )}
      onChange={(event) => {
        setEmptyInput(event.target?.value?.length === 0)
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
