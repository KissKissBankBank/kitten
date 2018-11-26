import React from 'react'
import { KarlModal, KarlModalExternalTrigger } from '../../../assets/javascripts/kitten/karl/modals/modal'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Modal">
        <KarlModal />
      </Example>
      <Example title="Modal with external trigger">
        <KarlModalExternalTrigger />
      </Example>
    </div>
  )
}
