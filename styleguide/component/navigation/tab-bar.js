import React from 'react'
import { TabBar } from '../../../assets/javascripts/kitten/components/navigation/tab-bar'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Tab bar">
        <TabBar
          items={[
            { text: 'Lorem\nipsum dolor', href: '#', selected: true },
            { text: 'Lorem\nipsum dolor', href: '#' },
            { text: 'Lorem\nipsum dolor', href: '#' },
          ]}
        />
      </Example>
      <Example title="Tab bar with 4 items">
        <TabBar
          items={[
            { text: 'Lorem\nipsum dolor', href: '#' },
            { text: 'Lorem\nipsum dolor', href: '#' },
            { text: 'Lorem\nipsum dolor', href: '#', selected: true },
            { text: 'Lorem\nipsum dolor', href: '#' },
          ]}
        />
      </Example>
    </div>
  )
}
