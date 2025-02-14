import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { TagButton } from './index'

describe('<TagButton />', () => {
  let component

  describe('with text', () => {
    beforeEach(() => {
      component = renderer.create(<TagButton>MyButton</TagButton>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size="huge"` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TagButton size="huge">MyButton</TagButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `active` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TagButton active>MyButton</TagButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `rounded` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TagButton rounded>MyButton</TagButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
