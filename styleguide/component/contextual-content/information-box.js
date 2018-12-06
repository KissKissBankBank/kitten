import React from 'react'
import { KarlInformationBox } from '../../../assets/javascripts/kitten/karl/box/information-box'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Information box" className="k-Grid__col--6@l">
        <KarlInformationBox />
      </Example>
    </div>
  )
}
