import React from 'react'
import { Row } from '../../../components/grid/row'

describe('<Row />', () => {
  describe('by default', () => {
    const row = shallow(<Row />)

    it('is a <div />', () => {
      expect(row.is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(row.hasClass('k-Row')).toBe(true)
      expect(row.find('.k-Row__content').exists()).toBe(true)
    })
  })

  describe('with a custom class', () => {
    const row = shallow(<Row className="custom__class" />)

    it('has a custom class', () => {
      expect(row.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with other props', () => {
    const row = shallow(<Row aria-hidden />)

    it('has aria-hidden attribute', () => {
      expect(row.props()['aria-hidden']).toBeTruthy()
    })
  })

  describe('with children', () => {
    const row = shallow(<Row>Lorem ipsum…</Row>)

    it('has text', () => {
      expect(row.text()).toBe('Lorem ipsum…')
    })
  })

  describe('with centered prop', () => {
    const row = shallow(<Row centered />)

    it('has a specific class', () => {
      expect(row.hasClass('k-Row--centered')).toBe(true)
    })
  })

  describe('with centered prop', () => {
    const row = shallow(<Row centered />)

    it('has a specific class', () => {
      expect(row.hasClass('k-Row--centered')).toBe(true)
    })
  })

  describe('with light prop', () => {
    const row = shallow(<Row light />)

    it('has a specific class', () => {
      expect(row.hasClass('k-Row--light')).toBe(true)
    })
  })

  describe('with dark prop', () => {
    const row = shallow(<Row dark />)

    it('has a specific class', () => {
      expect(row.hasClass('k-Row--dark')).toBe(true)
    })
  })

  describe('with lightTopBorder prop', () => {
    const row = shallow(<Row lightTopBorder />)

    it('has a specific class', () => {
      expect(row.hasClass('k-Row--lightTopBorder')).toBe(true)
    })
  })

  describe('with lightBottomBorder prop', () => {
    const row = shallow(<Row lightBottomBorder />)

    it('has a specific class', () => {
      expect(row.hasClass('k-Row--lightBottomBorder')).toBe(true)
    })
  })

  describe('with padded prop', () => {
    const row = shallow(<Row padded />)

    it('has a specific class', () => {
      expect(row.hasClass('k-Row--padded')).toBe(true)
    })
  })

  describe('with contentClassName prop', () => {
    const row = shallow(<Row contentClassName="content-custom-class" />)

    it('has a custom class on content selector', () => {
      expect(row.find('.content-custom-class').exists()).toBe(true)
    })
  })
})
