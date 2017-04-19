import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { HtmlSafe } from 'kitten/components/layout/html-safe'

describe('<HtmlSafe />', () => {
  describe('by default', () => {
    const html = mount(
      <HtmlSafe>
        Foo<br />Bar
      </HtmlSafe>
    )

    it('is a <div />', () => {
      expect(html).to.have.tagName('div')
    })

    it('renders a <br /> element', () => {
      const br = React.createElement('br')

      // TODO
      // expect(html.contains(br)).to.equal(true)
    })
  })

  describe('with injection', () => {
    const html = mount(
      <HtmlSafe>
        <span onClick="alert('FooBar')">FooBar</span>
      </HtmlSafe>
    )

    it('not renders onClick', () => {
      // TODO
    })
  })

  describe('with other prop', () => {
    const html = mount(
      <HtmlSafe className="custom__class">
        FooBar
      </HtmlSafe>
    )

    it('has a custom class', () => {
      expect(html).to.have.className('custom__class')
    })
  })
})
