import React from 'react'
import { CloseButton } from '../../../components/buttons/close-button'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('<CloseButton />', () => {
  let component

  describe('default', () => {
    beforeEach(() => {
      component = renderer.create(<CloseButton />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(<CloseButton size="tiny" aria-label="close" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
