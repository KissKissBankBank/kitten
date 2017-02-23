import React from 'react'
import { TextInputAndSelect } from 'kitten/components/form/text-input-and-select'

export const FormPhoneNumber = props => {
  const { areaZoneOptions,
          areaZoneName,
          areaZoneValue,
          ...textInputAndSelectProps } = props

  return (
    <TextInputAndSelect
      selectOptions={ areaZoneOptions}
      selectName={ areaZoneName}
      selectValue={ areaZoneValue}
      appendSelect={ true }
      { ...textInputAndSelectProps } />
  )
}

FormPhoneNumber.defaultProps = {
  tiny: false,
  disabled: false,
  areaZoneOptions: [{ value: '+33(fr)', label: '+33(FR)' }],
  areaZoneName: null,
  areaZoneValue: null,
  digits: null, // 2 or 12 for now
}
