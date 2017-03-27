import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TagList } from 'kitten/components/lists/tag-list'
import { TagIcon } from 'kitten/components/icons/tag-icon'

describe('<TagList />', () => {
  const items = [
    { key: 'foo', item: 'Foo' },
    { key: 'bar', item: 'Bar' }, 
  ]

  describe('by default', () => {
    const tagList = shallow(<TagList items={ items } />)

    it('is a <ul />', () => {
      expect(tagList).to.have.tagName('ul')
    })

    it('has default class', () => {
      expect(tagList).to.have.className('k-TagList')
    })

    it('renders 2 items', () => {
      expect(tagList.children()).to.have.length(2)
    })

    it('has a first child with good class', () => {
      const firstItem = tagList.children().first()
      expect(firstItem).to.have.className('k-TagList__item--first')
    })

    it('renders a <TagIcon /> in first child', () => {
      expect(tagList.children().first()).to.have.descendants(TagIcon)
      expect(tagList.children().last()).not.to.have.descendants(TagIcon)
    })
  })

  describe('with className prop', () => {
    const tagList = shallow(
      <TagList items={ items } className="custom__class" />
    )

    it('has a custom class', () => {
      expect(tagList).to.have.className('custom__class')
    })
  })
})
