import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { HeaderMenu } from './index'

const CustomComponent = () => <a href="#custom-component">Custom component</a>

describe('<HeaderMenu />', () => {
  let component

  describe('with three items', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HeaderMenu>
            <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
            <HeaderMenu.Item href="#" modifier="light">
              Item 2
            </HeaderMenu.Item>
            <HeaderMenu.Item href="#" liProps={{ className: 'customLiClass' }}>
              Item 3
            </HeaderMenu.Item>
          </HeaderMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with one selected item', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HeaderMenu>
            <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
            <HeaderMenu.Item href="#" isSelected>
              Item 2
            </HeaderMenu.Item>
            <HeaderMenu.Item href="#">Item 3</HeaderMenu.Item>
          </HeaderMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with one custom item', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HeaderMenu>
            <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
            <HeaderMenu.Item href="#">Item 2</HeaderMenu.Item>
            <HeaderMenu.Item href="#" external>
              <CustomComponent />
            </HeaderMenu.Item>
          </HeaderMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with border to right', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HeaderMenu borderSide="right">
            <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
            <HeaderMenu.Item href="#">Item 2</HeaderMenu.Item>
            <HeaderMenu.Item href="#">Item 3</HeaderMenu.Item>
          </HeaderMenu>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
