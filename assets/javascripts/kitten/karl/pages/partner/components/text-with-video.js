import React, { memo } from 'react'
import styled from 'styled-components'
import {
  Marger,
  Container,
  Grid,
  GridCol,
  Title,
  Paragraph,
  HorizontalStroke,
  Button,
  Video,
  Loader,
} from '../../../../index'
import { DEFAULT, BIG } from '../../../../components/atoms/horizontal-stroke'
import { FLUID } from '../../../../components/buttons/button'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledGrid = styled(Grid)`
  align-items: center;
`

const StyledVideo = styled.div`
  height: ${pxToRem(200)};
  margin-left: -${pxToRem(CONTAINER_PADDING_THIN)};
  margin-right: -${pxToRem(CONTAINER_PADDING_THIN)};
  background: #404040;

  @media (min-width: ${ScreenConfig.S.min}px) {
    height: ${pxToRem(350)};
    margin-left: -${pxToRem(CONTAINER_PADDING)};
    margin-right: -${pxToRem(CONTAINER_PADDING)};
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    height: ${pxToRem(800)};
    margin-right: 0;
  }
`

const StyledHorizontalStroke = styled(HorizontalStroke)`
  ${DEFAULT}
  width: ${pxToRem(40)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    ${BIG}
    height: ${pxToRem(6)};
  }
`

const StyledButton = styled(props => <Button as="a" {...props} />)`
  @media (max-width: ${ScreenConfig.XS.max}px) {
    ${FLUID}
  }
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
              src="https://d3v4jsc54141g1.cloudfront.net/atoms/video/home/home_v2.mp4"
            >
              <Video.Loader>
                <Loader />
              </Video.Loader>
            </Video>
          </StyledVideo>
        </GridCol>

        <GridCol col-xs="10" offset-xs="1" col-l="5">
          <Marger top={{ default: 4, fromS: 8, fromL: 0 }} bottom="2">
            <Title tag="h1" modifier="secondary" margin={false}>
              Devenons partenaires, favorisons l’émergence de projets inspirants
            </Title>
          </Marger>

          <Marger bottom={{ default: 3, fromS: 4 }}>
            <StyledHorizontalStroke />
          </Marger>

          <Marger bottom="2">
            <Paragraph margin={false}>
              Plus de 20 000 projets créatifs, associatifs et entrepreneuriaux
              ont déjà vu le jour sur KissKissBankBank. Combien d'autres grâce à
              vous ?
            </Paragraph>
          </Marger>

          <Marger top="4">
            <StyledButton href="#" modifier="helium" big>
              Devenir partenaire
            </StyledButton>
          </Marger>
        </GridCol>
      </StyledGrid>
    </Container>
  </Marger>
)

export default memo(TextWithVideo)
