import React from 'react'

import { LinkBox } from 'kitten/components/box/link-box'

describe('<LinkBox />', () => {
  const component = shallow(
    <LinkBox href="http://…/history.pdf"
             title="Your history"
             text="Download your history (pdf - 8Mo)"
             isExternal="true" />
  )

  test('renders a <a class="k-LinkBox" />', () => {
    expect(component).to.have.tagName('a')
    expect(component.hasClass('k-LinkBox')).toBe(true)
    expect(component).to.have.attr('href', 'http://…/history.pdf')
    expect(component).to.have.attr('target', '_blank')
  })

  test('renders a title', () => {
    const title = component.find('.k-LinkBox__title')

    expect(title).toHaveLength(1)
    expect(title).to.have.text('Your history')
  })

  test('renders text', () => {
    const text = component.find('.k-LinkBox__text')

    expect(text).toHaveLength(1)
    expect(text).to.have.text('Download your history (pdf - 8Mo)')
  })

  describe('with icon', () => {
    const componentWithIcon = shallow(
      <LinkBox displayIcon="true">
        <span>My icon</span>
      </LinkBox>
    )

    test('has an icon class', () => {
      expect(componentWithIcon.hasClass('k-LinkBox--withIcon')).toBe(true)
    })

    test('renders an icon', () => {
      const icon = componentWithIcon.find('.k-LinkBox__icon')

      expect(icon).toHaveLength(1)
      expect(icon).to.have.text('My icon')
    })
  })

  describe('with default props', () => {
    const defaultComponent = shallow(<LinkBox />)

    test('has a default href', () => {
      expect(defaultComponent).attr('href', '#')
    })

    test('has no target', () => {
      expect(defaultComponent).not.to.have.attr('target')
    })

    test('has no icon', () => {
      expect(defaultComponent.find('.k-LinkBox__icon')).toHaveLength(0)
    })
  })

  describe('with linkProps props', () => {
    const linkPropsComponent = shallow(
      <LinkBox linkProps={ { title: "Lorem ipsum" } } />
    )

    test('has a linkProps prop', () => {
      expect(linkPropsComponent).to.have.attr('title', 'Lorem ipsum')
    })
  })

  describe('with classNames props', () => {
    const linkBox = shallow(<LinkBox className="custom_class" />)

    test('has custom class', () => {
      expect(linkBox.hasClass('custom_class')).toBe(true)
    })
  })
})
