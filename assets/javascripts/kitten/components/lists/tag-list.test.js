import React from 'react'

import { TagList } from 'kitten/components/lists/tag-list'
import { TypologyTagIcon } from 'kitten/components/icons/typology-tag-icon'
import { InstrumentTagIcon } from 'kitten/components/icons/instrument-tag-icon'

describe('<TagList />', () => {
  const items = [
    { key: 'foo', item: 'Foo' },
    { key: 'bar', item: 'Bar' },
  ]

  describe('by default', () => {
    const tagList =
      shallow(<TagList icon={ TypologyTagIcon } items={ items } />)

    const tagListWithInstrument =
      shallow(<TagList icon={ InstrumentTagIcon } items={ items } />)

    test('is a <ul />', () => {
      expect(tagList.type()).to.eq('ul')
    })

    test('has default class', () => {
      expect(tagList.hasClass('k-TagList')).to.equal(true)
    })

    test('renders 2 items', () => {
      expect(tagList.children()).toHaveLength(2)
    })

    test('has a first child with good class', () => {
      const firstItem = tagList.children().first()

      expect(firstItem.hasClass('k-TagList__item--first')).to.equal(true)
    })

    test('has a last child with good class', () => {
      const firstItem = tagList.children().last()
      expect(firstItem.hasClass('k-TagList__item--last')).to.equal(true)
    })

    test('renders a <TypologyTagIcon /> in first child', () => {
      expect(tagList.children().first()).to.have.descendants(TypologyTagIcon)
    })

    test('renders a <InstrumentTagIcon /> in first child', () => {
      const firstItem = tagListWithInstrument.children().first()

      expect(firstItem).to.have.descendants(InstrumentTagIcon)
    })
  })

  describe('with className prop', () => {
    const tagList = shallow(
      <TagList
        icon={ TypologyTagIcon }
        items={ items }
        className="custom__class"
      />
    )

    test('has a custom class', () => {
      expect(tagList.hasClass('custom__class')).to.equal(true)
    })

  })

  describe('with tiny prop', () => {
    const tagList = shallow(
      <TagList items={ [] } tiny />
    )

    test('has a good class', () => {
      expect(tagList.hasClass('k-TagList--tiny')).to.equal(true)
    })
  })
})
