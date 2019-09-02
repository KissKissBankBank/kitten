import React, { useState } from 'react'
import { TagButton } from '../../../../components/buttons/tag-button'
import { StandaloneRangeDatePicker } from '../../../../components/date-picker/standalone-range'
import { Container } from '../../../../components/grid/container'
import Filter from './filter'

const Dates = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onButtonClick = () => setIsOpen(true)
  const onFilterClose = () => setIsOpen(false)

  return (
    <>
      <TagButton onClick={onButtonClick}>Dates</TagButton>

      {isOpen && (
        <Filter onFilterClose={onFilterClose}>
          <StandaloneRangeDatePicker numberOfMonths={2} />
        </Filter>
      )}
    </>
  )
}

export default Dates
