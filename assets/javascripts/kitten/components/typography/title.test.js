import React from 'react'
import { shallow } from 'enzyme'
import { Title } from 'kitten/components/typography/title'

describe('Title with default props', () => {
  const defaultComponent = shallow(
    <Title />)

  it('has a default title attribute', () => {
    expect(defaultComponent.find('.k-Title')).toHaveLength(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('h1')
  })

  it('has a default class', () => {
    expect(defaultComponent).to.have.className('k-Title--primary')
  })

  describe('<Title />', () => {
    const component = shallow(
      <Title className="k-Title--custom">Felis…</Title>
    )

    it('renders a <Title class="k-Title" />', () => {
      expect(component).to.have.tagName('h1')
      expect(component).to.have.className('k-Title--custom')
      expect(component).to.have.className('k-Title--primary')
      expect(component).to.have.text('Felis…')
    })

    describe('modifier', () => {
      it('accepts secondary', () => {
        const component = shallow(
          <Title modifier="secondary" />
        )
        expect(component).to.have.className('k-Title--secondary')
      })
    })

    describe('with custom tag', () => {
      it('renders h2', () => {
        const component = shallow(
          <Title tag="h2" />
        )
        expect(component).to.have.tagName('h2')
      })
    })

    describe('with margin prop', () => {
      const component = shallow(<Title margin={ false } />)

      it('has a good class', () => {
        expect(component).to.have.className('k-Title--withoutMargin')
      })
    })
  })
})
