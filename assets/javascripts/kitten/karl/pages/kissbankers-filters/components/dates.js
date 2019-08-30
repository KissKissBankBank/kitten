import React from 'react'
import { TagButton } from '../../../../components/buttons/tag-button'
import { StandaloneRangeDatePicker } from '../../../../components/date-picker/standalone-range'
import { Container } from '../../../../components/grid/container'
import Filter from './filter'

const Dates = () => (
  <>
    <TagButton>Dates</TagButton>
    <Filter>
      <StandaloneRangeDatePicker numberOfMonths={2} />
    </Filter>
  </>
)

export default Dates
