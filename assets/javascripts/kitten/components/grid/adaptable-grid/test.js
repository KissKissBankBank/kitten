import React from 'react'
import renderer from 'react-test-renderer'
import { AdaptableGrid, AdaptableGridCol } from './index'

describe('<AdaptableGrid />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <AdaptableGrid>
            <AdaptableGridCol col={4}>Test</AdaptableGridCol>
            <AdaptableGridCol col={8}>Test</AdaptableGridCol>
          </AdaptableGrid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with custom HTML tags', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <AdaptableGrid as="dl">
            <AdaptableGridCol as="dd" col={4}>
              Test
            </AdaptableGridCol>
            <AdaptableGridCol as="dt" col={8}>
              Test
            </AdaptableGridCol>
          </AdaptableGrid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with className', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <AdaptableGrid className="my_classname">
            <AdaptableGridCol className="my_second_classname">
              Test
            </AdaptableGridCol>
            <AdaptableGridCol className="my_third_classname">
              Test
            </AdaptableGridCol>
          </AdaptableGrid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <AdaptableGrid colNumber={10} colAlign="center">
            <AdaptableGridCol
              col={4}
              offset={3}
              col-s={5}
              offset-s={0}
              col-l={2}
            >
              Test
            </AdaptableGridCol>
            <AdaptableGridCol col-s={3} offset-s={2} col-l={6} offset-l={1}>
              Test
            </AdaptableGridCol>
          </AdaptableGrid>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
