import React from 'react'
import renderer from 'react-test-renderer'
import { LargeArrowIconNext } from './index'

describe('<LargeArrowIconNext />', () => {
  describe('default props', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<LargeArrowIconNext />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `right`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LargeArrowIconNext direction="right" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `down`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LargeArrowIconNext direction="down" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `left`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LargeArrowIconNext direction="left" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
