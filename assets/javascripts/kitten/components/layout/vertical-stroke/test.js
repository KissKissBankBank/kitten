import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { VerticalStroke } from './'

describe('<VerticalStroke />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with className prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<VerticalStroke className="custom__class" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with size="tiny" prop', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke size="tiny" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with size="default" prop', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke size="default" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with size="big" prop', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke size="big" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with size="huge" prop', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke size="huge" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
