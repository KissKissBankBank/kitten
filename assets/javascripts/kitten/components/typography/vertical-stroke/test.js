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

  describe('with size="small" prop', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke size="small" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with size="medium" prop', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke size="medium" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with size="large" prop', () => {
    beforeEach(() => {
      component = renderer.create(<VerticalStroke size="large" />).toJSON()
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
