import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '../../../form/input/text-input'

export const TextInputWithButton = React.forwardRef(
  ({ buttonValue, modifier, buttonProps, inset, ...others }, ref) => {
    return (
      <TextInput
        ref={ref || null}
        {...others}
        has="button"
        buttonIsInset={inset}
        buttonProps={{
          modifier: modifier,
          children: buttonValue,
          ...buttonProps,
        }}
      />
    )
  },
)

TextInputWithButton.propTypes = {
  inset: PropTypes.bool,
  modifier: PropTypes.string,
  buttonValue: PropTypes.node,
  buttonProps: PropTypes.object,
}

TextInputWithButton.defaultProps = {
  buttonValue: 'Button',
  buttonProps: {
    disabled: false,
  },
  modifier: 'beryllium',
  inset: false,
}
