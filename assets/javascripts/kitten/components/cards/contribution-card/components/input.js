import React, { useState } from 'react'
import classNames from 'classnames'
import { TextInputWithUnit } from '../../../form/text-input-with-unit'

export const Input = ({ valid, ...props }) => {

  const [isInputEmpty, setEmptyInput] = useState(true)

  return (
    <TextInputWithUnit
      wrapperProps={{
        className: classNames(
          { 'k-ContributionCard__inputWrapper--isEmpty': isInputEmpty },
        ),
      }}
      variant="orion"
      valid={valid}
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
