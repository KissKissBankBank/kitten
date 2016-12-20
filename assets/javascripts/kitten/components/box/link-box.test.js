import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import LinkBox from '../../components/box/link-box'

describe('<LinkBox />', () => {
  const component = shallow(
    <LinkBox href="http://…/history.pdf"
             title="Your history"
             text="Download your history (pdf - 8Mo)" />
  )

  it('renders a <a class="k-LinkBox" />', () => {
    expect(component).to.have.tagName('a')
    expect(component).to.have.className('k-LinkBox')
    expect(component).to.have.attr('href', 'http://…/history.pdf')
  })

  it('renders a title', () => {
    const title = component.find('.k-LinkBox__title')

    expect(title).to.have.length(1)
    expect(title).to.have.text('Your history')
  })

  it('renders a text', () => {
    const text = component.find('.k-LinkBox__text')

    expect(text).to.have.length(1)
    expect(text).to.have.text('Download your history (pdf - 8Mo)')
  })

  describe('with icon', () => {
    const component_with_icon = shallow(
      <LinkBox displayIcon="true">
        <span>My icon</span>
      </LinkBox>
    )

    it('has a icon class', () => {
      expect(component_with_icon).to.have.className('k-LinkBox--withIcon')
    })

    it('renders a icon', () => {
      const icon = component_with_icon.find('.k-LinkBox__icon')

      expect(icon).to.have.length(1)
      expect(icon).to.have.text('My icon')
    })
  })

  describe('with default props', () => {
    const default_component = shallow(<LinkBox />)

    it('has default href', () => {
      expect(default_component).attr('href', '#')
    })

    it('has not icon', () => {
      expect(default_component.find('.k-LinkBox__icon')).to.have.length(0)
    })
  })
})
