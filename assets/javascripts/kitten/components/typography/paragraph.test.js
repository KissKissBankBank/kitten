import React from 'react'

import { Paragraph } from 'kitten/components/typography/paragraph'

describe('Paragraph with default props', () => {
  const defaultComponent = shallow(
    <Paragraph />
  )

  test('has a default paragraph attribute', () => {
    expect(defaultComponent.find('.k-Paragraph')).toHaveLength(1)
  })

  test('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('p')
  })

  test('has a default class', () => {
    expect(defaultComponent.hasClass('k-Paragraph--primary')).to.equal(true)
  })

  describe('<Paragraph />', () => {
    const component = shallow(
      <Paragraph className='k-Paragraph--custom'>Loren ipsum…</Paragraph>
    )

    test('renders a <p class="k-Paragraph" />', () => {
      expect(component).to.have.tagName('p')
      expect(component.hasClass('k-Paragraph--custom')).to.equal(true)
      expect(component.hasClass('k-Paragraph--primary')).to.equal(true)
      expect(component).to.have.text('Loren ipsum…')
    })

    describe('modifier', () => {
      test('accepts secondary', () => {
        const component = shallow(
          <Paragraph modifier="secondary" />
        )
        expect(component.hasClass('k-Paragraph--secondary')).to.equal(true)
      })
    })
  })

  describe('with margin prop', () => {
    const component = shallow(<Paragraph margin={ false } />)

    test('has a good class', () => {
      expect(component.hasClass('k-Paragraph--withoutMargin')).to.equal(true)
    })
  })

  describe('with normalLineHeight prop', () => {
    const component = shallow(<Paragraph normalLineHeight />)

    test('has a good class', () => {
      expect(component.hasClass('k-Paragraph--normalLineHeight')).to.equal(true)
    })
  })

  describe('with italic prop', () => {
    const component = shallow(<Paragraph italic />)

    test('has a good class', () => {
      expect(component.hasClass('k-Paragraph--italic')).to.equal(true)
    })
  })
})
