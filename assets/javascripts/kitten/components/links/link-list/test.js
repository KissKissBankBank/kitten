import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { LinkList } from './index'

describe('<LinkList />', () => {
  let component

  describe('default', () => {
    beforeEach(() => {
      component = renderer
      .create(
        <LinkList
          color="dark"
          itemMargin="double"
          weight="regular"
          margin
          items={[
            { key: '1', item: 'Item 1', href: "#", active: true },
            { key: '2', item: 'Item 2', href: "#" },
            { key: '3', item: 'Item 3', href: "#" },
          ]}
        />
      )
      .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
