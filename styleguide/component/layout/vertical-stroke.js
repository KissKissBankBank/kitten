import React from 'react'
import {
  KarlBigVerticalStroke,
  KarlHugeVerticalStroke,
  KarlTinyVerticalStroke,
  KarlVerticalStroke,
} from '../../../assets/javascripts/kitten/karl/layout/vertical-stroke'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--6">
        <Example title="Default">
          <KarlVerticalStroke />
        </Example>
        <Example title="Tiny">
          <KarlTinyVerticalStroke />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--6">
        <Example title="Big">
          <KarlBigVerticalStroke />
        </Example>
        <Example title="Huge">
          <KarlHugeVerticalStroke />
        </Example>
      </div>
    </div>
  )
}
