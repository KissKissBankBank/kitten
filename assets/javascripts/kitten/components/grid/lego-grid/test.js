import React from 'react'
import { LegoGrid } from './index'
import Masonry from 'react-masonry-component'
import { NUM_COLUMNS } from '../../../constants/grid-config'

describe('<LegoGrid />', () => {
  describe('by default', () => {
    const legoGrid = shallow(<LegoGrid />)

    it('is a <div />', () => {
      expect(legoGrid.is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(legoGrid.hasClass('k-LegoGrid')).toBe(true)
    })

    it('has a <Masonry /> component', () => {
      expect(legoGrid.find(Masonry).exists()).toBe(true)
    })
  })

  describe('with masonryProps props', () => {
    const masonryProps = {
      options: {
        transitionDuration: 0,
      },
    }

    const legoGrid = shallow(<LegoGrid masonryProps={masonryProps} />)
    const masonry = legoGrid.find(Masonry).first()

    it('sends props to Masonry component', () => {
      expect(masonry.props()).toMatchObject(masonryProps)
    })
  })

  describe('with col size prop', () => {
    const legoGrid = shallow(<LegoGrid items-xxs-up="2" items-l-up="12" />)
    const lCol = NUM_COLUMNS / 12
    const xxsCol = NUM_COLUMNS / 2
    const lClass = `k-LegoGrid--${lCol}col@l`
    const xssClass = `k-LegoGrid--${xxsCol}col@xxs`

    it(`has .${lClass} has class`, () => {
      expect(legoGrid.hasClass(lClass)).toBe(true)
    })

    it(`has .${xssClass} has class`, () => {
      expect(legoGrid.hasClass(xssClass)).toBe(true)
    })
  })

  describe('with a custom class', () => {
    const legoGrid = shallow(<LegoGrid className="custom__class" />)

    it('has a custom class', () => {
      expect(legoGrid.hasClass('custom__class')).toBe(true)
    })
  })
})

describe('<LegoGrid.Item />', () => {
  describe('by default', () => {
    const legoGridItem = shallow(<LegoGrid.Item />)

    it('is a <div />', () => {
      expect(legoGridItem.is('div')).toBe(true)
    })

    it('has default classes', () => {
      expect(legoGridItem.hasClass('k-LegoGrid__item')).toBe(true)
      expect(legoGridItem.find('.k-LegoGrid__item__content').exists()).toBe(
        true,
      )
    })
  })

  describe('with a custom class', () => {
    const legoGridItem = shallow(<LegoGrid.Item className="custom__class" />)

    it('has a custom class', () => {
      expect(legoGridItem.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with children', () => {
    const legoGridItem = shallow(<LegoGrid.Item>Lorem ipsum…</LegoGrid.Item>)

    it('has text', () => {
      expect(legoGridItem.text()).toBe('Lorem ipsum…')
    })
  })
})
