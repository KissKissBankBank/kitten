import React from 'react'
import { KarlAlert, KarlAlertWithButton } from 'kitten/karl/notifications/alert'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Default">
        <KarlAlert closeButton />
      </Example>
      <Example title="With many text, link and button">
        <KarlAlertWithButton />
      </Example>
      <Example title="Error">
        <KarlAlert error closeButton />
      </Example>
      <Example title="Success">
        <KarlAlert success closeButton closeButtonLabel="Close this alert" />
      </Example>
    </div>
  )
}
