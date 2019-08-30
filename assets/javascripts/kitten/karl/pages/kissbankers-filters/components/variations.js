import React from 'react'
import { TagButton } from '../../../../components/buttons/tag-button'
import { StandaloneRangeDatePicker } from '../../../../components/date-picker/standalone-range'
import { Container } from '../../../../components/grid/container'
import Filter from './filter'
import { Field } from '../../../../components/form/field'

const Variations = () => (
  <>
    <TagButton>Variations</TagButton>
    <Filter>
      <Field>
        <Field.Checkbox>Hello</Field.Checkbox>
      </Field>
    </Filter>
  </>
)

export default Variations
