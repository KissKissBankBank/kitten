import React from 'react'
import { TextInputWithIcon } from './index'
import { Default as TextInputStory } from '../text-input/text-input.stories.js'
import {
  SearchIcon,
  CheckedCircleIcon,
  WarningCircleIcon,
  Loader,
  COLORS,
} from '../../..'

export const Default = args => <TextInputWithIcon {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  ...TextInputStory.args,
  icon: <SearchIcon aria-label="Search icon" width="15" height="15" />,
  iconPosition: 'left',
  accessibilityLabel: 'Icon label',
}

Default.argTypes = {
  ...TextInputStory.argTypes,
  icon: {
    name: 'icon',
    control: { type: 'object' },
  },
  iconPosition: {
    name: 'iconPosition',
    options: ['left', 'right'],
    control: { type: 'inline-radio' },
  },
  accessibilityLabel: {
    name: 'accessibilityLabel',
    control: { type: 'text' },
  },
}

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
    control: { type: 'select' },
  },
}
