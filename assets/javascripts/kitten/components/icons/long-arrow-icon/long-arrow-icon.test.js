import React from 'react'
import renderer from 'react-test-renderer'
import { LongArrowIcon } from '../../../components/icons/long-arrow-icon'

describe('<LongArrowIcon />', () => {
  describe('default props', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<LongArrowIcon />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `right`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LongArrowIcon direction="right" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `bottom`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LongArrowIcon direction="bottom" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `left`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<LongArrowIcon direction="left" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('when disabled', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<LongArrowIcon disabled />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
