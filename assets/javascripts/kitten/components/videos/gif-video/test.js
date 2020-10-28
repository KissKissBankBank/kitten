import React from 'react'
import renderer from 'react-test-renderer'
import { GifVideo } from './index'

describe('<GifVideo />', () => {
  let component

  describe('with no source', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <GifVideo poster="https://d3v4jsc54141g1.cloudfront.net/videos/maker/detailed_description_poster.jpg" />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with multiple sources', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <GifVideo poster="https://d3v4jsc54141g1.cloudfront.net/videos/maker/detailed_description_poster.jpg">
            <source
              src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm"
              type="video/webm"
            />
            <source
              src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
              type="video/mp4"
            />
          </GifVideo>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
