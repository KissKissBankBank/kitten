import React from 'react'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Carousel } from '../../../../components/carousel/carousel'
import { SimpleCard } from '../../../../components/cards/simple-card'
import { SCREEN_SIZE_M } from '../../../../constants/screen-config'
import classNames from 'classnames'

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
const CarouselSection = () => (
  <div className="PreDeposit__carousel">
    <div className="PreDeposit__carousel__svg">
      <svg
        width="693"
        height="543"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 693 543"
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

    <div className="PreDeposit__carousel__content">
      <Container>
        <Grid>
          <GridCol
            col-l="5"
            offset-l="1"
            col-s="7"
            col-xs="10"
            className={classNames(
              'PreDeposit__carousel__flex',
              'PreDeposit__carousel__spaceBetween',
            )}
          >
            <Marger
              bottom="3"
              className={classNames(
                'PreDeposit__carousel__flex',
                'PreDeposit__carousel__title',
              )}
            >
              <HorizontalStroke
                size="default"
                className="PreDeposit__carousel__stroke"
              />
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

      <Container
        fullWidthBelowScreenSize={SCREEN_SIZE_M}
        className="PreDeposit__carousel__carousel"
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
    </div>
  </div>
)

export default CarouselSection
