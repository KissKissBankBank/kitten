import React from 'react'
import { TextInputAndSelect } from 'kitten/components/form/text-input-and-select'

export const FormPhoneNumber = props => {
  const { areaOptions,
          areaName,
          areaValue,
          ...textInputAndSelectProps } = props

  return (
    <TextInputAndSelect
      selectOptions={ areaOptions }
      selectName={ areaName }
      selectValue={ areaValue }
      appendSelect={ true }
      type="tel"
      { ...textInputAndSelectProps } />
  )
}

FormPhoneNumber.defaultProps = {
  tiny: false,
  disabled: false,
  areaOptions: [{ value: '+33(fr)', label: '+33(FR)' }],
  areaName: null,
  areaValue: null,
  digits: null, // 2 or 12 for now
}
