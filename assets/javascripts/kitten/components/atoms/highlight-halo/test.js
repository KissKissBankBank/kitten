import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { HighlightHalo } from './index'

describe('<HighlightHalo />', () => {
  let component

  describe('simple HighlightHalo ', () => {
    beforeEach(() => {
      component = renderer.create(<HighlightHalo />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('HighlightHalo with multiple props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HighlightHalo
            haloColor="#444"
            haloSize={300}
            animationCycles={5}
            animationCycleDuration={4}
            animationDelay={1}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
