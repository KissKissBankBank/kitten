import React from 'react'
import { CounterBlock } from './index'

const argTypes = {
  title: {
    name: 'title',
    control: {
      type: 'text',
    },
  },
  titleTag: {
    name: 'titleTag',
    control: {
      type: 'text',
    },
  },
  subTitle: {
    name: 'subTitle',
    control: {
      type: 'text',
    },
  },
  subTitleTag: {
    name: 'subTitleTag',
    control: {
      type: 'text',
    },
  },
  counter: {
    name: 'counter',
    control: {
      type: 'text',
    },
  },
  unit: {
    name: 'unit',
    control: {
      type: 'text',
    },
  },
}

const args = {
  title: 'Total validated amount',
  titleTag: 'p',
  subTitle: 'collected since Novembre 19th 2014',
  subTitleTag: 'p',
  counter: '52 982 287',
  unit: '€',
}

export const Default = args => {
  return <CounterBlock {...args} />
}

export default {
  title: 'Organisms/CounterBlock',
  component: CounterBlock,
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
  args: args,
  argTypes: argTypes,
}
