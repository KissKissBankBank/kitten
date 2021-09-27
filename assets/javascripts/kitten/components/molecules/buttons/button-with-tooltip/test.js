import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ButtonWithTooltip } from './index'

describe('<ButtonWithTooltip />', () => {
  let component

  describe('basic', () => {
    beforeEach(() => {
      component = renderer
        .create(<ButtonWithTooltip>MyButtonWithTooltip</ButtonWithTooltip>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
