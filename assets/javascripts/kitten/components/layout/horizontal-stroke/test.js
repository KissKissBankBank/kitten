import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { HorizontalStroke } from './index'

describe('<HorizontalStroke />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `tiny` size', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke size="tiny" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `big` size', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke size="big" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `huge` size', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalStroke size="huge" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with with and height props', () => {
    beforeEach(() => {
      component = renderer
        .create(<HorizontalStroke customSize={{ width: 100, height: 50 }} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
