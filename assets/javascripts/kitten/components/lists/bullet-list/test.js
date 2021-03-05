import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { BulletList } from './index'

describe('<BulletList />', () => {
  let component

  describe('default', () => {
    beforeEach(() => {
      component = renderer
      .create(
          <BulletList
            size="regular"
            items={[
              { key: '1', item: 'Dis Manibus', id: '1' },
              { key: '2', item: 'Calpurnia Felicla' },
              { key: '3', item: 'Germulio coniugi' },
            ]}
            aria-hidden="true"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
