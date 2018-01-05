import React from 'react'
import { shallow } from 'enzyme'
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

    it('is a <ul />', () => {
      expect(tagList.type()).to.eq('ul')
    })

    it('has default class', () => {
      expect(tagList).to.have.className('k-TagList')
    })

    it('renders 2 items', () => {
      expect(tagList.children()).toHaveLength(2)
    })

    it('has a first child with good class', () => {
      const firstItem = tagList.children().first()

      expect(firstItem).to.have.className('k-TagList__item--first')
    })

    it('has a last child with good class', () => {
      const firstItem = tagList.children().last()
      expect(firstItem).to.have.className('k-TagList__item--last')
    })

    it('renders a <TypologyTagIcon /> in first child', () => {
      expect(tagList.children().first()).to.have.descendants(TypologyTagIcon)
    })

    it('renders a <InstrumentTagIcon /> in first child', () => {
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

    it('has a custom class', () => {
      expect(tagList).to.have.className('custom__class')
    })

  })

  describe('with tiny prop', () => {
    const tagList = shallow(
      <TagList items={ [] } tiny />
    )

    it('has a good class', () => {
      expect(tagList).to.have.className('k-TagList--tiny')
    })
  })
})
