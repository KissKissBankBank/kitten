import React from 'react'
import { Container } from 'kitten/components/grid/container'
import { SCREEN_SIZE_M } from 'kitten/constants/screen-config'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Container />', () => {
  describe('by default', () => {
    const container = shallow(<Container />)

    it('is a <div />', () => {
      expect(container.is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(container.hasClass('k-Container')).toBe(true)
    })
  })

  describe('with a custom class', () => {
    const container = shallow(<Container className="custom__class" />)

    it('has a custom class', () => {
      expect(container.hasClass('custom__class')).toBe(true)
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

      it('has class no-padding', () => {
        expect(container.hasClass('k-Container--no-padding')).toBe(true)
      })
    })

    describe("and media don't match", () => {
      window.matchMedia = createMockMediaMatcher(false)
      const container = shallow(
        <Container fullWidthBelowScreenSize={SCREEN_SIZE_M} />
      )

      it('has not class no-padding', () => {
        expect(container.hasClass('k-Container--no-padding')).toBe(false)
      })
    })
  })
})
