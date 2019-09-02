import React, { useState } from 'react'
import { TagButton } from '../../../../components/buttons/tag-button'
import { StandaloneRangeDatePicker } from '../../../../components/date-picker/standalone-range'
import { Container } from '../../../../components/grid/container'
import Filter from './filter'
import { Field } from '../../../../components/form/field'

const Variations = () => {
  const [showFilter, setShowFilter] = useState(false)

  const onButtonClick = () => setShowFilter(true)
  const onFilterClose = () => setShowFilter(false)

  return (
    <>
      <TagButton onClick={onButtonClick}>Contrepartie</TagButton>

      {showFilter && (
        <Filter onFilterClose={onFilterClose}>
          <Field>
            <Field.Checkbox>Hello</Field.Checkbox>
          </Field>
        </Filter>
      )}
    </>
  )
}

export default Variations
