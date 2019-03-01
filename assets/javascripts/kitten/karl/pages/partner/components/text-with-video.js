import React, { Component } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../../components/typography/paragraph'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../components/buttons/button/button'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Video } from '../../../../components/videos/video'
import { Loader } from '../../../../components/loaders/loader'

const StyledGrid = styled(Grid)`
  align-items: center;
`

const StyledVideo = styled.div`
  height: calc(100vh - 65px);
  margin-left: -${pxToRem(CONTAINER_PADDING)};
  background: #404040;
`

const TextWithVideo = () => (
  <Marger bottom="10">
    <Container>
      <StyledGrid>
        <GridCol col-l="5">
          <StyledVideo>
            <Video
              autoPlay
              playsInline
              loop
              muted
              src="https://d3v4jsc54141g1.cloudfront.net/videos/home/home_v2.mp4"
            >
              <Video.Loader>
                <Loader />
              </Video.Loader>
            </Video>
          </StyledVideo>
        </GridCol>

        <GridCol col-l="5" offset-l="1">
          <Marger top="2" bottom="2">
            <Title tag="h1" modifier="secondary" margin={false}>
              Devenons partenaires, favorisons l’émergence de projets inspirants
            </Title>
          </Marger>

          <Marger bottom="4">
            <HorizontalStroke size="big" style={{ height: 6 }} />
          </Marger>

          <Marger bottom="2">
            <Paragraph margin={false}>
              Plus de 20 000 projets créatifs, associatifs et entrepreneuriaux
              ont déjà vu le jour sur KissKissBankBank. Combien d'autres grâce à
              vous ?
            </Paragraph>
          </Marger>

          <Marger top="4" bottom="2">
            <Button as="a" href="#" modifier="helium" big>
              Devenir partenaire
            </Button>
          </Marger>
        </GridCol>
      </StyledGrid>
    </Container>
  </Marger>
)

export default TextWithVideo
