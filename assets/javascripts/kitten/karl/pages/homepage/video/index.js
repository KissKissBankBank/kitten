import React from 'react'
import styled from 'styled-components'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'
import { Paragraph } from '../../../../components/typography/paragraph'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'
import { EmbedPlayer } from '../../../../components/media/embed-player'
import { Grid, GridCol } from '../../../../components/grid/grid'

const StyledVideo = styled(Grid)`
  align-items: center;

  .Video__videoContainer {
    position: relative;
    margin-left: ${pxToRem(-CONTAINER_PADDING_THIN)};
    background-color: ${COLORS.font1};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-left: ${pxToRem(-CONTAINER_PADDING)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-right: ${pxToRem(20)};
    }
  }

  .Video__styledParagraph {
    font-size: ${stepToRem(-2)};
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(-1)};
    }
  }
`

export const Video = () => {
  return (
    <StyledVideo className="Video">
      <GridCol col-l={9}>
        <div className="Video__videoContainer">
          <EmbedPlayer
            previewProps={{
              thumbnail: {
                src: 'https://source.unsplash.com/random/1280x720?kitten',
                alt: 'A picture',
              },
            }}
            playButtonLabel="Play"
            ratio={(9 / 16) * 100}
            iframeHtml={`
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/30wT8ZJOeDA"
                frameborder="0" allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            `}
          />
        </div>
      </GridCol>
      <GridCol
        col-s={10}
        col-l={3}
        offset-s={1}
        offset-l={0}
        className="k-u-align-center k-Grid__col--offset-0@l"
      >
        <TitleWithStroke
          modifier="senary"
          tag="h2"
          align="center"
          className="k-u-margin-top-triple k-u-margin-top-quadruple@s-up k-u-margin-top-none@l-up--important"
        >
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </TitleWithStroke>
        <Paragraph className="Video__styledParagraph k-u-margin-none">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit
          libero, a pharetra augue. Etiam porta sem malesuada magna mollis
          euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum.
        </Paragraph>
      </GridCol>
    </StyledVideo>
  )
}
