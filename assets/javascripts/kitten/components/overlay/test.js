import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Overlay } from './index'

const CustomComponent = () => <a href="#custom-component">Custom component</a>

describe('<Overlay />', () => {
  let component

  describe('simple overlay with zIndex set to 105', () => {
    beforeEach(() => {
      component = renderer.create(<Overlay zIndex={105} />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('overlay with `isActive` prop', () => {
    beforeEach(() => {
      component = renderer.create(<Overlay isActive={true} />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
