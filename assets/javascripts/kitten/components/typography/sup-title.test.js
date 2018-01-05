import React from 'react'
import { shallow, mount } from 'enzyme'
import { SupTitle } from 'kitten/components/typography/sup-title'

describe('<SupTitle />', () => {
  describe('by default', () => {
    const component = shallow(
      <SupTitle />
    )

    test('renders a <div class="k-SupTitle" />', () => {
      expect(component.hasClass('k-SupTitle')).to.equal(true)
    })

    test('with default children', () => {
      expect(component).to.have.text('Sup Title')
    })
  })

  describe('className prop', () => {
    const component = mount(
      <SupTitle className='customClass' />
    )

    test('adds the customClass to the component', () => {
      expect(component.hasClass('customClass')).to.equal(true)
    })
  })

  describe('tag prop', () => {
    const component = mount(
      <SupTitle tag='h1' />
    )

    test('changes the tag of the component', () => {
      expect(component).to.have.tagName('h1')
    })
  })

  describe('with children', () => {
    const component = mount(
      <SupTitle>
        Lorem ipsum…
      </SupTitle>
    )

    test('has a content', () => {
      expect(component).to.have.text('Lorem ipsum…')
    })
  })
})
