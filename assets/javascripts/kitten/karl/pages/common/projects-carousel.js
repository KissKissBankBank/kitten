import React from 'react'
import PropTypes from 'prop-types'
import compose from 'ramda/src/compose'
import { Container as ContainerBase } from '../../../components/grid/container'
import { Grid, GridCol as GridColBase } from '../../../components/grid/grid'
import { Marger as MargerBase } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../components/layout/horizontal-stroke'
import { Button as ButtonBase } from '../../../components/buttons/button'
import { Carousel } from '../../../components/carousel/carousel'
import { ScreenConfig, SCREEN_SIZE_M } from '../../../constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from '../../../constants/grid-config'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { CrowdfundingCard } from '../../../components/cards/crowdfunding-card'
import Radium, { StyleRoot } from 'radium'
import { withMediaQueries } from '../../../hoc/media-queries'

const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Button = Radium(ButtonBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)
const Container = Radium(ContainerBase)

const ProjectsCarousel = ({
  title,
  description,
  buttonHref,
  buttonLabel,
  viewportIsMOrLess,
  viewportIsXSOrLess,
}) => {
  const renderButton = () => (
    <Button icon iconOnRight tag="a" href={buttonHref} style={styles.button}>
      {buttonLabel}
      <ArrowIcon
        version="solid"
        className="k-Button__icon k-ButtonIcon__svg"
        style={{ width: 6 }}
      />
    </Button>
  )

  return (
    <StyleRoot>
      <Marger bottom={viewportIsXSOrLess ? 2 : 3}>
        <Container>
          <Grid>
            <GridCol
              col-l="10"
              offset-l="1"
              style={{
                ...styles.flex,
                ...styles.spaceBetween,
              }}
            >
              <div style={styles.header}>
                <Marger
                  bottom={description ? 0.5 : 0}
                  style={{ ...styles.flex, ...styles.title }}
                >
                  <HorizontalStroke style={styles.stroke} />
                  <Title tag="h2" modifier="quaternary" margin={false}>
                    {title}
                  </Title>
                </Marger>

                {!!description && (
                  <Marger top=".5">
                    <Text size="tiny" color="font1" weight="light">
                      {description}
                    </Text>
                  </Marger>
                )}
              </div>

              {!viewportIsMOrLess && renderButton()}
            </GridCol>
          </Grid>
        </Container>
      </Marger>

      <Container
        fullWidthBelowScreenSize={SCREEN_SIZE_M}
        style={styles.carouselContainer}
      >
        <Carousel
          itemMinWidth={280}
          baseItemMarginBetween={CONTAINER_PADDING}
          data={[
            {
              title: 'Item A',
              imageSrc: 'http://placekitten.com/500/300',
              thumbSrc: 'http://placekitten.com/80/80',
            },
            {
              title: 'Item B',
              imageSrc: 'http://placekitten.com/501/301',
              thumbSrc: 'http://placekitten.com/81/81',
            },
            {
              title: 'Item C',
              imageSrc: 'http://placekitten.com/502/302',
              thumbSrc: 'http://placekitten.com/82/82',
            },
            {
              title: 'Item D',
              imageSrc: 'http://placekitten.com/503/303',
              thumbSrc: 'http://placekitten.com/83/83',
            },
            {
              title: 'Item E',
              imageSrc: 'http://placekitten.com/504/304',
              thumbSrc: 'http://placekitten.com/84/84',
            },
          ]}
          renderItem={({ item }) => (
            <CrowdfundingCard
              href="#"
              imageProps={{
                src: item.imageSrc,
                alt: 'Image alt',
                backgroundColor: '#d8d8d8',
                color: '#333',
              }}
              avatarProps={{
                src: item.thumbSrc,
                alt: 'Avatar alt',
              }}
              ownerTitle="Title"
              ownerDescription="Custom description"
              titleProps={{
                tag: 'h4',
              }}
              cardTitle={item.title}
              cardSubTitle="Custom subtitle"
              titlesMinHeight
              progress="84"
              state="Custom state"
            />
          )}
        />

        {viewportIsMOrLess && renderButton()}
      </Container>
    </StyleRoot>
  )
}

const styles = {
  flex: {
    display: 'flex',
    alignItems: 'center',
  },

  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  header: {
    flex: 1,

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      marginRight: `-${CONTAINER_PADDING}px`,
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginRight: `-${CONTAINER_PADDING_MOBILE}px`,
    },
  },

  title: {
    marginLeft: -50,

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      marginLeft: 0,
    },
  },

  stroke: {
    marginRight: 20,

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      order: 2,
      width: '100%',
      marginLeft: 20,
      marginRight: 0,
    },
  },

  button: {
    flexShrink: 0,
    marginLeft: 10,

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      position: 'absolute',
      bottom: 0,
      right: CONTAINER_PADDING,
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      right: CONTAINER_PADDING_MOBILE,
    },
  },

  carouselContainer: {
    position: 'relative',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      paddingBottom: 80,
    },
  },
}

ProjectsCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonHref: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  viewportIsMOrLess: PropTypes.bool.isRequired,
  viewportIsXSOrLess: PropTypes.bool.isRequired,
}

ProjectsCarousel.defaultProps = {
  description: null,
}

export default compose(
  Radium,
  withMediaQueries({
    viewportIsMOrLess: true,
    viewportIsXSOrLess: true,
  }),
)(ProjectsCarousel)
