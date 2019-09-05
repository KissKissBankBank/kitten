import React, { useState } from 'react'
import styled from 'styled-components'
import { TagButton } from '../../../../components/buttons/tag-button'
import Filter from './filter'
import { Field } from '../../../../components/form/field'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledFilters = styled(Field)`
  &:nth-child(1) {
    display: none;
    @media (min-width: ${ScreenConfig.XS.min}px) {
      display: block;
    }
  }
`

const MoreFilters = () => {
  const [showFilter, setShowFilter] = useState(false)

  const onButtonClick = () => setShowFilter(true)
  const onFilterClose = () => setShowFilter(false)

  return (
    <>
      <TagButton onClick={onButtonClick}>Plus de filtres</TagButton>

      {showFilter && (
        <Filter onFilterClose={onFilterClose}>
          <StyledFilters>
            <Field.Checkbox>Contrepartie</Field.Checkbox>
            <Field.Checkbox>Message</Field.Checkbox>
            <Field.Checkbox>Statut</Field.Checkbox>
            <Field.Checkbox>Mode de livraison</Field.Checkbox>
          </StyledFilters>
        </Filter>
      )}
    </>
  )
}

export default MoreFilters
