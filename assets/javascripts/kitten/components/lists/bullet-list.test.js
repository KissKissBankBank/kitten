import React from 'react'
import { BulletList } from 'kitten/components/lists/bullet-list'

describe('<BulletList />', () => {
  const items = [{ key: 'foo', item: 'Foo' }, { key: 'bar', item: 'Bar' }]

  describe('by default', () => {
    const bulletList = shallow(<BulletList items={items} />)

    it('is a <ul />', () => {
      expect(bulletList.type()).toBe('ul')
    })

    it('has default class', () => {
      expect(bulletList.hasClass('k-BulletList')).toBe(true)
    })

    it('renders 2 items', () => {
      expect(bulletList.children()).toHaveLength(2)
    })

    it('has a good class on item', () => {
      const firstItem = bulletList.children().first()
      expect(firstItem.hasClass('k-BulletList__item')).toBe(true)
    })
  })

  describe('with className prop', () => {
    const bulletList = shallow(
      <BulletList items={items} className="custom__class" />,
    )

    it('has a custom class', () => {
      expect(bulletList.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with large prop', () => {
    const bulletList = shallow(<BulletList items={items} large />)

    it('has a good class', () => {
      const item = bulletList.children().first()
      expect(item.hasClass('k-BulletList__item--large')).toBe(true)
    })
  })

  describe('with big prop', () => {
    const bulletList = shallow(<BulletList items={items} big />)

    it('has a good class', () => {
      const item = bulletList.children().first()
      expect(item.hasClass('k-BulletList__item--big')).toBe(true)
    })
  })

  describe('with huge prop', () => {
    const bulletList = shallow(<BulletList items={items} huge />)

    it('has a good class', () => {
      const item = bulletList.children().first()
      expect(item.hasClass('k-BulletList__item--huge')).toBe(true)
    })
  })
})
