import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../../components/typography/paragraph'
import { Text } from '../../../../components/typography/text'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledGrid = styled(Grid)`
  align-items: center;
`

const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
`

const Figure = styled.figure`
  margin: 0;
  position: relative;
`

const FigureCaption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  padding: ${pxToRem(20)} ${pxToRem(30)} 0 ${pxToRem(10)};
`

class TextWithImage extends Component {
  render() {
    const { imagePosition } = this.props

    return (
      <Marger top="4" bottom="8">
        <Container>
          <StyledGrid>
            <GridCol
              col-l="4"
              offset-l="1"
              style={{ order: imagePosition === 'right' ? 0 : 1 }}
            >
              <Marger bottom="1.5">
                <Title tag="h3" modifier="tertiary" margin={false}>
                  Le programme Mentors KissKissBankBank
                </Title>
              </Marger>

              <Marger bottom="3">
                <HorizontalStroke size="big" />
              </Marger>

              <Marger bottom="2">
                <Paragraph modifier="tertiary" margin={false}>
                  Devenez mentor gratuitement. Accompagnez, conseillez ou
                  financez directement des créateurs de projets.
                </Paragraph>
              </Marger>

              <Marger bottom="4">
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

              <Button big>En savoir plus</Button>
            </GridCol>

            <GridCol col-l="5" offset-l="1">
              <Figure>
                <div
                  style={{ width: '100%', height: 415, background: '#404040' }}
                />
                <FigureCaption>
                  <Text
                    tag="p"
                    size="tiny"
                    lineHeight="normal"
                    color="font1"
                    style={{ margin: 0 }}
                  >
                    L’Exception, select store de marques françaises, <br />
                    mentor de projets mode.
                  </Text>
                </FigureCaption>
              </Figure>
            </GridCol>
          </StyledGrid>
        </Container>
      </Marger>
    )
  }
}

export default TextWithImage
