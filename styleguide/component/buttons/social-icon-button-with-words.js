import React from 'react'
import {
  KarlFacebookButtonIconWords,
  KarlLinkedinButtonIconWords,
  KarlTwitterButtonIconWords,
} from 'kitten/karl/buttons/social-button-icon-words'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12">
        <Example title="Oxygen" className="k-Grid__col--6@m k-Grid__col--12@l">
          <KarlFacebookButtonIconWords />
          <br />
          <KarlTwitterButtonIconWords />
          <br />
          <KarlLinkedinButtonIconWords />
        </Example>
      </div>
    </div>
  )
}
