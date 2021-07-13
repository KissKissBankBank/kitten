import React from 'react'
import renderer from 'react-test-renderer'
import { HorizontalTimeline } from './index'

describe('<HorizontalTimeline />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<HorizontalTimeline />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with HorizontalTimeline.Block and ellipsisColumns prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HorizontalTimeline ellipsisColumns={[1]}>
            <HorizontalTimeline.Block year="2008">
              Content 1
            </HorizontalTimeline.Block>
            <HorizontalTimeline.Block year="2009">
              Content 2
            </HorizontalTimeline.Block>
          </HorizontalTimeline>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
