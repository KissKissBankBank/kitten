import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { InformationBox } from 'kitten/components/box/information-box'

describe('<InformationBox />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<InformationBox />)

    it('renders .k-InformationBox', () => {
      expect(defaultComponent.find('.k-InformationBox')).to.have.length(1)
    })
  })

  describe('title prop', () => {
    const component = shallow(
      <InformationBox title="Lorem ipsum" />
    )
    const title = component.find(Title)

    it('renders a <Title />', () => {
      expect(title).to.have.length(1)
    })
  })

  describe('children prop', () => {
    const component = shallow(
      <InformationBox className="custom_class">
        Example content
      </InformationBox>
    )

    it('adds a children element', () => {
      const children = component.find('.custom_class')
      expect(children).to.have.length(1)
      expect(children).to.have.text('Example content')
      expect(children).to.have.className('custom_class')
    })
  })
})
