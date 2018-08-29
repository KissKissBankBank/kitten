import React from 'react'
import { Title } from 'kitten/components/typography/title'

describe('Title with default props', () => {
  const defaultComponent = shallow(<Title />)

  it('has a default title attribute', () => {
    expect(defaultComponent.find('.k-Title')).toHaveLength(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent.type()).toBe('h1')
  })

  it('has a default class', () => {
    expect(defaultComponent.hasClass('k-Title--primary')).toBe(true)
  })

  describe('<Title />', () => {
    const component = shallow(<Title className="k-Title--custom">Felis…</Title>)

    it('renders a <Title class="k-Title" />', () => {
      expect(component.type()).toBe('h1')
      expect(component.hasClass('k-Title--custom')).toBe(true)
      expect(component.hasClass('k-Title--primary')).toBe(true)
      expect(component.text()).toBe('Felis…')
    })

    describe('modifier', () => {
      it('accepts secondary', () => {
        const component = shallow(<Title modifier="secondary" />)
        expect(component.hasClass('k-Title--secondary')).toBe(true)
      })
    })

    describe('with custom tag', () => {
      it('renders h2', () => {
        const component = shallow(<Title tag="h2" />)
        expect(component.type()).toBe('h2')
      })
    })

    describe('with margin prop', () => {
      const component = shallow(<Title margin={false} />)

      it('has a good class', () => {
        expect(component.hasClass('k-Title--withoutMargin')).toBe(true)
      })
    })

    describe('with italic prop', () => {
      const component = shallow(<Title italic={true} />)

      it('has a good class', () => {
        expect(component.hasClass('k-Title--italic')).toBe(true)
      })
    })
  })
})
