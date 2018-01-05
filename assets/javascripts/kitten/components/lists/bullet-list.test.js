import React from 'react'
import { shallow } from 'enzyme'
import { BulletList } from 'kitten/components/lists/bullet-list'

describe('<BulletList />', () => {
  const items = [
    { key: 'foo', item: 'Foo' },
    { key: 'bar', item: 'Bar' },
  ]

  describe('by default', () => {
    const bulletList = shallow(<BulletList items={ items } />)

    it('is a <ul />', () => {
      expect(bulletList).to.have.tagName('ul')
    })

    it('has default class', () => {
      expect(bulletList).to.have.className('k-BulletList')
    })

    it('renders 2 items', () => {
      expect(bulletList.children()).toHaveLength(2)
    })

    it('has a good class on item', () => {
      const firstItem = bulletList.children().first()
      expect(firstItem).to.have.className('k-BulletList__item')
    })
  })

  describe('with className prop', () => {
    const bulletList = shallow(
      <BulletList items={ items } className="custom__class" />
    )

    it('has a custom class', () => {
      expect(bulletList).to.have.className('custom__class')
    })
  })

  describe('with large prop', () => {
    const bulletList = shallow(
      <BulletList items={ items } large />
    )

    it('has a good class', () => {
      const item = bulletList.children().first()
      expect(item).to.have.className('k-BulletList__item--large')
    })
  })

  describe('with big prop', () => {
    const bulletList = shallow(
      <BulletList items={ items } big />
    )

    it('has a good class', () => {
      const item = bulletList.children().first()
      expect(item).to.have.className('k-BulletList__item--big')
    })
  })
})
