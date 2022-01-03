import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { ContentCard } from './index'
import {
  Paragraph,
  FlexWrapper,
  TextButton,
  HeartIconNext,
  BubbleIconNext,
  AirplaneIconNext,
} from 'kitten'

export default {
  title: 'Molecules/Cards/ContentCard',
  component: ContentCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ContentCard" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    contentFixedHeight: {
      name: 'fixedHeight (on ContentCard.Content, story prop)',
      control: 'boolean',
    },
  },
  args: {
    contentFixedHeight: false,
  },
}

export const Default = ({ contentFixedHeight, ...args }) => (
  <ContentCard {...args}>
    <ContentCard.Header>15 novembre 2021</ContentCard.Header>
    <ContentCard.Title>Aenean lacinia bibendum nulla sed !</ContentCard.Title>
    <ContentCard.Content fixedHeight={contentFixedHeight}>
      <Paragraph>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Sed posuere consectetur est at
        lobortis. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
        fringilla.
      </Paragraph>
      <img alt="" src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`} />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet
        rutrum faucibus dolor auctor.
      </Paragraph>
      <Paragraph>
        Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi
        leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor.
      </Paragraph>
    </ContentCard.Content>
    <ContentCard.Footer>
      <FlexWrapper
        className="k-u-flex-alignItems-baseline k-u-flex-wrap-wrap k-u-flex-justifyContent-sb"
        gap={[10, 30]}
        direction="row"
      >
        <FlexWrapper
          className="k-u-flex-alignItems-baseline"
          gap={30}
          direction="row"
        >
          <TextButton size="big">
            <HeartIconNext />
            144
          </TextButton>
          <TextButton size="big">
            <BubbleIconNext />
            33
          </TextButton>
        </FlexWrapper>
        <TextButton size="big">
          <AirplaneIconNext />
          <span className="k-u-hidden@s-down">Partager</span>
        </TextButton>
      </FlexWrapper>
    </ContentCard.Footer>
  </ContentCard>
)
