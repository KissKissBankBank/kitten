import React from 'react'
import { ButtonImage } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Buttons/ButtonImage',
  component: ButtonImage,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ButtonImage" />,
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
    tag: { control: 'text' },
    size: { control: 'radio', options: ['tiny', 'regular', 'big', 'huge'] },
    withoutPointerEvents: { control: 'boolean' },
    withBorder: { control: 'boolean' },
    img: { control: 'object' },
  },
  args: {
    tag: 'button',
    size: 'regular',
    withoutPointerEvents: false,
    withBorder: false,
    img: {
      src: '/kitten.jpg',
      alt: '',
    },
  },
}
export const Default = args => <ButtonImage {...args} />
