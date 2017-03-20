import React from 'react'
import classNames from 'classnames'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { LegoGrid } from 'kitten/components/grid/lego-grid'
import Masonry from 'react-masonry-component'

describe('<LegoGrid />', () => {
  describe('by default', () => {
    const legoGrid = shallow(<LegoGrid />)

    it('is a <div />', () => {
      expect(legoGrid).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(legoGrid).to.have.className('k-LegoGrid')
    })

    it('has a <Masonry /> component', () => {
      expect(legoGrid).to.have.descendants(Masonry)
    })
  })

  describe('with Masonry props', () => {
    const masonryProps = {
      options: {
        transitionDuration: 0,
      }
    }

    const legoGrid = shallow(<LegoGrid masonryProps={ masonryProps } />)
    const masonry = legoGrid.find(Masonry).first()

    it('spreads props in Masonry component', () => {
      expect(masonry).to.have.props(masonryProps)
    })
  })

  describe('with a custom class', () => {
    const legoGrid = shallow(<LegoGrid className="custom__class" />)

    it('has a custom class', () => {
      expect(legoGrid).to.have.className('custom__class')
    })
  })
})

describe('<LegoGrid.Item />', () => {
  describe('by default', () => {
    const legoGridItem = shallow(<LegoGrid.Item />)

    it('is a <div />', () => {
      expect(legoGridItem).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(legoGridItem).to.have.className('k-LegoGrid__item')
    })
  })

  describe('with a custom class', () => {
    const legoGridItem = shallow(<LegoGrid.Item className="custom__class" />)

    it('has a custom class', () => {
      expect(legoGridItem).to.have.className('custom__class')
    })
  })

  describe('with children', () => {
    const legoGridItem = shallow(
      <LegoGrid.Item>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit…
      </LegoGrid.Item>
    )

    it('has text', () => {
      expect(legoGridItem).to.have.text(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit…'
      )
    })
  })
})
