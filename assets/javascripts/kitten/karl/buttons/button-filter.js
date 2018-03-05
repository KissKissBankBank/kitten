import React from 'react'
import { Button } from 'kitten/components/buttons/button'
import { FilterIcon } from 'kitten/components/icons/filter-icon'

export const KarlButtonIconFilter = props => (

  <Button
    icon
  >
    <span className="k-Button__icon">
      <FilterIcon isAnimate style={ styles } />
    </span>
    Filtrer les projets
  </Button>
)

const styles = {
  display: 'block',
  width: '100%',
  height: 'auto',
}
