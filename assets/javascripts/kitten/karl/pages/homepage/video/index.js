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

const StyledGrid = styled(Grid)`
  align-items: center;
`

const VideoContainer = styled.div`
  position: relative;
  margin-left: ${pxToRem(-CONTAINER_PADDING_THIN)};
  background-color: ${COLORS.font1};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-left: ${pxToRem(-CONTAINER_PADDING)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin-right: ${pxToRem(20)};
  }
`

const StyledParagraph = styled(Paragraph)`
  font-size: ${stepToRem(-2)};
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(-1)};
  }
`

export const Video = () => {
  return (
    <StyledGrid>
      <GridCol col-l={9}>
        <VideoContainer>
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
        </VideoContainer>
      </GridCol>
      <GridCol
        col-s={10}
        col-l={3}
        offset-s={1}
        offset-l={0}
        className="k-u-align-center k-Grid__col--offset-0@l"
      >
        <TitleWithStroke modifier="senary" tag="h2" align="center">
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </TitleWithStroke>
        <StyledParagraph className="k-u-margin-none">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit
          libero, a pharetra augue. Etiam porta sem malesuada magna mollis
          euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum.
        </StyledParagraph>
      </GridCol>
    </StyledGrid>
  )
}
