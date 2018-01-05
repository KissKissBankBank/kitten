import React from 'react'
import { shallow, mount } from 'enzyme'
import { Title } from 'kitten/components/typography/title'
import { InformationBox } from 'kitten/components/box/information-box'

describe('<InformationBox />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<InformationBox />)

    test('renders .k-InformationBox', () => {
      expect(defaultComponent.find('.k-InformationBox')).toHaveLength(1)
    })
  })

  describe('title prop', () => {
    const component = shallow(
      <InformationBox title="Lorem ipsum" />
    )
    const title = component.find(Title)

    test('renders a <Title />', () => {
      expect(title).toHaveLength(1)
    })
  })

  describe('children prop', () => {
    const component = mount(
      <InformationBox>Example content</InformationBox>
    )

    test('adds a children element', () => {
      expect(component).to.have.text('Example content')
    })
  })
})
