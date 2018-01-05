import React from 'react'
import classNames from 'classnames'

import { LegoGrid } from 'kitten/components/grid/lego-grid'
import Masonry from 'react-masonry-component'

describe('<LegoGrid />', () => {
  describe('by default', () => {
    const legoGrid = shallow(<LegoGrid />)

    test('is a <div />', () => {
      expect(legoGrid).to.have.tagName('div')
    })

    test('has a default class', () => {
      expect(legoGrid.hasClass('k-LegoGrid')).toBe(true)
    })

    test('has a <Masonry /> component', () => {
      expect(legoGrid).to.have.descendants(Masonry)
    })
  })

  describe('with masonryProps props', () => {
    const masonryProps = {
      options: {
        transitionDuration: 0,
      }
    }

    const legoGrid = shallow(<LegoGrid masonryProps={ masonryProps } />)
    const masonry = legoGrid.find(Masonry).first()

    test('sends props to Masonry component', () => {
      expect(masonry).to.have.props(masonryProps)
    })
  })

  describe('with a custom class', () => {
    const legoGrid = shallow(<LegoGrid className="custom__class" />)

    test('has a custom class', () => {
      expect(legoGrid.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<LegoGrid.Item />', () => {
  describe('by default', () => {
    const legoGridItem = shallow(<LegoGrid.Item />)

    test('is a <div />', () => {
      expect(legoGridItem).to.have.tagName('div')
    })

    test('has default classes', () => {
      expect(legoGridItem.hasClass('k-LegoGrid__item')).toBe(true)
      expect(legoGridItem).to.have.descendants('.k-LegoGrid__item__content')
    })
  })

  describe('with a custom class', () => {
    const legoGridItem = shallow(<LegoGrid.Item className="custom__class" />)

    test('has a custom class', () => {
      expect(legoGridItem.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with children', () => {
    const legoGridItem = shallow(<LegoGrid.Item>Lorem ipsum…</LegoGrid.Item>)

    test('has text', () => {
      expect(legoGridItem).to.have.text('Lorem ipsum…')
    })
  })
})
