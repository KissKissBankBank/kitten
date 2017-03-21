import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { SideLayout } from 'kitten/components/layout/side-layout'

describe('<SideLayout />', () => {
  describe('by default', () => {
    const component = mount(
      <SideLayout className="myAwesomeClass">
      </SideLayout>
    )

    it('renders a <div class="myAwesomeClass" />', () => {
      expect(component).to.have.className('myAwesomeClass')
    })
  })

  describe('with sidebar prop', () => {
    const component = mount(
      <SideLayout sidebar='Sidebar content'></SideLayout>
    )

    it('has a sidebar content', () => {
      expect(component).to.have.props({ sidebar: 'Sidebar content' })
    })
  })

  describe('with children', () => {
    const component = mount(
      <SideLayout>
        Lorem ipsum…
      </SideLayout>
    )

    it('has a content', () => {
      expect(component).to.have.text('Lorem ipsum…')
    })
  })
})
