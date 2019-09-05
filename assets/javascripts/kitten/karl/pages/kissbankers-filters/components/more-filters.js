import React, { useState } from 'react'
import styled from 'styled-components'
import { TagButton } from '../../../../components/buttons/tag-button'
import Filter from './filter'
import { Field } from '../../../../components/form/field'
import { ScreenConfig } from '../../../../constants/screen-config'

const MoreFilters = () => {
  const [showFilter, setShowFilter] = useState(false)

  const onButtonClick = () => setShowFilter(true)
  const onFilterClose = () => setShowFilter(false)

  return (
    <>
      <TagButton onClick={onButtonClick} aria-expanded={showFilter}>
        Plus de filtres
      </TagButton>

      {showFilter && (
        <Filter onFilterClose={onFilterClose}>
          <Field>
            <Field.Checkbox>Contrepartie</Field.Checkbox>
            <Field.Checkbox>Statut</Field.Checkbox>
            <Field.Checkbox>Mode de livraison</Field.Checkbox>
          </Field>
        </Filter>
      )}
    </>
  )
}

export default MoreFilters
