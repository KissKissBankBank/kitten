import React from 'react'
import { Search } from '../../../assets/javascripts/kitten/components/form/search'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12">
        <div className="k-Grid">
          <Example title="Search input">
            <Search
              inputId="q"
              inputName="q"
              inputPlaceholder="Search…"
              inputLabel="Search the site"
              submitLabel="Search"
              actionUrl="#"
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
