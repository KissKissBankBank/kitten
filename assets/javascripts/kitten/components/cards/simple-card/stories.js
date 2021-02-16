import React from 'react'
import { text, boolean, color } from '@storybook/addon-knobs'
import { SimpleCard } from './index'

export default {
  title: 'Cards/SimpleCard',
  component: SimpleCard,
}

export const Default = () => {
  return (
    <div className="story-Container story-Grid story-Grid--thin">
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
    </div>
  )
}

export const WithImageContainerRatio = () => {
  return (
    <div className="story-Container story-Grid story-Grid--thin">
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
    </div>
  )
}
