import React from 'react'

import { BulletList } from 'kitten/components/lists/bullet-list'

describe('<BulletList />', () => {
  const items = [
    { key: 'foo', item: 'Foo' },
    { key: 'bar', item: 'Bar' },
  ]

  describe('by default', () => {
    const bulletList = shallow(<BulletList items={ items } />)

    test('is a <ul />', () => {
      expect(bulletList).to.have.tagName('ul')
    })

    test('has default class', () => {
      expect(bulletList.hasClass('k-BulletList')).toBe(true)
    })

    test('renders 2 items', () => {
      expect(bulletList.children()).toHaveLength(2)
    })

    test('has a good class on item', () => {
      const firstItem = bulletList.children().first()
      expect(firstItem.hasClass('k-BulletList__item')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const bulletList = shallow(
      <BulletList items={ items } className="custom__class" />
    )

    test('has a custom class', () => {
      expect(bulletList.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with large prop', () => {
    const bulletList = shallow(
      <BulletList items={ items } large />
    )

    test('has a good class', () => {
      const item = bulletList.children().first()
      expect(item.hasClass('k-BulletList__item--large')).toBe(true)
    })
  })

  describe('with big prop', () => {
    const bulletList = shallow(
      <BulletList items={ items } big />
    )

    test('has a good class', () => {
      const item = bulletList.children().first()
      expect(item.hasClass('k-BulletList__item--big')).toBe(true)
    })
  })
})
