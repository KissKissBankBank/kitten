import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { VisuallyHidden } from './index'

describe('<VisuallyHidden />', () => {
  let component

  describe('with text', () => {
    beforeEach(() => {
      component = renderer
        .create(<VisuallyHidden>visually hidden content</VisuallyHidden>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
