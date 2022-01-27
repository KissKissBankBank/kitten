import React from 'react'
import { BurgerIcon } from './index'
import { COLORS } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Graphics/Icons/BurgerIcon',
  component: BurgerIcon,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="BurgerIcon" />,
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
    mainColor: { control: 'string' },
    hoverColor: { control: 'string' },
    isActive: { control: 'boolean' },
    iconTitle: {
      control: null,
      description: 'Deprecated. Prefere use `title` prop instead',
    },
    title: { control: 'string' },
    width: { control: 'string' },
    height: { control: 'string' },
  },
  args: {
    mainColor: COLORS.font1,
    hoverColor: COLORS.primary1,
    isActive: false,
    title: null,
    width: 12,
    height: 10,
    isAnimatedOnHover: true,
  },
}

export const Default = args => <BurgerIcon {...args} />
