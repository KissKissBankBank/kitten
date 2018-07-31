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
import { Container as ContainerBase } from 'kitten/components/grid/container'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Text } from 'kitten/components/typography/text'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { CrossIcon } from 'kitten/components/icons/cross-icon'

const Container = Radium(ContainerBase)
const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Title = Radium(TitleBase)
const Button = Radium(ButtonBase)
const IconBadge = Radium(IconBadgeBase)

const RewardsManagment = ({ viewportIsMobile }) => (
  <Fragment>
    <IconBadge
      style={[
        styles.state.icon,
        styles.contribution.spacing,
        { backgroundColor: COLORS.valid },
      ]}
    >
      <CheckedIcon className="k-IconBadge__svg" />
    </IconBadge>

    <div style={styles.contributionText}>
      <Text
        color="font1"
        size={viewportIsMobile ? 'micro' : 'tiny'}
        weight="regular"
      >
        Vous avez contribué à ce projet
      </Text>

      <Text
        tag="a"
        href="#"
        color="primary1"
        size={viewportIsMobile ? 'micro' : 'tiny'}
        weight="regular"
        style={{ textDecoration: 'none' }}
      >
        Gérer ma contribution
      </Text>
    </div>
  </Fragment>
)

const ProjectHeroBase = ({
  viewportIsTabletOrLess,
  viewportIsMobile,
  ...others
}) => (
  <Fragment>
    <div style={styles.heroBackground}>
      <Container>
        <Grid style={styles.heroBackground.grid}>
          <GridCol col-s="8" col-l="4" offset-l="1" style={styles.titles}>
            <Marger
              top={viewportIsTabletOrLess ? 5 : 2}
              bottom={viewportIsTabletOrLess ? 5 : 2}
            >
              <Marger bottom="2">
                <Title
                  tag="h1"
                  modifier="secondary"
                  margin={false}
                  style={styles.title}
                >
                  {others.name}
                </Title>
              </Marger>

              <Marger top="2" style={styles.categories}>
                <HorizontalStroke style={styles.stroke} />
                <Text color="font1" weight="regular" lineHeight="normal">
                  {others.categories}
                </Text>
              </Marger>
            </Marger>
          </GridCol>

          <GridCol col-s="12" col-l="7" offset-l="0" style={styles.imgGrid}>
            <div style={styles.imgContainer}>
              <img
                style={styles.img}
                src={others.image}
                alt="Visuel du projet Donnons pour Démos !"
              />

              {others.state == 'successful' && (
                <div style={styles.state}>
                  <IconBadge
                    style={[
                      styles.state.icon,
                      { backgroundColor: COLORS.valid },
                    ]}
                  >
                    <CheckedIcon className="k-IconBadge__svg" />
                  </IconBadge>

                  <Text
                    color="font1"
                    size={viewportIsMobile ? 'micro' : 'tiny'}
                    weight="regular"
                    className="k-u-hidden@s-down"
                  >
                    Réussie
                  </Text>
                </div>
              )}

              {others.state == 'failed' && (
                <div style={styles.state}>
                  <IconBadge
                    style={[
                      styles.state.icon,
                      { backgroundColor: COLORS.line2 },
                    ]}
                  >
                    <CrossIcon className="k-IconBadge__svg" />
                  </IconBadge>

                  <Text
                    color="font1"
                    size={viewportIsMobile ? 'micro' : 'tiny'}
                    weight="regular"
                    className="k-u-hidden@s-down"
                  >
                    Échoué
                  </Text>
                </div>
              )}
            </div>
          </GridCol>
        </Grid>
      </Container>
    </div>

    <Container style={styles.ownerContainer}>
      <Grid>
        <GridCol col="7" col-s="6" col-l="3" offset-l="2">
          <Marger
            top={viewportIsMobile ? 1.5 : 2}
            bottom={viewportIsMobile ? 1.5 : 2}
            style={styles.ownerGrid}
          >
            <ButtonImage
              tag="span"
              img={{ src: others.ownerImage }}
              withoutPointerEvents
              big={!viewportIsMobile}
              style={styles.ownerGrid.buttonImage}
            />

            <div style={styles.owner}>
              <Text
                tag="div"
                size={viewportIsMobile ? 'micro' : 'tiny'}
                weight="regular"
              >
                {others.ownerName}
              </Text>

              <Text
                tag="div"
                size={viewportIsMobile ? 'micro' : 'tiny'}
                weight="light"
              >
                {others.ownerLocation}
              </Text>
            </div>
          </Marger>
        </GridCol>

        <GridCol col="5" col-s="6" col-l="7">
          <div style={styles.contribution}>
            {others.state == 'started' && (
              <div style={styles.buttonGrid}>
                <Button
                  modifier="helium"
                  size={viewportIsMobile ? null : 'big'}
                  style={styles.button}
                >
                  Contribuer
                </Button>
              </div>
            )}

            {others.contributed &&
              !viewportIsTabletOrLess && (
                <RewardsManagment viewportIsMobile={viewportIsMobile} />
              )}
          </div>
        </GridCol>
      </Grid>
    </Container>

    {others.contributed &&
      viewportIsTabletOrLess && (
        <Container>
          <GridCol>
            <Grid>
              <Marger top="2" bottom="2" style={styles.contribution}>
                <RewardsManagment viewportIsMobile={viewportIsMobile} />
              </Marger>
            </Grid>
          </GridCol>
        </Container>
      )}
  </Fragment>
)

