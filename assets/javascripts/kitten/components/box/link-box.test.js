import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import LinkBox from '../../components/box/link-box'

describe('<LinkBox />', () => {
  const component = shallow(
    <LinkBox href="http://…/history.pdf"
             title="Your history"
             text="Download your history (pdf - 8Mo)"
             isExternal="true" />
  )

  it('renders a <a class="k-LinkBox" />', () => {
    expect(component).to.have.tagName('a')
    expect(component).to.have.className('k-LinkBox')
    expect(component).to.have.attr('href', 'http://…/history.pdf')
    expect(component).to.have.attr('target', '_blank')
  })

  it('renders a title', () => {
    const title = component.find('.k-LinkBox__title')

    expect(title).to.have.length(1)
    expect(title).to.have.text('Your history')
  })

  it('renders text', () => {
    const text = component.find('.k-LinkBox__text')

    expect(text).to.have.length(1)
    expect(text).to.have.text('Download your history (pdf - 8Mo)')
  })

  describe('with icon', () => {
    const componentWithIcon = shallow(
      <LinkBox displayIcon="true">
        <span>My icon</span>
      </LinkBox>
    )

    it('has an icon class', () => {
      expect(componentWithIcon).to.have.className('k-LinkBox--withIcon')
    })

    it('renders an icon', () => {
      const icon = componentWithIcon.find('.k-LinkBox__icon')

      expect(icon).to.have.length(1)
      expect(icon).to.have.text('My icon')
    })
  })

  describe('with default props', () => {
    const defaultComponent = shallow(<LinkBox />)

    it('has a default href', () => {
      expect(defaultComponent).attr('href', '#')
    })

    it('has no target', () => {
      expect(defaultComponent).not.to.have.attr('target')
    })

    it('has no icon', () => {
      expect(defaultComponent.find('.k-LinkBox__icon')).to.have.length(0)
    })
  })

  describe('with linkProps props', () => {
    const linkPropsComponent = shallow(<LinkBox linkProps={ { title: "Lorem ipsum" } } />)

    it('has a linkProps prop', () => {
      expect(linkPropsComponent).to.have.attr('title', 'Lorem ipsum')
    })
  })

  describe('with classNames props', () => {
    const linkBox = shallow(<LinkBox className="custom_class" />)

    it('has custom class', () => {
      expect(linkBox).to.have.className('custom_class')
    })
  })
})
