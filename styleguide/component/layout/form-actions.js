import React from 'react'
import { KarlFormActions } from 'kitten/karl/form/form-actions'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Form actions">
        <KarlFormActions className="karl-u-align-center@xs-down" />
      </Example>
      <Example title="Form actions without spread out at">
        <KarlFormActions
          className="karl-u-align-center@xs-down"
          spreadOutAt={null}
        />
      </Example>
    </div>
  )
}
