import React from 'react'
import renderer from 'react-test-renderer'
import { BurgerIcon } from './index'

describe('<BurgerIcon />', () => {
  describe('default', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<BurgerIcon width="12" height="10" />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with the prop `isActive` set to `true`', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<BurgerIcon width="12" height="10" isActive />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with no `title` (`iconTitle` to `null`)', () => {
    it('matches the snapshot', () => {
      const component = renderer
        .create(<BurgerIcon width="12" height="10" iconTitle={null} />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
