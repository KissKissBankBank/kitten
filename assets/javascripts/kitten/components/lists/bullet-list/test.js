import React from 'react'
import renderer from 'react-test-renderer'
import { BulletList } from './index'

describe('<BulletList />', () => {
  describe('default', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(
          <BulletList
            items={[
              { key: '1', item: 'Dis Manibus', id: '1' },
              { key: '2', item: 'Calpurnia Felicla' },
              { key: '3', item: 'Germulio coniugi' },
            ]}
            aria-hidden="true"
          />,
        )
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with differents size props', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(<BulletList small large big huge />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
