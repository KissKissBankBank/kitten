import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { LinkList } from 'kitten/components/links/link-list'

describe('<LinkList />', () => {
  const items = [
    { key: 'foo', content: 'Foo', href: '#' },
    { key: 'bar', content: 'Bar', href: '#', active: true },
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
      expect(linkList.children()).to.have.length(2)
    })

    it('has a good class on content', () => {
      const firstContent = linkList.children().first()
      expect(firstContent).to.have.className('k-LinkList__content')
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

  describe('with content', () => {
    const linkList = shallow(<LinkList items={ items } />)

    it('has a first block with good content', () => {
      const firstItem = linkList.find('.k-LinkList__link').at(0)

      expect(firstItem).to.contain.text('Foo')
    })

    it('has second block with active link', () => {
      const secondItem = linkList.find('.k-LinkList__link').at(1)

      expect(secondItem).to.have.className('is-active')
      expect(secondItem).to.contain.text('Bar')
    })
  })
})
