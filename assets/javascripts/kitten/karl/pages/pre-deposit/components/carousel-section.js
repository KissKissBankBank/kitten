import React, { Component } from 'react'
import Radium from 'radium'
import { Container as ContainerBase } from '../../../../components/grid/container'
import { Grid, GridCol as GridColBase } from '../../../../components/grid/grid'
import { Marger as MargerBase } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../../components/layout/horizontal-stroke'
import { Carousel } from '../../../../components/carousel/carousel'
import { SimpleCard } from '../../../../components/cards/simple-card'
import { withMediaQueries } from '../../../../hoc/media-queries'
import {
  ScreenConfig,
  SCREEN_SIZE_M,
} from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const Container = Radium(ContainerBase)
const Marger = Radium(MargerBase)
const GridCol = Radium(GridColBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

class CarouselSection extends Component {
  render() {
    return (
      <div style={styles.background}>
        {this.renderBackground()}
        <div style={styles.content}>
          {this.renderTitle()}
          {this.renderCarousel()}
        </div>
      </div>
    )
  }

  renderBackground() {
    return (
      <div style={styles.svg}>
        <svg
          width="693"
          height="543"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 693 543"
        >
          <path
            d="M197.541 542.838l20.88-166.224L0
                381.432l165.02-62.234-96.764-40.552 107.604-30.514L52.598
                113.626s163.116 75.137 163.514 75.137a.554.554 0 0
                0-.101-.055c-4.818-2.41-17.666-105.998-17.666-105.998l123.664
                67.453C319.599 145.345 418.37 0 418.37 0l41.756 134.906
                187.907.802-100.378 104.393L693 298.72l-166.624 55.81s91.406
                134.558 87.312 134.56a.46.46 0 0
                1-.185-.055c-6.424-3.212-185.897-72.673-185.897-72.673l-49.788
                118.043-72.27-117.24L197.54 542.837"
            fill="#fff"
            fillRule="evenodd"
          />
        </svg>
      </div>
    )
  }

  renderTitle() {
    const { viewportIsMOrLess } = this.props

    return (
      <Container>
        <Grid>
          <GridCol
            col-l="5"
            offset-l="1"
            col-s="7"
            col-xs="10"
            style={{
              ...styles.flex,
              ...styles.spaceBetween,
            }}
          >
            <Marger bottom="3" style={{ ...styles.flex, ...styles.title }}>
              {!viewportIsMOrLess && (
                <HorizontalStroke size="default" style={styles.stroke} />
              )}
              <Title
                tag="h2"
                modifier="quaternary"
                margin={false}
                className="has-overrided"
              >
                Nos créatrices et créateurs racontent leur campagne
              </Title>
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  }

  renderCarousel() {
    const creators = [
      {
        imageProps: {
          src: 'https://placehold.it/350x195/caf4fe/caf4fe',
        },
        title:
          '« Le crowdfunding était un bon moyen de tester le projet face au public. »',
        paragraph: 'Le Barboteur, péniche culturelle itinérante',
      },
      {
        imageProps: {
          src: 'https://placehold.it/350x195/caf4fe/caf4fe',
        },
        title:
          '« Cette campagne était aussi une manière de montrer que notre crédibilité. »',
        paragraph:
          'Wheeliz, premier site de location de voitures aménagées pour les personnes en fauteuil entre particuliers',
      },
      {
        imageProps: {
          src: 'https://placehold.it/350x195/caf4fe/caf4fe',
        },
        title: '« Notre volonté était d’auto-éditer notre guide. »',
        paragraph: 'Chilowé, guide des micro-aventures en île-de-France',
      },
      {
        imageProps: {
          src: 'https://placehold.it/350x195/caf4fe/caf4fe',
        },
        title: '« Notre volonté était d’auto-éditer notre guide. »',
        paragraph: 'Chilowé, guide des micro-aventures en île-de-France',
      },
    ]

    return (
      <Container
        fullWidthBelowScreenSize={SCREEN_SIZE_M}
        style={{ position: 'relative' }}
      >
        <Carousel
          itemMinWidth={220}
          baseItemMarginBetween={20}
          data={creators}
          renderItem={({ item }) => (
            <SimpleCard
              title={item.title}
              paragraph={item.paragraph}
              tag="a"
              href="#"
              target="_blank"
              rel="external"
              imageProps={{
                src: item.imageProps.src,
                alt: '',
              }}
            />
          )}
        />
      </Container>
    )
  }
}

const styles = {
  background: {
    position: 'relative',
    overflow: 'hidden',
    padding: `${pxToRem(100)} ${pxToRem(0)}`,
    marginTop: pxToRem(60),
    background: `linear-gradient(
      to right,
      ${COLORS.background1} 0%,
      ${COLORS.background1} 50%,
      #ecfcff 50%,
      #ecfcff 100%)`,
    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      padding: `${pxToRem(50)} ${pxToRem(0)}`,
      marginTop: pxToRem(20),
    },
  },
  svg: {
    position: 'absolute',
    zIndex: 1,
    top: pxToRem(50),
    right: 'calc(50% - 455px)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    marginLeft: pxToRem(-50),
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      marginLeft: 0,
    },
  },
  stroke: {
    marginRight: pxToRem(20),
    flexShrink: 0,
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      order: 2,
      width: '100%',
      marginLeft: pxToRem(20),
      marginRight: 0,
    },
  },
}

export default withMediaQueries({
  viewportIsMOrLess: true,
})(Radium(CarouselSection))
