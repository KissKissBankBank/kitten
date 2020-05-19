import React from 'react'
import { Container } from '../../../components/grid/container'
import { LegoGrid } from './index'
import { VerticalCard } from '../../../components/cards/vertical-card'

export default {
  component: LegoGrid,
  title: 'Grid/LegoGrid',
  parameters: {
    component: LegoGrid,
  },
}

const masonryProps = {
  updateOnEachImageLoad: true,
  options: {
    transitionDuration: 0,
  },
}

const legoGridProps = { 'items-xl-up': 4, 'items-m-up': 3, 'items-xs-up': 2 }

export const Default = () => (
  <Container className="k-u-margin-top-quadruple k-u-margin-bottom-quadruple">
    <LegoGrid masonryProps={masonryProps} {...legoGridProps}>
      <LegoGrid.Item>
        <VerticalCard
          imageProps={{
            src: 'https://via.placeholder.com/410x286/caf4fe/caf4fe',
            alt: 'Image alt',
          }}
          title="Finland"
          description="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
          textAlign="center"
          withTitleStroke={true}
        />
      </LegoGrid.Item>
      <LegoGrid.Item>
        <VerticalCard
          imageProps={{
            src: 'https://via.placeholder.com/410x318/caf4fe/caf4fe',
            alt: 'Image alt',
          }}
          title="Nauru"
          description="Aenean lacinia bibendum nulla sed consectetur."
          textAlign="center"
          withTitleStroke={true}
        />
      </LegoGrid.Item>
      <LegoGrid.Item>
        <VerticalCard
          imageProps={{
            src: 'https://via.placeholder.com/410x267/caf4fe/caf4fe',
            alt: 'Image alt',
          }}
          title="Chile"
          description="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          textAlign="center"
          withTitleStroke={true}
        />
      </LegoGrid.Item>
      <LegoGrid.Item>
        <VerticalCard
          imageProps={{
            src: 'https://via.placeholder.com/410x419/caf4fe/caf4fe',
            alt: 'Image alt',
          }}
          title="Ecuador"
          description="Cras justo odio, dapibus ac facilisis in, egestas eget quam."
          textAlign="center"
          withTitleStroke={true}
        />
      </LegoGrid.Item>
      <LegoGrid.Item>
        <VerticalCard
          imageProps={{
            src: 'https://via.placeholder.com/410x424/caf4fe/caf4fe',
            alt: 'Image alt',
          }}
          title="Morocco"
          description="Donec id elit non mi porta gravida at eget metus."
          textAlign="center"
          withTitleStroke={true}
        />
      </LegoGrid.Item>
      <LegoGrid.Item>
        <VerticalCard
          imageProps={{
            src: 'https://via.placeholder.com/410x303/caf4fe/caf4fe',
            alt: 'Image alt',
          }}
          title="China"
          description="Maecenas faucibus mollis interdum."
          textAlign="center"
          withTitleStroke={true}
        />
      </LegoGrid.Item>
    </LegoGrid>
  </Container>
)
