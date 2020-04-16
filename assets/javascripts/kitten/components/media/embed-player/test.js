import React from 'react'
import renderer from 'react-test-renderer'
import { EmbedPlayer } from './index'

describe('<EmbedPlayer />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<EmbedPlayer />).toJSON()

      it('matches with snapshot', () => {
        expect(component).toMatchSnapshot()
      })
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <EmbedPlayer
            previewProps={{
              thumbnail: {
                src: 'https://placekitten.com/620/376',
                alt: 'Une image',
              },
            }}
            playButtonLabel="Play"
            ratio={(376 / 620) * 100}
            iframeHtml="<iframe
                width='620'
                height='376'
                src='https://www.youtube.com/embed/30wT8ZJOeDA'
                frameborder='0' allow='autoplay; encrypted-media'
                allowfullscreen
              ></iframe>"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
