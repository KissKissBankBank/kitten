import React from 'react'
import { SimpleCarousel } from './index'
import {
  Title,
  Paragraph,
  HorizontalStroke,
  Button,
  FlexWrapper,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Carousels/SimpleCarousel',
  component: SimpleCarousel,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="SimpleCarousel" />
      ),
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
}

const Item = ({ numItem }) => (
  <FlexWrapper gap={30}>
    <img
      src={`/kitten-${numItem}.jpg`}
      alt=""
      style={{ display: 'block', width: '100%' }}
    />

    <Title modifier="senary" noMargin>
      Title {numItem}
    </Title>

    <HorizontalStroke size="large" className="k-u-m-t-n4" />

    <Paragraph modifier="secondary" noMargin>
      Parapraph {numItem}
    </Paragraph>

    <div>
      <Button>Button {numItem}</Button>
    </div>
  </FlexWrapper>
)

export const Default = () => (
  <div
    style={{
      minWidth: '300px',
      maxWidth: '33vw',
    }}
  >
    <SimpleCarousel id="simpleCarousel">
      <Item key="1" numItem="1" />
      <Item key="2" numItem="2" />
      <Item key="3" numItem="3" />
      <Item key="4" numItem="4" />
      <Item key="5" numItem="5" />
    </SimpleCarousel>
  </div>
)
