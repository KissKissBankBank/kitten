import React from 'react'
import { SimpleCarousel } from './index'
import {
  Marger,
  Title,
  Paragraph,
  HorizontalStroke,
  Button,
} from '../../../..'

export default {
  title: 'Molecules/Carousels/SimpleCarousel',
  component: SimpleCarousel,
}

const Item = ({ numItem }) => (
  <>
    <Marger bottom="3">
      <img
        src={`https://placeimg.com/40${numItem}/40${numItem}/nature`}
        alt=""
        style={{ display: 'block', width: '100%' }}
      />
    </Marger>

    <Marger top="3" bottom="3" style={{ padding: '0 40px' }}>
      <Marger bottom="2">
        <Title modifier="senary" noMargin style={{ color: '#FFF' }}>
          Title {numItem}
        </Title>
      </Marger>

      <Marger top="2" bottom="3">
        <HorizontalStroke size="big" style={{ background: '#FFF' }} />
      </Marger>

      <Marger top="3" bottom="3">
        <Paragraph modifier="secondary" noMargin style={{ color: '#FFF' }}>
          Parapraph {numItem}
        </Paragraph>
      </Marger>

      <Marger top="3">
        <Button>Button {numItem}</Button>
      </Marger>
    </Marger>
  </>
)

export const Default = () => (
  <div
    style={{
      paddingLeft: 75,
      background: '#222',
      overflow: 'auto',
      minWidth: '300px',
      maxWidth: '33vw',
    }}
  >
    <SimpleCarousel id="simpleCarousel">
      <Item key="1" numItem="1" />
      <Item key="2" numItem="2" />
      <Item key="3" numItem="3" />
    </SimpleCarousel>
  </div>
)
