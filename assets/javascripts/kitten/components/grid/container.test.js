import React from 'react'

import { Container } from 'kitten/components/grid/container'
import { SCREEN_SIZE_M } from 'kitten/constants/screen-config'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {}
})

describe('<Container />', () => {
  describe('by default', () => {
    const container = shallow(<Container />)

    test('is a <div />', () => {
      expect(container).to.have.tagName('div')
    })

    test('has a default class', () => {
      expect(container.hasClass('k-Container')).toBe(true)
    })
  })

  describe('with a custom class', () => {
    const container = shallow(<Container className="custom__class" />)

    test('has a custom class', () => {
      expect(container.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other props', () => {
    const container = shallow(<Container aria-hidden />)

    test('has aria-hidden attribute', () => {
      expect(container).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const container = shallow(<Container>Lorem ipsum…</Container>)

    test('has text', () => {
      expect(container).to.have.text('Lorem ipsum…')
    })
  })

  describe('with fullWidthBelowScreenSize props', () => {
    let originalMatchMedia
    beforeEach(() => {
      originalMatchMedia = window.matchMedia
    })

    afterEach(() => {
      window.matchMedia = originalMatchMedia
    })

    describe('and media match', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const container = shallow(
        <Container fullWidthBelowScreenSize={SCREEN_SIZE_M} />
      )

      test('has class no-padding', () => {
        expect(container.hasClass('k-Container--no-padding')).toBe(true)
      })
    })

    describe('and media don\'t match', () => {
      window.matchMedia = createMockMediaMatcher(false)
      const container = shallow(
        <Container fullWidthBelowScreenSize={SCREEN_SIZE_M} />
      )

      test('has not class no-padding', () => {
        expect(container).to.not.have.className('k-Container--no-padding')
      })
    })
  })
})
