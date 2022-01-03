import React from 'react'
import { VerticalCardWithAction } from './index'
import { action } from '@storybook/addon-actions'
import { buttonModifiers } from '../../../../components/molecules/buttons/button'

export default {
  title: 'Molecules/Cards/VerticalCardWithAction',
  component: VerticalCardWithAction,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="VerticalCardWithAction" />
      ),
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  argTypes: {
    button: { control: 'text' },
    title: { control: 'text' },
    buttonModifier: {
      control: 'select',
      options: buttonModifiers,
    },
    buttonProps: { control: 'object' },
    description: { control: 'text' },
    descriptionTag: { control: 'text' },
    imageProps: { control: 'object' },
    titleTag: { control: 'text' },
  },
  args: {
    button: 'Button text',
    title: 'Custom title',
    buttonModifier: 'helium',
    buttonProps: {
      onClick: action('onClick'),
    },
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
    descriptionTag: 'p',
    imageProps: {
      alt: '',
      src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    },
    titleTag: 'h2',
  },
}

export const Default = args => <VerticalCardWithAction {...args} />
