import React from 'react'

import { LinkBox } from 'kitten/components/box/link-box'

describe('<LinkBox />', () => {
  const component = shallow(
    <LinkBox href="http://…/history.pdf"
             title="Your history"
             text="Download your history (pdf - 8Mo)"
             isExternal="true" />
  )

  it('renders a <a class="k-LinkBox" />', () => {
    expect(component.find('a')).toHaveLength(1)
    expect(component.hasClass('k-LinkBox')).toBe(true)
    expect(component.props().href).toBe('http://…/history.pdf')
    expect(component.props().target).toBe('_blank')
  })

  it('renders a title', () => {
    const title = component.find('.k-LinkBox__title')

    expect(title).toHaveLength(1)
    expect(title.props().children).toBe('Your history')
  })

  it('renders text', () => {
    const text = component.find('.k-LinkBox__text')

    expect(text).toHaveLength(1)
    expect(text.props().children).toBe('Download your history (pdf - 8Mo)')
  })

  describe('with icon', () => {
    const componentWithIcon = shallow(
      <LinkBox displayIcon="true">
        <span>My icon</span>
      </LinkBox>
    )

    it('has an icon class', () => {
      expect(componentWithIcon.hasClass('k-LinkBox--withIcon')).toBe(true)
    })

    it('renders an icon', () => {
      const icon = componentWithIcon.find('.k-LinkBox__icon')

      expect(icon).toHaveLength(1)
      expect(icon.text()).toBe('My icon')
    })
  })

  describe('with default props', () => {
    const defaultComponent = shallow(<LinkBox />)

    it('has a default href', () => {
      expect(defaultComponent.props().href).toBe('#')
    })

    it('has no target', () => {
      expect(defaultComponent.props().target).toBe(void(0))
    })

    it('has no icon', () => {
      expect(defaultComponent.find('.k-LinkBox__icon')).toHaveLength(0)
    })
  })

  describe('with linkProps props', () => {
    const linkPropsComponent = shallow(
      <LinkBox linkProps={ { title: "Lorem ipsum" } } />
    )

    it('has a linkProps prop', () => {
      expect(linkPropsComponent.props().title).toBe('Lorem ipsum')
    })
  })

  describe('with classNames props', () => {
    const linkBox = shallow(<LinkBox className="custom_class" />)

    it('has custom class', () => {
      expect(linkBox.hasClass('custom_class')).toBe(true)
    })
  })
})
