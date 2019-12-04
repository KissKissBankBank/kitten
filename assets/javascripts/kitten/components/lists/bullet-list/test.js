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

  describe('with small props', () => {
    it('matches with snapshot', () => {
      const component = renderer.create(<BulletList small />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with large props', () => {
    it('matches with snapshot', () => {
      const component = renderer.create(<BulletList large />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with big props', () => {
    it('matches with snapshot', () => {
      const component = renderer.create(<BulletList big />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with huge props', () => {
    it('matches with snapshot', () => {
      const component = renderer.create(<BulletList huge />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
