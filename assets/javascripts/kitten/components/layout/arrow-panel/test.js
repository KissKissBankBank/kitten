import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ArrowPanel } from './index'

describe('<ArrowPanel />', () => {
  let component

  describe('with default props', () => {
    beforeEach(() => {
      component = renderer.create(<ArrowPanel>Foobar</ArrowPanel>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with custom props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ArrowPanel
            arrowSide="right"
            arrowPositionFromOrigin={800}
            aria-label="ARIA label"
          >
            Foobar
          </ArrowPanel>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
