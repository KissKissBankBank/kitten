import React from 'react'
import { KarlButtonIconFilter } from 'kitten/karl/buttons/button-filter'
import { FilterIcon } from 'kitten/components/icons/filter-icon'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example title="Filter" className="k-Grid__col--3@m k-Grid__col--12@l">
          <FilterIcon />
        </Example>
        <Example
          title="Filter with animation"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <FilterIcon animated />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="Filter button"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <KarlButtonIconFilter />
        </Example>
        <Example
          title="Filter button disabled"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <KarlButtonIconFilter disabled />
        </Example>
      </div>
    </div>
  )
}
