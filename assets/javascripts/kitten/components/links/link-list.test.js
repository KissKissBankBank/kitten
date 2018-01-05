import React from 'react'
import { shallow, mount } from 'enzyme'
import { LinkList } from 'kitten/components/links/link-list'

describe('<LinkList />', () => {
  const items = [
    { key: 'foo', item: 'Foo', href: '#' },
    { key: 'bar', item: 'Bar', href: '#', active: true },
  ]

  describe('by default', () => {
    const linkList = shallow(<LinkList items={ items } />)

    test('is a <ul />', () => {
      expect(linkList).to.have.tagName('ul')
    })

    test('has default class', () => {
      expect(linkList.hasClass('k-LinkList')).toBe(true)
    })

    test('renders 2 items', () => {
      expect(linkList.children()).toHaveLength(2)
    })

    test('has a good class on item', () => {
      const firstItem = linkList.children().first()
      expect(firstItem.hasClass('k-LinkList__item')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const linkList = shallow(
      <LinkList items={ items } className="custom__class" />
    )

    test('has a custom class', () => {
      expect(linkList.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with margin prop', () => {
    const linkList = shallow(<LinkList margin={ false } />)

    test('has a good class', () => {
      expect(linkList.hasClass('k-LinkList--withoutMargin')).toBe(true)
    })
  })

  describe('with item', () => {
    const linkList = shallow(<LinkList items={ items } />)

    test('has a first block with good item', () => {
      const firstItem = linkList.find('.k-LinkList__link').at(0)

      expect(firstItem).to.contain.text('Foo')
    })

    test('has second block with active link', () => {
      const secondItem = linkList.find('.k-LinkList__link').at(1)

      expect(secondItem.hasClass('is-active')).toBe(true)
      expect(secondItem).to.contain.text('Bar')
    })
  })

  describe('with color item', () => {
    const linkList = shallow(
      <LinkList
        items={ items }
        color="dark"
      />
    )
    const item = linkList.find('.k-LinkList__link').at(0)

    test('has a good class', () => {
      expect(item.hasClass('k-LinkList__link--dark')).toBe(true)
    })
  })
})
