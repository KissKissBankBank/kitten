import React from 'react'
import { HorizontalCrowdfundingCard } from 'kitten'
import { FlexWrapper } from './index.js'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Layout/FlexWrapper',
  component: FlexWrapper,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="FlewWrapper" />,
    },
  },
  args: {
    gap: 5,
    padding: 15,
    direction: 'column',
  },
  argTypes: {
    gap: {
      name: 'gap',
      control: 'object',
    },
    padding: {
      name: 'padding',
      control: 'object',
    },
    direction: {
      name: 'direction',
      control: 'inline-radio',
    },
  },
}

export const Default = args => {
  return (
    <FlexWrapper {...args}>
      <HorizontalCrowdfundingCard />
      <HorizontalCrowdfundingCard />
      <HorizontalCrowdfundingCard />
      <HorizontalCrowdfundingCard />
    </FlexWrapper>
  )
}
