import React from 'react'
import { HighlightHalo } from './index'
import { COLORS } from '../../..'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/HighlightHalo',
  component: HighlightHalo,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="HighlightHalo" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container">
        <div>{story()}</div>
      </div>
    ),
  ],
  args: {
    haloColor: COLORS.primary1,
    haloSize: 120,
    animationCycles: 3,
    animationCycleDuration: 4,
    animationDelay: 0,
    onHaloAnimationEnd: action('onHaloAnimationEnd'),
  },
  argTypes: {
    haloColor: {
      name: 'haloColor',
      control: 'color',
    },
    haloSize: {
      name: 'haloSize',
      control: { type: 'range', min: 1, max: 500, step: 10 },
    },
    animationCycles: {
      name: 'animationCycles',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    animationCycleDuration: {
      name: 'animationCycleDuration',
      control: { type: 'range', min: 1, max: 20, step: 1 },
    },
    animationDelay: {
      name: 'animationDelay',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
  },
}

export const Default = args => {
  return <HighlightHalo {...args} />
}
