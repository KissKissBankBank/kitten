import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { SimpleCarousel } from './simple-carousel'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Button } from 'kitten/components/buttons/button'

let carouselNode

const Item = ({ imgKey }) => (
  <Fragment>
    <Marger bottom="3">
      <img
        src={`https://placeimg.com/40${imgKey}/540/nature`}
        alt=""
        style={{ display: 'block', width: '100%' }}
        onLoad={() => {
          carouselNode.updateContainerHeight()
        }}
      />
    </Marger>

    <Marger top="3" bottom="3" style={{ padding: '0 40px' }}>
      <Marger bottom="2">
        <Title modifier="senary" margin={false} style={{ color: '#FFF' }}>
          Maison de Crowdfunding <br />Programme Juillet 2018
        </Title>
      </Marger>

      <Marger top="2" bottom="3">
        <HorizontalStroke size="big" style={{ background: '#FFF' }} />
      </Marger>

      <Marger top="3" bottom="3">
        <Paragraph modifier="tertiary" margin={false} style={{ color: '#FFF' }}>
          Formations au crowdfunding, conférences, débats, rencontres avec des
          entrepreneurs et créateurs, vernissages, célébrations de campagnes,
          marchés de crowdfunding, projections…
        </Paragraph>
      </Marger>

      <Marger top="3">
        <Button>Découvrir</Button>
      </Marger>
    </Marger>
  </Fragment>
)

const items = [
  <Item key="1" imgKey="1" />,
  <Item key="2" imgKey="2" />,
  <Item key="3" imgKey="3" />,
]

storiesOf('Carousel/SimpleCarousel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <Grid>
        <GridCol offset="1" col="4">
          <div
            style={{
              paddingLeft: 75,
              background: '#222',
              overflow: 'auto',
            }}
          >
            <SimpleCarousel
              ref={node => {
                carouselNode = node
              }}
              items={items}
            />
          </div>
        </GridCol>
      </Grid>
    )),
  )
