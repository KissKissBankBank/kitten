import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Title } from 'kitten/components/typography/title'

describe('Title with default props', () => {
  const defaultComponent = shallow(
    <Title />)

  it('has a default title attributes', () => {
    expect(defaultComponent).not.to.have.attr('tag', 'h1')
    expect(defaultComponent.find('.k-Title')).to.have.length(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('h1')
  })

  it('has a default class', () => {
    expect(defaultComponent).to.have.className('k-Title--primary')
  })

  describe('<Title />', () => {
    const component = shallow(
      <Title className="k-Title"
             text="Felis ..." />
    )

    it('renders a <Title class="k-Title" />', () => {
      expect(component).to.have.tagName('h1')
      expect(component).to.have.className('k-Title')
      expect(component).to.have.className('k-Title--primary')
      expect(component).to.have.text('Felis ...')
    })

    describe('name', () => {
      it('accepts secondary', () => {
        const component = shallow(
          <Title name="secondary" />
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
  })
})
