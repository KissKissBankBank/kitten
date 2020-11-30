import React from 'react'
import { TagList } from '../../../components/lists/tag-list'
import { TypologyTagIcon } from '../../../components/icons/typology-tag-icon'
import { InstrumentTagIcon } from '../../../components/icons/instrument-tag-icon'

describe('<TagList />', () => {
  const items = [
    { key: 'foo', item: 'Foo' },
    { key: 'bar', item: 'Bar' },
  ]

  describe('by default', () => {
    const tagList = shallow(<TagList icon={TypologyTagIcon} items={items} />)

    const tagListWithInstrument = shallow(
      <TagList icon={InstrumentTagIcon} items={items} />,
    )

    it('is a <ul />', () => {
      expect(tagList.type()).toBe('ul')
    })

    it('has default class', () => {
      expect(tagList.hasClass('k-TagList')).toBe(true)
    })

    it('renders 2 items', () => {
      expect(tagList.children()).toHaveLength(2)
    })

    it('has a first child with good class', () => {
      const firstItem = tagList.children().first()

      expect(firstItem.hasClass('k-TagList__item--first')).toBe(true)
    })

    it('has a last child with good class', () => {
      const firstItem = tagList.children().last()
      expect(firstItem.hasClass('k-TagList__item--last')).toBe(true)
    })

    it('renders a <TypologyTagIcon /> in first child', () => {
      expect(tagList.children().first().find(TypologyTagIcon).exists()).toBe(
        true,
      )
    })

    it('renders a <InstrumentTagIcon /> in first child', () => {
      const firstItem = tagListWithInstrument.children().first()

      expect(firstItem.find(InstrumentTagIcon).exists()).toBe(true)
    })
  })

  describe('with className prop', () => {
    const tagList = shallow(
      <TagList
        icon={TypologyTagIcon}
        items={items}
        className="custom__class"
      />,
    )

    it('has a custom class', () => {
      expect(tagList.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with tiny prop', () => {
    const tagList = shallow(<TagList items={[]} tiny />)

    it('has a good class', () => {
      expect(tagList.hasClass('k-TagList--tiny')).toBe(true)
    })
  })
})
