import React from 'react'
import { LinkList } from '../../../components/links/link-list'

describe('<LinkList />', () => {
  const items = [
    { key: 'foo', item: 'Foo', href: '#' },
    { key: 'bar', item: 'Bar', href: '#', active: true },
    { key: 'ipsum', item: 'Ipsum', href: '#', weight: 'light' },
  ]

  describe('by default', () => {
    const linkList = shallow(<LinkList items={items} />)

    it('is a <ul />', () => {
      expect(linkList.type()).toBe('ul')
    })

    it('has default class', () => {
      expect(linkList.hasClass('k-LinkList')).toBe(true)
    })

    it('renders 3 items', () => {
      expect(linkList.children()).toHaveLength(3)
    })

    it('has a good class on item', () => {
      const firstItem = linkList.children().first()
      expect(firstItem.hasClass('k-LinkList__item')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const linkList = shallow(
      <LinkList items={items} className="custom__class" />,
    )

    it('has a custom class', () => {
      expect(linkList.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with itemMargin', () => {
    const linkList = shallow(<LinkList items={items} itemMargin="double" />)
    const item = linkList.find('.k-LinkList__item').at(0)

    it('has a good class', () => {
      expect(item.hasClass('k-LinkList__item--doubleMargin')).toBe(true)
    })
  })

  describe('with margin prop', () => {
    const linkList = shallow(<LinkList margin={false} />)

    it('has a good class', () => {
      expect(linkList.hasClass('k-LinkList--withoutMargin')).toBe(true)
    })
  })

  describe('with item', () => {
    const linkList = shallow(<LinkList items={items} />)

    it('has a first block with good item', () => {
      const firstItem = linkList.find('.k-LinkList__link').at(0)

      expect(firstItem.text()).toBe('Foo')
    })

    it('has second block with active link', () => {
      const secondItem = linkList.find('.k-LinkList__link').at(1)

      expect(secondItem.hasClass('is-active')).toBe(true)
      expect(secondItem.text()).toBe('Bar')
    })

    it('has third block with weight light', () => {
      const thirdItem = linkList.find('.k-LinkList__link').at(2)

      expect(thirdItem.hasClass('k-LinkList__item--lightWeight')).toBe(true)
      expect(thirdItem.text()).toBe('Ipsum')
    })
  })

  describe('with color item', () => {
    const linkList = shallow(<LinkList items={items} color="light" />)
    const item = linkList.find('.k-LinkList__link').at(0)

    it('has a good class', () => {
      expect(item.hasClass('k-LinkList__link--light')).toBe(true)
    })
  })

  describe('with weight item', () => {
    const linkList = shallow(<LinkList items={items} weight="light" />)
    const item = linkList.find('.k-LinkList__link').at(0)

    it('has a good class', () => {
      expect(item.hasClass('k-LinkList__link--lightWeight')).toBe(true)
    })
  })

  describe('with lineHeight', () => {
    const linkList = shallow(<LinkList items={items} lineHeight="normal" />)
    const item = linkList.find('.k-LinkList__link').at(0)

    it('has a good class', () => {
      expect(item.hasClass('k-LinkList__link--normalLineHeight')).toBe(true)
    })
  })
})
