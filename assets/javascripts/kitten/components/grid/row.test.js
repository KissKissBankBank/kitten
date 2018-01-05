import React from 'react'

import { Row } from 'kitten/components/grid/row'

describe('<Row />', () => {
  describe('by default', () => {
    const row = shallow(<Row />)

    test('is a <div />', () => {
      expect(row).to.have.tagName('div')
    })

    test('has a default class', () => {
      expect(row.hasClass('k-Row')).to.equal(true)
      expect(row).to.have.descendants('.k-Row__content')
    })
  })

  describe('with a custom class', () => {
    const row = shallow(<Row className="custom__class" />)

    test('has a custom class', () => {
      expect(row.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with other props', () => {
    const row = shallow(<Row aria-hidden />)

    test('has aria-hidden attribute', () => {
      expect(row).to.have.attr('aria-hidden', 'true')
    })
  })

  describe('with children', () => {
    const row = shallow(<Row>Lorem ipsum…</Row>)

    test('has text', () => {
      expect(row).to.have.text('Lorem ipsum…')
    })
  })

  describe('with centered prop', () => {
    const row = shallow(<Row centered />)

    test('has a specific class', () => {
      expect(row.hasClass('k-Row--centered')).to.equal(true)
    })
  })

  describe('with centered prop', () => {
    const row = shallow(<Row centered />)

    test('has a specific class', () => {
      expect(row.hasClass('k-Row--centered')).to.equal(true)
    })
  })

  describe('with light prop', () => {
    const row = shallow(<Row light />)

    test('has a specific class', () => {
      expect(row.hasClass('k-Row--light')).to.equal(true)
    })
  })

  describe('with dark prop', () => {
    const row = shallow(<Row dark />)

    test('has a specific class', () => {
      expect(row.hasClass('k-Row--dark')).to.equal(true)
    })
  })

  describe('with lightTopBorder prop', () => {
    const row = shallow(<Row lightTopBorder />)

    test('has a specific class', () => {
      expect(row.hasClass('k-Row--lightTopBorder')).to.equal(true)
    })
  })

  describe('with lightBottomBorder prop', () => {
    const row = shallow(<Row lightBottomBorder />)

    test('has a specific class', () => {
      expect(row.hasClass('k-Row--lightBottomBorder')).to.equal(true)
    })
  })

  describe('with padded prop', () => {
    const row = shallow(<Row padded />)

    test('has a specific class', () => {
      expect(row.hasClass('k-Row--padded')).to.equal(true)
    })
  })

  describe('with contentClassName prop', () => {
    const row = shallow(<Row contentClassName="content-custom-class" />)

    test('has a custom class on content selector', () => {
      expect(row).to.have.descendants('.content-custom-class')
    })
  })
})
