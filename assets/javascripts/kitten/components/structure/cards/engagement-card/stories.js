import React from 'react'
import styled from 'styled-components'
import { EngagementCard } from './index'
import {
  pxToRem,
  ScreenConfig,
  LoudspeakerIllustration,
  MixIllustration,
  PhoneIllustration,
  COLORS,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Cards/EngagementCard',
  component: EngagementCard,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="EngagementCard" />
      ),
    },
  },
  decorators: [
    story => (
      <StyledStory className="story-Container story-Grid story-Grid--thin">
        {story()}
      </StyledStory>
    ),
  ],
  argTypes: {
    icon: { control: null },
    backgroundColor: { control: 'color' },
    href: { control: 'text' },
  },
  args: {
    backgroundColor: COLORS.primary4,
    href: '#',
  },
}

const StyledEngagementCard = styled(EngagementCard)`
  height: ${pxToRem(130)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    height: ${pxToRem(140)};
  }
`

const StyledStory = styled.div`
  &:hover a,
  &:active a {
    opacity: 0.5;
  }

  & a:hover,
  & a:active {
    opacity: 1;
  }
`

export const Default = args => (
  <>
    <StyledEngagementCard {...args} icon={<PhoneIllustration />}>
      Fabrication française
    </StyledEngagementCard>
    <StyledEngagementCard
      {...args}
      className="k-u-hidden@s-down"
      icon={<LoudspeakerIllustration />}
    >
      Éducation
    </StyledEngagementCard>
    <StyledEngagementCard
      {...args}
      className="k-u-hidden@s-down"
      icon={<MixIllustration />}
    >
      Bio
    </StyledEngagementCard>
  </>
)
