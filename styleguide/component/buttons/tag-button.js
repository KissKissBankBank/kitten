import React from 'react'
import { KarlPaymentButtons } from '../../../assets/javascripts/kitten/karl/buttons/payment-button'
import { TagButton } from '../../../assets/javascripts/kitten/components/buttons/tag-button'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example title="Tiny" className="k-Grid__col--3@m k-Grid__col--12@l">
          <TagButton tiny />
        </Example>
        <Example title="Normal" className="k-Grid__col--3@m k-Grid__col--12@l">
          <TagButton />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="With large word"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <TagButton>Large word</TagButton>
        </Example>
        <Example title="Big" className="k-Grid__col--3@m k-Grid__col--12@l">
          <TagButton big modifier="carbon">
            Large word
          </TagButton>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="Selected"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <TagButton selected />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12">
        <Example title="Payment buttons">
          <KarlPaymentButtons />
        </Example>
      </div>
    </div>
  )
}
