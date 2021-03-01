import React from 'react'
import renderer from 'react-test-renderer'
import { Video } from './index'
import { Loader } from '../../atoms/loader'

describe('<Video />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<Video />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Video
            autoPlay={false}
            playsInline
            loop
            muted
            src="https://d3v4jsc54141g1.cloudfront.net/videos/home/home_v2.mp4"
            poster="https://d3v4jsc54141g1.cloudfront.net/videos/maker/detailed_description_poster.jpg"
          >
            <Video.Loader>
              <Loader />
            </Video.Loader>
          </Video>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
