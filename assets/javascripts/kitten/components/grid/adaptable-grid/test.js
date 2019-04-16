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
