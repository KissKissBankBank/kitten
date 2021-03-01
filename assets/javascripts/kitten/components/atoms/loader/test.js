import React from 'react'
import { Loader } from './index'
import renderer from 'react-test-renderer'

describe('<Loader />', () => {
  describe('With default props', () => {
    it('should match with snapshot', () => {
      const tree = renderer.create(<Loader />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('With custom props', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(<Loader color="red" tag="button" className="customClassName" />)
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
