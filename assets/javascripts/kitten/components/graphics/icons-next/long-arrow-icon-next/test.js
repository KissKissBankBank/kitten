import React from 'react'
import renderer from 'react-test-renderer'
import { LongArrowIconNext } from './index'

describe('<LongArrowIconNext />', () => {
  describe('default props', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<LongArrowIconNext />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `right`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LongArrowIconNext direction="right" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `down`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LongArrowIconNext direction="down" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `left`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LongArrowIconNext direction="left" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
