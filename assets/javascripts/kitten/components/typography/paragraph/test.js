import React from 'react'
import { Paragraph } from './index'

describe('Paragraph with default props', () => {
  const defaultComponent = shallow(<Paragraph />)

  it('has a default paragraph attribute', () => {
    expect(defaultComponent.find('.k-Paragraph')).toHaveLength(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent.type()).toBe('p')
  })

  it('has a default class', () => {
    expect(defaultComponent.hasClass('k-Paragraph--primary')).toBe(true)
  })

  describe('<Paragraph />', () => {
    const component = shallow(
      <Paragraph className="k-Paragraph--custom">Loren ipsum…</Paragraph>,
    )

    it('renders a <p class="k-Paragraph" />', () => {
      expect(component.type()).toBe('p')
      expect(component.hasClass('k-Paragraph--custom')).toBe(true)
      expect(component.hasClass('k-Paragraph--primary')).toBe(true)
      expect(component.text()).toBe('Loren ipsum…')
    })

    describe('modifier', () => {
      it('accepts secondary', () => {
        const component = shallow(<Paragraph modifier="secondary" />)
        expect(component.hasClass('k-Paragraph--secondary')).toBe(true)
      })
    })
  })

  describe('with margin prop', () => {
    const component = shallow(<Paragraph margin={false} />)

    it('has a good class', () => {
      expect(component.hasClass('k-Paragraph--withoutMargin')).toBe(true)
    })
  })

  describe('with normalLineHeight prop', () => {
    const component = shallow(<Paragraph normalLineHeight />)

    it('has a good class', () => {
      expect(component.hasClass('k-Paragraph--normalLineHeight')).toBe(true)
    })
  })

  describe('with italic prop', () => {
    const component = shallow(<Paragraph italic />)

    it('has a good class', () => {
      expect(component.hasClass('k-Paragraph--italic')).toBe(true)
    })
  })
})
