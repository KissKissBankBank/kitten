import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'
import { CrowdfundingCard } from '../../../components/cards/crowdfunding-card'
import { CarouselV2 } from './index'
import { GUTTER } from '../../../constants/grid-config'
import { Marger } from '../../../components/layout/marger'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import COLORS from '../../../constants/colors-config'

const data = [
  {
    title: 'Autoproduction culturelle',
    color: COLORS.primary1,
  },
  {
    title: 'Fabrication française',
    color: COLORS.background2,
  },
  {
    title: 'Éducation',
    color: COLORS.font2,
  },
  {
    title: 'Bio',
    color: COLORS.primary1,
  },
  {
    title: 'Zéro déchet',
    color: COLORS.primary4,
  },
  {
    title: 'Média indépendant',
    color: COLORS.primary3,
  },
  {
    title: 'Féminisme',
    color: COLORS.primary2,
  },
  {
    title: 'Maladie & handicap',
    color: COLORS.primary4,
  },
  {
    title: 'Biodiversité',
    color: COLORS.primary1,
  },
]

const paginationPosition = {
  fromS: 'right',
}

storiesOf('Carousel/CarouselV2', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Container>
      <Marger top="5" bottom="5">
        <CarouselV2
          itemMinWidth={number('itemMinWidth', 180)}
          baseItemMarginBetween={number('baseItemMarginBetween', GUTTER)}
          paginationPosition={object('paginationPosition', paginationPosition)}
        >
          {data.map((item, index) => (
            <div
              key={item.title}
              style={{
                backgroundColor: `${item.color}`,
                height: '200px',
              }}
            >
              {item.title}
            </div>
          ))}
        </CarouselV2>
      </Marger>
    </Container>
  ))
