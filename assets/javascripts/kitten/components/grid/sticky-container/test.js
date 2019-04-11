import React from 'react'
import renderer from 'react-test-renderer'
import { StickyContainer } from './index'

describe('<StickyContainer />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<StickyContainer />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <StickyContainer
            className="custom__class"
            style={{ color: 'red' }}
            aria-hidden
            isSticky="topOnScrollUp"
            top={66}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('already sticky', () => {
    beforeEach(() => {
      component = renderer
        .create(<StickyContainer isSticky="always" bottom={0} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
