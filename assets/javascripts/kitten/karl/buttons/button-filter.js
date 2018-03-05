import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import { FilterIcon } from 'kitten/components/icons/filter-icon'

export const KarlButtonIconFilter = props => (
  <Button
    icon
    { ...props }
  >
    <FilterIcon className="k-Button__icon" />
    Filtrer les projets
  </Button>
)
