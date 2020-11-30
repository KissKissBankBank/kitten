import React from 'react'
import renderer from 'react-test-renderer'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

describe('<ArrowIcon />', () => {
  describe('by default (deprecated)', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(<ArrowIcon />).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the version prop', () => {
    describe('by default', () => {
      it('matches the snapshot', () => {
        const component = renderer
          .create(<ArrowIcon version="solid" />)
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })

    describe('with the prop `direction` set to `right`', () => {
      it('matches the snapshot', () => {
        const component = renderer
          .create(<ArrowIcon direction="right" version="solid" />)
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })

    describe('with the prop `direction` set to `bottom`', () => {
      it('matches the snapshot', () => {
        const component = renderer
          .create(<ArrowIcon direction="bottom" version="solid" />)
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })

    describe('with the prop `direction` set to `left`', () => {
      it('matches the snapshot', () => {
        const component = renderer
          .create(<ArrowIcon direction="left" version="solid" />)
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })

    describe('when disabled', () => {
      it('matches the snapshot', () => {
        const component = renderer
          .create(<ArrowIcon version="solid" disabled />)
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })
  })
})
