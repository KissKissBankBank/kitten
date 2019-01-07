import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol as GridColBase } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { Carousel } from '../../../../components/carousel/carousel'
import { SimpleCard } from '../../../../components/cards/simple-card'
import { withMediaQueries } from '../../../../hoc/media-queries'

const GridCol = Radium(GridColBase)

class CarouselSection extends Component {
  render() {
    const { viewportIsXSOrLess, viewportIsSOrLess } = this.props

    return (
      <StyleRoot>
        <Container>
          <Marger top={viewportIsSOrLess ? 8 : 10}>
            <Grid>
              {this.renderTitle()}
              {this.renderCarousel()}
            </Grid>
          </Marger>
        </Container>
      </StyleRoot>
    )
  }

  renderTitle() {
    return (
      <GridCol col-l="4" offset-l="1" col-s="10">
        <Marger bottom="3">
          <Title tag="h2" modifier="quaternary" margin={false}>
            Nos créatrices et créateurs racontent leur campagne
          </Title>
        </Marger>
      </GridCol>
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
    ]

    return (
      <GridCol>
        <Carousel
          itemMinWidth={280}
          baseItemMarginBetween={40}
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
      </GridCol>
    )
  }
}

export default withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsSOrLess: true,
})(Radium(CarouselSection))
