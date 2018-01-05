import React from 'react'

import { Title } from 'kitten/components/typography/title'

describe('Title with default props', () => {
  const defaultComponent = shallow(
    <Title />)

  test('has a default title attribute', () => {
    expect(defaultComponent.find('.k-Title')).toHaveLength(1)
  })

  test('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('h1')
  })

  test('has a default class', () => {
    expect(defaultComponent.hasClass('k-Title--primary')).to.equal(true)
  })

  describe('<Title />', () => {
    const component = shallow(
      <Title className="k-Title--custom">Felis…</Title>
    )

    test('renders a <Title class="k-Title" />', () => {
      expect(component).to.have.tagName('h1')
      expect(component.hasClass('k-Title--custom')).to.equal(true)
      expect(component.hasClass('k-Title--primary')).to.equal(true)
      expect(component).to.have.text('Felis…')
    })

    describe('modifier', () => {
      test('accepts secondary', () => {
        const component = shallow(
          <Title modifier="secondary" />
        )
        expect(component.hasClass('k-Title--secondary')).to.equal(true)
      })
    })

    describe('with custom tag', () => {
      test('renders h2', () => {
        const component = shallow(
          <Title tag="h2" />
        )
        expect(component).to.have.tagName('h2')
      })
    })

    describe('with margin prop', () => {
      const component = shallow(<Title margin={ false } />)

      test('has a good class', () => {
        expect(component.hasClass('k-Title--withoutMargin')).to.equal(true)
      })
    })
  })
})
