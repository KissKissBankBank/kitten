import React from 'react'
import { KarlUserMenuDropdown } from '../../../assets/javascripts/kitten/karl/organisms/dropdown'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example
        title="User menu dropdown"
        col="6@s"
        className="k-Grid__col--4@l"
      >
        <div id="k-UserMenuDropdown" className="karl-Dropdown--platformSwitch">
          <KarlUserMenuDropdown />
        </div>
      </Example>
    </div>
  )
}
