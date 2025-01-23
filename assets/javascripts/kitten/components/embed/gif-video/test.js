import React from 'react'
import renderer from 'react-test-renderer'
import { GifVideo } from './index'

describe('<GifVideo />', () => {
  let component

  describe('with no source', () => {
    beforeEach(() => {
      component = renderer.create(<GifVideo poster="" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with multiple sources', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <GifVideo poster="">
            <source
              src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.webm"
              type="video/webm"
            />
            <source
              src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.mp4"
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
