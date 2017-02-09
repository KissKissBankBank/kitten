import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { InformationBox } from 'kitten/components/box/information-box'

describe('<InformationBox />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<InformationBox />)

    it('renders .k-InformationBox', () => {
      expect(defaultComponent.find('.k-InformationBox')).to.have.length(1)
    })

    it('has a default title', () => {
      expect(defaultComponent.find('.k-InformationBox__title')).to.have.length(1)
    })

    it('has a default children', () => {
      expect(defaultComponent.find('.k-InformationBox__content')).to.have.length(1)
    })
  })

  describe('<InformationBox />', () => {
    const component = shallow(
      <InformationBox className="k-InformationBox__custom" />)

    it('renders a <InformationBox class="k-InformationBox" />', () => {
      expect(component).to.have.className('k-InformationBox__custom')
    })
  })

  describe('title prop', () => {
    const component = shallow(
      <InformationBox title="Lorem ipsum" />
    )

    it('adds a title element', () => {
      const title = component.find('.k-InformationBox__title')
      expect(title).to.have.length(1)
      expect(title).to.have.text('Lorem ipsum')
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <InformationBox>Example content</InformationBox>
    )

    it('adds a children element', () => {
      const children = component.find('.k-InformationBox__content')
      expect(children).to.have.length(1)
      expect(children).to.have.text('Example content')
    })
  })
})
