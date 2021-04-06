import React from 'react'
import { Badge } from './index'
import { Cart } from '../../icons/cart'
import renderer from 'react-test-renderer'

describe('<Badge />', () => {
  describe('default', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Badge>2</Badge>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('with icon', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<Badge color="red" Icon={Cart} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
