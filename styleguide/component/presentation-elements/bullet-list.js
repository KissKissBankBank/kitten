import React from 'react'
import { BulletList } from '../../../assets/javascripts/kitten/components/lists/bullet-list'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Default" className="k-Grid__col--3@m">
        <BulletList
          items={[
            { key: '1', item: 'Dis Manibus' },
            { key: '2', item: 'Calpurnia Felicla' },
            { key: '3', item: 'Germulio coniugi' },
          ]}
        />
      </Example>
      <Example title="Large items" className="k-Grid__col--3@m">
        <BulletList
          large
          items={[
            { key: '1', item: 'Dis Manibus' },
            { key: '2', item: 'Calpurnia Felicla' },
            { key: '3', item: 'Germulio coniugi' },
          ]}
        />
      </Example>
      <Example title="Big items" className="k-Grid__col--3@m">
        <BulletList
          big
          items={[
            { key: '1', item: 'Dis Manibus' },
            { key: '2', item: 'Calpurnia Felicla' },
            { key: '3', item: 'Germulio coniugi' },
          ]}
        />
      </Example>
      <Example title="Huge items" className="k-Grid__col--3@m">
        <BulletList
          huge
          items={[
            { key: '1', item: 'Dis Manibus' },
            { key: '2', item: 'Calpurnia Felicla' },
            { key: '3', item: 'Germulio coniugi' },
          ]}
        />
      </Example>
    </div>
  )
}
