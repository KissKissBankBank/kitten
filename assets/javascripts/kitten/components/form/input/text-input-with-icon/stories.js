import React from 'react'
import { TextInputWithIcon } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'
import { CheckedCircleIcon, WarningCircleIcon, Loader, COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: TextInputWithIcon,
  title: 'Form/Input/TextInputWithIcon',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="TextInputWithIcon" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: TextInputStory.args,
  argTypes: TextInputStory.argTypes,
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
