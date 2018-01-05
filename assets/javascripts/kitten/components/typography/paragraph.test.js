import React from 'react'
import { shallow } from 'enzyme'
import { Paragraph } from 'kitten/components/typography/paragraph'

describe('Paragraph with default props', () => {
  const defaultComponent = shallow(
    <Paragraph />
  )

  it('has a default paragraph attribute', () => {
    expect(defaultComponent.find('.k-Paragraph')).toHaveLength(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('p')
  })

  it('has a default class', () => {
    expect(defaultComponent).to.have.className('k-Paragraph--primary')
  })

  describe('<Paragraph />', () => {
    const component = shallow(
      <Paragraph className='k-Paragraph--custom'>Loren ipsum…</Paragraph>
    )

    it('renders a <p class="k-Paragraph" />', () => {
      expect(component).to.have.tagName('p')
      expect(component).to.have.className('k-Paragraph--custom')
      expect(component).to.have.className('k-Paragraph--primary')
      expect(component).to.have.text('Loren ipsum…')
    })

    describe('modifier', () => {
      it('accepts secondary', () => {
        const component = shallow(
          <Paragraph modifier="secondary" />
        )
        expect(component).to.have.className('k-Paragraph--secondary')
      })
    })
  })

  describe('with margin prop', () => {
    const component = shallow(<Paragraph margin={ false } />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Paragraph--withoutMargin')
    })
  })

  describe('with normalLineHeight prop', () => {
    const component = shallow(<Paragraph normalLineHeight />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Paragraph--normalLineHeight')
    })
  })

  describe('with italic prop', () => {
    const component = shallow(<Paragraph italic />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Paragraph--italic')
    })
  })
})
