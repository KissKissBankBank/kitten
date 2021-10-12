import React from 'react'
import { KissKissLoadingAnimation } from './index'
import renderer from 'react-test-renderer'

describe('<KissKissLoadingAnimation />', () => {
  describe('With default props', () => {
    it('should match with snapshot', () => {
      const tree = renderer.create(<KissKissLoadingAnimation />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('With custom props', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(<KissKissLoadingAnimation color="red" className="customClassName" />)
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
