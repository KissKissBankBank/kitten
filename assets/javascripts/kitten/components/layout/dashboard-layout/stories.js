import React from 'react'
import styled from 'styled-components'
import { DocsPage } from 'storybook/docs-page'

import { DashboardLayout } from './index'

import { StoryLayout } from './stories/layout'
import { StoryWithTable } from './stories/with-table'
import { StoryWithDashboard } from './stories/with-dashboard'
import { StoryWithReward } from './stories/with-reward'
import { StoryWithFlow } from './stories/with-flow'

export default {
  title: 'Layout/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'flow/index.js',
            'flow/side-card.js',
            'flow/side-modal.js',
          ]}
          importString="DashboardLayout"
        />
      ),
    },
  },
  args: {
    quickAccessLinkText: 'Accéder au contenu',
    backLinkProps: {
      href: '#',
      children: 'Retour au site',
    },
    buttonProps: {
      openLabel: 'Ouvrir le menu',
      closeLabel: 'Fermer le menu',
    },
    fullHeightContent: undefined,
    selectedView: 'table',
    displayHeader: true,
    displayAlerts: false,
    status: 'success',
    flowProps: {
      flowLoading: false,
      flowShowTwoButtons: false,
      flowShowUnsavedText: false,
    },
    toasterIsOpen: false,
    multiMenu: false,
  },
  argTypes: {
    quickAccessLinkText: { control: 'text' },
    backLinkProps: { control: 'object' },
    buttonProps: { control: 'object' },
    fullHeightContent: {
      description:
        'For the purpose of the story, depends on the type of content',
      control: 'boolean',
    },
    selectedView: {
      name: 'Selected View (story prop)',
      control: 'radio',
      options: ['flow', 'dashboard', 'table', 'rewards'],
    },
    displayHeader: { name: 'displayHeader (story prop)', control: 'boolean' },
    displayAlerts: { name: 'displayAlerts (story prop)', control: 'boolean' },
    toasterIsOpen: { name: 'toasterIsOpen (story prop)', control: 'boolean' },
    status: {
      name: 'Project status (story prop)',
      control: 'radio',
      options: ['danger', 'success', 'warning', 'neutral', 'none'],
    },
    flowProps: { name: 'Flow Props (story prop)', control: 'object' },
    multiMenu: { name: 'MultiMenu (story prop)', control: 'boolean' },
  },
}

export const Default = args => {
  return (
    <StoryLayout {...args}>
      <div>Content</div>
    </StoryLayout>
  )
}

export const WithTableContent = args => {
  return (
    <StoryLayout {...args}>
      <StoryWithTable />
    </StoryLayout>
  )
}

export const WithDashboardContent = args => {
  return (
    <StoryLayout {...args}>
      <StoryWithDashboard />
    </StoryLayout>
  )
}

export const WithRewardContent = args => {
  return (
    <StoryLayout {...args}>
      <StoryWithReward />
    </StoryLayout>
  )
}

export const WithFlowContent = ({ flowProps, ...args }) => {
  return (
    <StoryLayout {...args}>
      <StoryWithFlow {...flowProps} />
    </StoryLayout>
  )
}

const FlowStoryContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`

export const SubcomponentFlow = args => (
  <FlowStoryContainer>
    <StoryWithFlow {...args} />
  </FlowStoryContainer>
)

SubcomponentFlow.args = {
  flowLoading: false,
  flowShowTwoButtons: false,
  flowShowUnsavedText: false,
}

SubcomponentFlow.argTypes = {
  flowLoading: { control: 'boolean' },
  flowShowTwoButtons: { control: 'boolean' },
  flowShowUnsavedText: { control: 'boolean' },
}
