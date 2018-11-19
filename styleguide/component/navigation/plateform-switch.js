import React from 'react'
import { KarlPlatformSwitch } from 'kitten/karl/organisms/dropdown'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--6@s k-Grid__col--4@l">
        <Example title="User menu dropdown">
          <div
            id="k-PlatformSwitchDropdown"
            className="karl-Dropdown--platformSwitch"
          >
            <KarlPlatformSwitch />
          </div>
        </Example>
      </div>
    </div>
  )
}