const styles = {
  heroBackground: {
    background: `linear-gradient(
      to right,
      ${COLORS.background1} 0%,
      ${COLORS.background1} 50%,
      ${COLORS.background3} 50%,
      ${COLORS.background3} 100%
    )`,

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      background: `${COLORS.background3}`,
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

  title: {
    wordBreak: 'break-word',
    hyphens: 'auto',
  },

  categories: {
    display: 'flex',
    alignItems: 'center',
  },

  stroke: {
    marginRight: '10px',
    flexShrink: 0,
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

  imgContainer: {
    position: 'relative',
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

  img: {
    display: 'block',
    width: '100%',
  },

  state: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    background: `${COLORS.background1}`,
    padding: '10px 20px 10px 10px',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      paddingRight: 0,
    },

    icon: {
      width: '30px',
      marginRight: '10px',

      [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
        width: '20px',
      },
    },
  },

  ownerContainer: {
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      background: `linear-gradient(
        to right,
        ${COLORS.background1} 0%,
        ${COLORS.background1} 60%,
        ${COLORS.background3} 60%,
        ${COLORS.background3} 100%
      )`,
    },
  },

  ownerGrid: {
    display: 'flex',
    alignItems: 'center',

    buttonImage: {
      flexShrink: 0,
    },
  },

  owner: {
    marginLeft: '15px',
    marginRight: '15px',
    lineHeight: '1.3',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginLeft: '10px',
      marginRight: '10px',
    },
  },

  buttonGrid: {
    height: '100%',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      width: '100%',
    },
  },

  // TODO: New Button modifier?
  button: {
    width: '250px',
    height: '100%',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      width: '100%',
      minWidth: 'auto',
    },
  },

  contribution: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginRight: `-${CONTAINER_PADDING_MOBILE}px`,
    },

    spacing: {
      [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
        marginLeft: '30px',
      },
    },
  },

  contributionText: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.3',
  },
}

// TODO: Remove on KissKiss.
ProjectHeroBase.defaultProps = {
  name: 'Donnons pour Démos !',
  categories: 'Musique, Santé & Éducation, Solidarité',
  image: 'https://placeimg.com/850/480/any',
  ownerImage: 'https://placeimg.com/50/50/any',
  ownerName: 'Philharmonie de Paris',
  ownerLocation: 'Paris (75)',
  state: 'started',
  contributed: false,
}

export const ProjectHero = mediaQueries(Radium(ProjectHeroBase), {
  viewportIsTabletOrLess: true,
  viewportIsMobile: true,
})
