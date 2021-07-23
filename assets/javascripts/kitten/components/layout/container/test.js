import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Container } from './index'

describe('<Container />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer.create(<Container />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('by default', () => {
    const container = mount(<Container />)

    it('is a <div />', () => {
      expect(container.find('div').length).toBe(1)
    })
  })

  describe('with other props', () => {
    const container = shallow(<Container aria-hidden />)

    it('has aria-hidden attribute', () => {
      expect(container.props()['aria-hidden']).toBeTruthy()
    })
  })

  describe('with children', () => {
    const container = shallow(<Container>Lorem ipsum…</Container>)

    it('has text', () => {
      expect(container.text()).toBe('Lorem ipsum…')
    })
  })

  describe('with fullWidthBelowScreenSize props', () => {
    it('has padding CSS rule', () => {
      const tree = renderer
        .create(<Container fullWidthBelowScreenSize="M" />)
        .toJSON()

      expect(tree).toHaveStyleRule('padding-right', '1.25rem')
      expect(tree).toHaveStyleRule('padding-right', '2.5rem', {
        media: '(min-width:640px)',
      })
      expect(tree).toHaveStyleRule('padding-right', '0', {
        media: '(max-width:1079px)',
      })

      expect(tree).toHaveStyleRule('padding-left', '1.25rem')
      expect(tree).toHaveStyleRule('padding-left', '2.5rem', {
        media: '(min-width:640px)',
      })
      expect(tree).toHaveStyleRule('padding-left', '0', {
        media: '(max-width:1079px)',
      })
    })
  })
})
