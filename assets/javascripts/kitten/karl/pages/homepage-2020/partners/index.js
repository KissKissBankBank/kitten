import React from 'react'
import styled from 'styled-components'
import { Card } from './components/card'
import { pxToRem, Title, Carousel, mediaQueries, Grid, GridCol } from 'kitten'
import classNames from 'classnames'

const StyledPartners = styled.div`
  .Partners__col {
    display: flex;
  }

  .Partners__colCards {
    &:first-child {
      margin-right: ${pxToRem(20)};
    }
    &:last-child {
      margin-left: ${pxToRem(20)};
    }
  }
`

const selectionData = [
  {
    title: 'Sloe, le soin nomade et naturel à la conquête',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'https://source.unsplash.com/random/315x198?kitten,1',
    title2: 'Un titre court',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'https://source.unsplash.com/random/315x198?kitten,2',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'https://source.unsplash.com/random/315x198?kitten,3',
  },
  {
    title:
      'Sloe, le soin nomade et naturel à la conquête de vos salles de bain',
    text:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc: 'https://source.unsplash.com/random/315x198?kitten,4',
    title2: 'Un titre court',
    text2:
      'Découvrez des soins 100% naturels et écologiques pour vous aider à passer le cap et en finir avec le plastique.',
    imageSrc2: 'https://source.unsplash.com/random/315x198?kitten,5',
    title3: 'Lancement des prochains pantalons à plis intemporels',
    text3:
      'Soutenez le lancement des prochains pantalons à plis intemporels fabriqués à Paris',
    imageSrc3: 'https://source.unsplash.com/random/315x198?kitten,6',
  },
]

const PartnersBase = ({ viewportIsXSOrLess }) => (
  <StyledPartners>
    <Title
      tag="h3"
      className={classNames(
        'Homepage__section__title',
        'k-u-margin-top-none',
        'k-u-margin-bottom-singleHalf@s-up',
        'k-u-margin-bottom-single@s-down',
      )}
    >
      Lorem ipsum dolor sit
    </Title>

    <div className="k-u-hidden@l-up">
      <Carousel
        itemMinWidth={viewportIsXSOrLess ? 250 : 490}
        baseItemMarginBetween={10}
        paginationPosition={{ default: 'bottom' }}
        smallButtons
        showPageSquares
        preferCompletePaginationOnMobile
        loop
      >
        {selectionData.map((item, index) => (
          <div key={index}>
            <Card
              title={item.title}
              text={item.text}
              imageProps={{
                src: item.imageSrc,
                alt: 'Image alt',
              }}
            />
            <Card
              title={item.title2}
              text={item.text2}
              imageProps={{
                src: item.imageSrc2,
                alt: 'Image alt',
              }}
            />
            <Card
              title={item.title3}
              text={item.text3}
              imageProps={{
                src: item.imageSrc3,
                alt: 'Image alt',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>

    <Grid className="k-u-hidden@m-down">
      <GridCol className="Partners__col">
        {selectionData.map((item, index) => (
          <div className="Partners__colCards" key={index}>
            <Card
              title={item.title}
              text={item.text}
              imageProps={{
                src: item.imageSrc,
                alt: 'Image alt',
              }}
            />
            <Card
              title={item.title2}
              text={item.text2}
              imageProps={{
                src: item.imageSrc2,
                alt: 'Image alt',
              }}
            />
            <Card
              title={item.title3}
              text={item.text3}
              imageProps={{
                src: item.imageSrc3,
                alt: 'Image alt',
              }}
            />
          </div>
        ))}
      </GridCol>
    </Grid>
  </StyledPartners>
)

export const Partners = mediaQueries(PartnersBase, {
  viewportIsXSOrLess: true,
})
