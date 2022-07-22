import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithLimit } from './index'

describe('<TextInputWithLimit />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithLimit id="TextInputWithLimit" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `error` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithLimit id="TextInputWithLimit" error />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithLimit id="TextInputWithLimit" disabled />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithLimit id="TextInputWithLimit" size="small" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
