import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ShadowPanel } from './index'

describe('<ShadowPanel />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<ShadowPanel>Foobar</ShadowPanel>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with custom props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ShadowPanel
            arrowSide="right"
            arrowPositionFromOrigin={800}
            aria-label="ARIA label"
          >
            Foobar
          </ShadowPanel>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
