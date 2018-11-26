import React from 'react'
import { Separator } from '../../../assets/javascripts/kitten/components/layout/separator'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Normal">
        <Separator />
      </Example>
      <Example title="Darker">
        <Separator darker />
      </Example>
    </div>
  )
}
