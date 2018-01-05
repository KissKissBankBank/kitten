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

    it('is a <ul />', () => {
      expect(linkList).to.have.tagName('ul')
    })

    it('has default class', () => {
      expect(linkList).to.have.className('k-LinkList')
    })

    it('renders 2 items', () => {
      expect(linkList.children()).toHaveLength(2)
    })

    it('has a good class on item', () => {
      const firstItem = linkList.children().first()
      expect(firstItem).to.have.className('k-LinkList__item')
    })
  })

  describe('with className prop', () => {
    const linkList = shallow(
      <LinkList items={ items } className="custom__class" />
    )

    it('has a custom class', () => {
      expect(linkList).to.have.className('custom__class')
    })
  })

  describe('with margin prop', () => {
    const linkList = shallow(<LinkList margin={ false } />)

    it('has a good class', () => {
      expect(linkList).to.have.className('k-LinkList--withoutMargin')
    })
  })

  describe('with item', () => {
    const linkList = shallow(<LinkList items={ items } />)

    it('has a first block with good item', () => {
      const firstItem = linkList.find('.k-LinkList__link').at(0)

      expect(firstItem).to.contain.text('Foo')
    })

    it('has second block with active link', () => {
      const secondItem = linkList.find('.k-LinkList__link').at(1)

      expect(secondItem).to.have.className('is-active')
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

    it('has a good class', () => {
      expect(item).to.have.className('k-LinkList__link--dark')
    })
  })
})
