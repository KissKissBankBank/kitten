import React from 'react'
import { text, boolean, color } from '@storybook/addon-knobs'
import { SimpleCard } from './index'

export default {
  title: 'Cards/SimpleCard',
  component: SimpleCard,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--thin">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return (
    <SimpleCard
      href="#"
      imageProps={{
        src: text('Image src', 'https://placehold.it/200x200/caf4fe/caf4fe'),
      }}
      title={text('Title', 'Title')}
      subtitle={text('Subtitle', 'Subtitle')}
      paragraph={text('Paragraph', 'Paragraph')}
      withPlayerButtonOnImage={boolean('With player button on image?', true)}
    />
  )
}

export const WithImageContainerRatio = () => {
  return (
    <SimpleCard
      href="#"
      imageProps={{
        src: text('Image src', 'https://placehold.it/160x90/555/caf4fe'),
      }}
      title={text('Title', 'Title')}
      subtitle={text('Subtitle', 'Subtitle')}
      paragraph={text('Paragraph', 'Paragraph')}
      withPlayerButtonOnImage={boolean('With player button on image?', false)}
      imageContainerRatio={text('Adjust Ratio', '16/9')}
      imageContainerBackground={color('Adjust Color', '#eee')}
    />
  )
}
