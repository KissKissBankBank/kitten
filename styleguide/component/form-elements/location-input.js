import React from 'react'
import { KarlLocationInput } from '../../../assets/javascripts/kitten/karl/form/location-input'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--8@m k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Location input">
            <KarlLocationInput />
          </Example>
        </div>
      </div>
    </div>
  )
}
