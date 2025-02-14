import React, { memo } from 'react'
import styled from 'styled-components'
import {
  Marger,
  Container,
  Grid,
  GridCol,
  Title,
  Paragraph,
  Text,
  Button,
  pxToRem,
  ScreenConfig,
} from 'kitten'
import {
  FLUID,
  MEDIUM,
  LARGE,
} from '../../../../components/action/button/standalone-styles'

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
  ${LARGE}

  @media (max-width: ${ScreenConfig.XS.max}px) {
    ${FLUID}
    ${MEDIUM}
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
                weight="500"
                fontStyle="italic"
                size="small"
                lineHeight="normal"
                style={{ margin: '0 0 0 15px' }}
              >
                Les projets mentorés collectent en moyenne 2x plus que les
                autres
              </Text>
            </TextWithIcon>
          </Marger>

          <StyledButton size="large">En savoir plus</StyledButton>
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
