import React, { useState } from 'react'
import { TagButton } from '../../../../components/buttons/tag-button'
import { StandaloneRangeDatePicker } from '../../../../components/date-picker/standalone-range'
import Filter from './filter'

const Dates = () => {
  const [showFilter, setShowFilter] = useState(false)

  const onButtonClick = () => setShowFilter(true)
  const onFilterClose = () => setShowFilter(false)

  return (
    <>
      <TagButton onClick={onButtonClick} aria-expanded={showFilter}>
        Dates
      </TagButton>

      {showFilter && (
        <Filter onFilterClose={onFilterClose}>
          <StandaloneRangeDatePicker
            numberOfMonths={2}
            title="Sélectionnez la période souhaitée"
          />
        </Filter>
      )}
    </>
  )
}

export default Dates
