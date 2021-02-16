import React, { memo } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../../components/typography/paragraph'
import { Text } from '../../../../components/typography/text'
import {
  Button,
  FLUID,
  DEFAULT,
  BIG,
} from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledGrid = styled(Grid)`
  align-items: center;
`

const ContentGrid = styled(GridCol)`
  order: 1;

  @media (min-width: ${ScreenConfig.L.min}px) {
    order: ${({ imagePosition }) => (imagePosition === 'right' ? 0 : 1)};
  }
`

const TextWithIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    flex-shrink: 0;
  }
`

const Figure = styled.figure`
  margin: 0;
  position: relative;
`

const FigureCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: calc(100% - ${pxToRem(30 * 2)});
  padding: ${pxToRem(20)} ${pxToRem(30)} 0 ${pxToRem(10)};
  background: white;
`

const StyledText = styled(Text)`
  margin: 0;
  font-size: ${pxToRem(12)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    font-size: ${pxToRem(14)};
  }
`

const StyledButton = styled(Button)`
  ${BIG}

  @media (max-width: ${ScreenConfig.XS.max}px) {
    ${FLUID}
    ${DEFAULT}
  }
`

const TextWithImage = ({ imagePosition }) => (
  <Marger top="4" bottom={{ default: 5, fromL: 8 }}>
    <Container>
      <StyledGrid>
        <ContentGrid
          col-xs="10"
          offset-xs="1"
          col-l="4"
          imagePosition={imagePosition}
        >
          <Marger top={{ default: 4, fromL: 0 }} bottom="2">
            <Title tag="h3" modifier="quaternary" margin={false}>
              Le programme Mentors KissKissBankBank
            </Title>
          </Marger>

          <Marger bottom="2">
            <Paragraph modifier="tertiary" margin={false}>
              Devenez mentor gratuitement. Accompagnez, conseillez ou financez
              directement des créateurs de projets.
            </Paragraph>
          </Marger>

          <Marger bottom={{ default: 3, fromS: 4 }}>
            <TextWithIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                width="50"
              >
                <circle fill="#FFEBE0" cx="5" cy="5" r="5" />
              </svg>

              <Text
                tag="p"
                weight="regular"
                fontStyle="italic"
                size="tiny"
                lineHeight="normal"
                style={{ margin: '0 0 0 15px' }}
              >
                Les projets mentorés collectent en moyenne 2x plus que les
                autres
              </Text>
            </TextWithIcon>
          </Marger>

          <StyledButton big>En savoir plus</StyledButton>
        </ContentGrid>

        <GridCol col-xs="10" offset-xs="1" col-l="5">
          <Figure>
            <div
              style={{ width: '100%', height: 415, background: '#404040' }}
            />
            <FigureCaption>
              <StyledText tag="p" lineHeight="normal" color="font1">
                L’Exception, select store de marques françaises, <br />
                mentor de projets mode.
              </StyledText>
            </FigureCaption>
          </Figure>
        </GridCol>
      </StyledGrid>
    </Container>
  </Marger>
)

export default memo(TextWithImage)
