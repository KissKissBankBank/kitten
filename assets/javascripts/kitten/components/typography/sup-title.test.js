import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { SupTitle } from 'kitten/components/typography/sup-title'

describe('<SupTitle />', () => {
  describe('by default', () => {
    const component = shallow(<SupTitle>…</SupTitle>)

    it('renders a <div class="k-SupTitle" />', () => {
      expect(component).to.have.className('k-SupTitle')
    })
  })

  describe('with children', () => {
    const component = mount(
      <SupTitle>
        Lorem ipsum…
      </SupTitle>
    )

    it('has a content', () => {
      expect(component).to.have.text('Lorem ipsum…')
    })
  })
})
