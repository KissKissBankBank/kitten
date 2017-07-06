import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Row } from 'kitten/components/grid/row'

describe('<Row />', () => {
  describe('by default', () => {
    const row = shallow(<Row />)

    it('is a <div />', () => {
      expect(row).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(row).to.have.className('k-Row')
      expect(row).to.have.descendants('.k-Row__content')
    })
  })

  describe('with a custom class', () => {
    const row = shallow(<Row className="custom__class" />)

    it('has a custom class', () => {
      expect(row).to.have.className('custom__class')
    })
  })

  describe('with other props', () => {
    const row = shallow(<Row aria-hidden />)

    it('has aria-hidden attribute', () => {
      expect(row).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const row = shallow(<Row>Lorem ipsum…</Row>)

    it('has text', () => {
      expect(row).to.have.text('Lorem ipsum…')
    })
  })

  describe('with centered prop', () => {
    const row = shallow(<Row centered />)

    it('has a specific class', () => {
      expect(row).to.have.className('k-Row--centered')
    })
  })

  describe('with centered prop', () => {
    const row = shallow(<Row centered />)

    it('has a specific class', () => {
      expect(row).to.have.className('k-Row--centered')
    })
  })

  describe('with light prop', () => {
    const row = shallow(<Row light />)

    it('has a specific class', () => {
      expect(row).to.have.className('k-Row--light')
    })
  })

  describe('with dark prop', () => {
    const row = shallow(<Row dark />)

    it('has a specific class', () => {
      expect(row).to.have.className('k-Row--dark')
    })
  })

  describe('with lightTopBorder prop', () => {
    const row = shallow(<Row lightTopBorder />)

    it('has a specific class', () => {
      expect(row).to.have.className('k-Row--lightTopBorder')
    })
  })

  describe('with lightBottomBorder prop', () => {
    const row = shallow(<Row lightBottomBorder />)

    it('has a specific class', () => {
      expect(row).to.have.className('k-Row--lightBottomBorder')
    })
  })

  describe('with padded prop', () => {
    const row = shallow(<Row padded />)

    it('has a specific class', () => {
      expect(row).to.have.className('k-Row--padded')
    })
  })

  describe('with contentClassName prop', () => {
    const row = shallow(<Row contentClassName="content-custom-class" />)

    it('has a custom class on content selector', () => {
      expect(row).to.have.descendants('.content-custom-class')
    })
  })
})
