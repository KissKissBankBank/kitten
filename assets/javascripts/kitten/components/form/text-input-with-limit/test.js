import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithLimit } from './index'

describe('<TextInputWithLimit />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithLimit />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `error` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithLimit error />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithLimit disabled />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithLimit size="tiny" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
