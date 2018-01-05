import React from 'react'
import { shallow, mount } from 'enzyme'
import { SideLayout } from 'kitten/components/layout/side-layout'

describe('<SideLayout />', () => {
  describe('by default', () => {
    const component = mount(
      <SideLayout className="myAwesomeClass">
        …
      </SideLayout>
    )

    test('renders a <div class="myAwesomeClass" />', () => {
      expect(component.hasClass('myAwesomeClass')).to.equal(true)
    })
  })

  describe('with sidebar prop', () => {
    const component = mount(
      <SideLayout sidebar='Sidebar content'>
        …
      </SideLayout>
    )

    const sideGridAside = component.find('.k-SideGrid__aside')

    test('has a sidebar content', () => {
      expect(sideGridAside).to.have.text('Sidebar content')
    })
  })

  describe('with children', () => {
    const component = mount(
      <SideLayout>
        Lorem ipsum…
      </SideLayout>
    )

    test('has a content', () => {
      expect(component).to.have.text('Lorem ipsum…')
    })
  })
})
