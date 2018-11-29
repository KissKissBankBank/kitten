import React from 'react'
import { EmbedPlayer } from '../../../assets/javascripts/kitten/components/media/embed-player'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Embed player">
        <EmbedPlayer
          previewProps={{
            thumbnail: {
              src: 'https://placehold.it/620x376/caf4fe/caf4fe',
              alt: 'A picture',
            },
            badgeComponent: null,
          }}
          playButtonLabel="Play"
          ratio={376.0 / 620 * 100}
          iframeHtml={`
          <iframe
              width="620"
              height="376"
              src="https://www.youtube.com/embed/30wT8ZJOeDA"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          `}
        />
      </Example>
    </div>
  )
}
