import React, { Fragment } from 'react'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Text } from 'kitten/components/typography/text'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button } from 'kitten/components/buttons/button'

export const ProjectHeader = () => (
  <Fragment>
    <Container>
      <Grid>
        <GridCol col="4" offset="1">
          <Marger top="15" bottom="2">
            <Title modifier="secondary" margin={false}>
              Donnons pour Démos !
            </Title>
          </Marger>

          <Marger top="2" bottom="15" style={headerStyles.titleGrid}>
            <HorizontalStroke style={headerStyles.stroke} />
            <Text color="font1" weight="regular" lineHeight="normal">
              Musique, Santé & Éducation, Solidarité
            </Text>
          </Marger>
        </GridCol>

        <GridCol col="7">
          <img
            style={headerStyles.img}
            src="https://placeimg.com/850/480/any"
          />
        </GridCol>
      </Grid>
    </Container>

    <Container>
      <Grid>
        <GridCol col="3" offset="2">
          <Marger top="2" bottom="2" style={headerStyles.titleGrid}>
            <ButtonImage
              tag="span"
              img={{ src: 'https://placeimg.com/50/50/any' }}
              withoutPointerEvents
              big
            />

            <Marger style={headerStyles.owner}>
              <Text tag="div" size="micro" weight="regular">
                Philharmonie de Paris
              </Text>

              <Text tag="div" size="micro" weight="light">
                Paris (75)
              </Text>
            </Marger>
          </Marger>
        </GridCol>

        <GridCol col="7">
          <Marger>
            <Button modifier="helium" size="big">
              Contribuer
            </Button>
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  </Fragment>
)

const headerStyles = {
  titleGrid: {
    display: 'flex',
    alignItems: 'center',
  },
  stroke: {
    marginRight: '10px',
  },
  img: {
    display: 'block',
    width: `calc(100% + ${CONTAINER_PADDING}px)`,
  },
  owner: {
    marginLeft: '10px',
    marginRight: '20px',
    lineHeight: '1.3',
  },
}
