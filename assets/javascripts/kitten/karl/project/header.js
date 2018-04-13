import React, { Fragment } from 'react'
import Radium from 'radium'
import {
  NUM_COLUMNS,
  GUTTER,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { Container } from 'kitten/components/grid/container'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Text } from 'kitten/components/typography/text'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button } from 'kitten/components/buttons/button'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)

const ProjectHeaderBase = ({ viewportIsTabletOrLess }) => (
  <Fragment>
    <div style={styles.headerBackground}>
      <Container>
        <Grid style={styles.headerBackground.grid}>
          <GridCol col-s="8" col-l="4" offset-l="1" style={styles.titles}>
            <Marger
              top={viewportIsTabletOrLess ? 5 : 2}
              bottom={viewportIsTabletOrLess ? 5 : 2}
            >
              <Marger bottom="2">
                <Title tag="h1" modifier="secondary" margin={false}>
                  Donnons pour Démos !
                </Title>
              </Marger>

              <Marger top="2" style={styles.categories}>
                <HorizontalStroke style={styles.stroke} />
                <Text color="font1" weight="regular" lineHeight="normal">
                  Musique, Santé & Éducation, Solidarité
                </Text>
              </Marger>
            </Marger>
          </GridCol>

          <GridCol col-s="12" col-l="7" offset-l="0" style={styles.imgGrid}>
            <img
              style={styles.img}
              src="https://placeimg.com/850/480/any"
              alt="Visuel du projet Donnons pour Démos !"
            />
          </GridCol>
        </Grid>
      </Container>
    </div>

    {/* <Container>
      <Grid>
        <GridCol col="3" offset="2">
          <Marger top="2" bottom="2" style={ styles.ownerGrid }>
            <ButtonImage
              tag="span"
              img={{ src: 'https://placeimg.com/50/50/any' }}
              withoutPointerEvents
              big
            />

            <Marger style={ styles.owner }>
              <Text tag="div" size="micro" weight="regular">
                Philharmonie de Paris
              </Text>

              <Text tag="div" size="micro" weight="light" className="k-u-margi">
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
    </Container> */}
  </Fragment>
)

const styles = {
  headerBackground: {
    background: `linear-gradient(
      to right,
      ${COLORS.background1} 0%,
      ${COLORS.background1} 50%,
      ${COLORS.background3} 50%,
      ${COLORS.background3} 100%
    )`,

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      background: `linear-gradient(
        to bottom,
        ${COLORS.background1} 0%,
        ${COLORS.background1} 50%,
        ${COLORS.background3} 50%,
        ${COLORS.background3} 100%
      )`,
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      background: `linear-gradient(
        to bottom,
        ${COLORS.background1} 0%,
        ${COLORS.background1} 30%,
        ${COLORS.background3} 30%,
        ${COLORS.background3} 100%
      )`,
    },

    grid: {
      background: `linear-gradient(
        to right,
        ${COLORS.background1} 0%,
        ${COLORS.background1} calc(${2 / NUM_COLUMNS * 100}% - ${GUTTER / 2}px),
        ${COLORS.background3} calc(${2 / NUM_COLUMNS * 100}% - ${GUTTER / 2}px),
        ${COLORS.background3} 100%
      )`,

      [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
        background: 'none',
      },
    },
  },

  titles: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      order: 2,
    },
  },

  categories: {
    display: 'flex',
    alignItems: 'center',
  },

  stroke: {
    marginRight: '10px',
  },

  imgGrid: {
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      maxWidth: `calc(100% - ${GUTTER}px + ${CONTAINER_PADDING * 2}px)`,
      flexBasis: `calc(100% - ${GUTTER}px + ${CONTAINER_PADDING * 2}px)`,
      marginLeft: `-${CONTAINER_PADDING - GUTTER / 2}px`,
      padding: 0,
      background: `linear-gradient(
        to bottom,
        ${COLORS.background1} 0%,
        ${COLORS.background1} 50%,
        ${COLORS.background3} 50%,
        ${COLORS.background3} 100%
      )`,
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      maxWidth: `calc(100% - ${GUTTER}px + ${CONTAINER_PADDING_MOBILE * 2}px)`,
      flexBasis: `calc(100% - ${GUTTER}px + ${CONTAINER_PADDING_MOBILE * 2}px)`,
      marginLeft: `-${CONTAINER_PADDING_MOBILE - GUTTER / 2}px`,
    },
  },

  img: {
    display: 'block',
    width: `calc(100% + ${CONTAINER_PADDING}px)`,

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      marginLeft: `calc(${CONTAINER_PADDING}px + ${2 /
        NUM_COLUMNS *
        100}% - ${GUTTER / 2}px)`,
      width: `calc(100% - (${CONTAINER_PADDING}px + ${2 /
        NUM_COLUMNS *
        100}% - ${GUTTER / 2}px))`,
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginLeft: `calc(${CONTAINER_PADDING_MOBILE}px + ${1 /
        NUM_COLUMNS *
        100}%)`,
      width: `calc(100% - (${CONTAINER_PADDING_MOBILE}px + ${1 /
        NUM_COLUMNS *
        100}%))`,
    },
  },

  ownerGrid: {
    display: 'flex',
    alignItems: 'center',
  },

  owner: {
    marginLeft: '10px',
    marginRight: '20px',
    lineHeight: '1.3',
  },
}

export const ProjectHeader = mediaQueries(Radium(ProjectHeaderBase), {
  viewportIsTabletOrLess: true,
})
