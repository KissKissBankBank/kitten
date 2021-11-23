import React from 'react'
import { LendoLoadingAnimation } from './index'
import renderer from 'react-test-renderer'

describe('<LendoLoadingAnimation />', () => {
  describe('With default props', () => {
    it('should match with snapshot', () => {
      const tree = renderer.create(<LendoLoadingAnimation />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('With custom props', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(
          <LendoLoadingAnimation color="red" className="customClassName" />,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
