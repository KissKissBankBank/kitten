import React from 'react'
import renderer from 'react-test-renderer'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

describe('<ArrowIcon />', () => {
  describe('default props', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<ArrowIcon />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `right`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<ArrowIcon direction="right" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `bottom`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<ArrowIcon direction="bottom" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `direction` set to `left`', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<ArrowIcon direction="left" />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('when disabled', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<ArrowIcon disabled />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
