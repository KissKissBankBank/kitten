import React from 'react'
import renderer from 'react-test-renderer'
import { ResponsiveIframeContainer } from './index'

describe('<ResponsiveIframeContainer />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<ResponsiveIframeContainer />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with custom props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ResponsiveIframeContainer ratio={(9 / 16) * 100}>
            <img />
          </ResponsiveIframeContainer>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
