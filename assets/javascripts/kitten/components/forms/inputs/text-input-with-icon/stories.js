import React from 'react'
import { TextInputWithIcon } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'
import {
  SearchIcon,
  CheckedCircleIcon,
  WarningCircleIcon,
  Loader,
  COLORS,
} from 'kitten'

export default {
  component: TextInputWithIcon,
  title: 'Forms/Inputs/TextInputWithIcon',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextInputWithIcon" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],

  args: {
    ...TextInputStory.args,
    icon: <SearchIcon aria-label="Search icon" width="15" height="15" />,
    iconPosition: 'left',
    accessibilityLabel: 'Icon label',
  },

  argTypes: {
    ...TextInputStory.argTypes,
    icon: {
      name: 'icon',
      control: 'object',
    },
    iconPosition: {
      name: 'iconPosition',
      options: ['left', 'right'],
      control: 'inline-radio',
    },
    accessibilityLabel: {
      name: 'accessibilityLabel',
      control: 'text',
    },
  },
}

export const Default = args => <TextInputWithIcon {...args} />

export const Validation = args => {
  const IconComponent = () => {
    switch (args.state) {
      case 'loading':
        return <Loader />
      case 'valid':
        return (
          <CheckedCircleIcon
            bgColor={COLORS.valid}
            color={COLORS.background1}
          />
        )
      case 'error':
        return (
          <WarningCircleIcon
            bgColor={COLORS.error}
            color={COLORS.background1}
          />
        )
      default:
        return null
    }
  }

  return (
    <TextInputWithIcon
      {...args}
      icon={<IconComponent />}
      valid={args.state === 'valid'}
      error={args.state === 'error'}
      accessibilityLabel={args.state === 'loading' && 'Loading'}
    />
  )
}

Validation.decorators = Default.decorators

Validation.args = {
  ...Default.args,
  state: 'none',
}

Validation.argTypes = {
  ...Default.argTypes,
  state: {
    name: 'state (story prop)',
    options: ['none', 'loading', 'valid', 'error'],
    control: 'select',
  },
}
