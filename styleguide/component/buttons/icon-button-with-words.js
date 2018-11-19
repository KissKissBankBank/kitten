import React from 'react'
import {
  KarlButtonIconWordsLeft,
  KarlButtonIconWordsRight,
} from 'kitten/karl/buttons/button-with-icon-words'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example title="Tiny" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft size="tiny" />
        </Example>
        <Example
          title="Tiny with icon on the right"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <KarlButtonIconWordsRight size="tiny" />
        </Example>
        <Example title="Normal" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft />
        </Example>
        <Example title="Big" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft size="big" />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="Hydrogen"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <KarlButtonIconWordsLeft />
        </Example>
        <Example title="Helium" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft modifier="helium" />
        </Example>
        <Example title="Lithium" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft modifier="lithium" />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example
          title="Beryllium"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <KarlButtonIconWordsLeft modifier="beryllium" />
        </Example>
        <Example title="Carbon" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft modifier="carbon" />
        </Example>
        <Example title="Azote" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft modifier="azote" />
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--3@l">
        <Example title="Oxygen" className="k-Grid__col--3@m k-Grid__col--12@l">
          <KarlButtonIconWordsLeft modifier="oxygen" />
        </Example>
        <Example
          title="Disabled"
          className="k-Grid__col--3@m k-Grid__col--12@l"
        >
          <KarlButtonIconWordsLeft disabled />
        </Example>
      </div>
    </div>
  )
}
