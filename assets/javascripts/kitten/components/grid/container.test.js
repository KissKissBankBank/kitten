import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Container } from 'kitten/components/grid/container'

describe('<Container />', () => {
  describe('by default', () => {
    const container = shallow(<Container />)

    it('is a <div />', () => {
      expect(container).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(container).to.have.className('k-Container')
    })
  })

  describe('with a custom class', () => {
    const container = shallow(<Container className="custom__class" />)

    it('has a custom class', () => {
      expect(container).to.have.className('custom__class')
    })
  })

  describe('with other props', () => {
    const container = shallow(<Container aria-hidden />)

    it('has aria-hidden attribute', () => {
      expect(container).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const container = shallow(<Container>Lorem ipsum…</Container>)

    it('has text', () => {
      expect(container).to.have.text('Lorem ipsum…')
    })
  })
})
