import React from 'react'
import { Title } from '../../../components/typography/title'
import { InformationBox } from '../../../components/box/information-box'

describe('<InformationBox />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<InformationBox />)

    it('renders .k-InformationBox', () => {
      expect(defaultComponent.find('.k-InformationBox')).toHaveLength(1)
    })
  })

  describe('title prop', () => {
    const component = shallow(<InformationBox title="Lorem ipsum" />)

    it('renders a <Title />', () => {
      expect(component.find(Title)).toHaveLength(1)
    })
  })

  describe('children prop', () => {
    const component = mount(<InformationBox>Example content</InformationBox>)

    it('adds a children element', () => {
      expect(component.text()).toBe('Example content')
    })
  })
})
