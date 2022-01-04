import React from 'react'
import { ProjectCard } from './index'
import { DocsPage } from 'storybook/docs-page'
import { Text, Button } from 'kitten'

export default {
  title: 'Molecules/Cards/ProjectCard',
  component: ProjectCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ProjectCard" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid">{story()}</div>
    ),
  ],
}

const argTypes = {
  status: { control: 'select' },
  progressProps: { control: 'object' },
}

const args = {
  status: 'normal',
  imageProps: {
    src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    alt: '',
  },
  videoProps: {},
  videoSources: [],
  progressProps: {
    'aria-label': 'Progrès de la campagne',
    value: '55',
  },
}

export const Default = ({ progressProps, ...args }) => (
  <ProjectCard {...args}>
    <ProjectCard.Sticker
      className="k-u-transform-capitalize k-u-hidden@xs-down"
    >
      Prolongation
    </ProjectCard.Sticker>
    <ProjectCard.Title>
      The Office, la série culte décortiquée par S!CK
    </ProjectCard.Title>
    <ProjectCard.Line>
      <Text size="micro" fontStyle="italic">
        par{' '}
        <a href="#" className="k-u-link k-u-link-font1 k-u-weight-bold">
          Bidules
        </a>
      </Text>
    </ProjectCard.Line>
    <ProjectCard.ItemsLine>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="tiny">
          134
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          contributeurs
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="tiny">
          7 jours
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          restants
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="tiny">
          9 930 €
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          sur 12 000 €
        </Text>
      </ProjectCard.Item>
    </ProjectCard.ItemsLine>
    <ProjectCard.Progress {...progressProps} />
  </ProjectCard>
)

Default.args = args
Default.argTypes = argTypes

export const WithButton = ({ progressProps, ...args }) => (
  <ProjectCard {...args}>
    <ProjectCard.Sticker
      className="k-u-transform-capitalize k-u-hidden@xs-down"
    >
      Prolongation
    </ProjectCard.Sticker>
    <ProjectCard.Title>
      The Office, la série culte décortiquée par S!CK
    </ProjectCard.Title>
    <ProjectCard.Line>
      <Text size="micro" fontStyle="italic">
        par{' '}
        <a href="#" className="k-u-link k-u-link-font1 k-u-weight-bold">
          Bidules
        </a>
      </Text>
    </ProjectCard.Line>
    <ProjectCard.ItemsLine>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="tiny">
          134
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          contributeurs
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="tiny">
          7 jours
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          restants
        </Text>
      </ProjectCard.Item>
      <ProjectCard.Item>
        <Text className="k-u-ellipsis" weight="bold" size="tiny">
          9 930 €
        </Text>
        <Text className="k-u-ellipsis" size="micro">
          sur 12 000 €
        </Text>
      </ProjectCard.Item>
    </ProjectCard.ItemsLine>
    <ProjectCard.Progress {...progressProps} />
    <ProjectCard.Line>
      <Button fit="fluid" modifier="helium" size="tiny">
        Participer
      </Button>
    </ProjectCard.Line>
  </ProjectCard>
)

WithButton.args = args
WithButton.argTypes = argTypes

export const AsLink = args => <Default {...args} />

AsLink.args = {
  ...args,
  href: '//www.kisskissbankbank.com',
  'aria-label': 'The Office, la série culte décortiquée par S!CK',
}
AsLink.argTypes = argTypes

export const WithVideo = args => <Default {...args} />

WithVideo.args = {
  ...args,
  imageProps: undefined,
  videoProps: { className: 'videoClass' },
  videoSources: [
    {
      src:
        'https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm',
      type: 'video/webm',
    },
    {
      src:
        'https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4',
      type: 'video/mp4',
    },
  ],
}
WithVideo.argTypes = argTypes

export const Loading = args => (
  <ProjectCard {...args}>
    <ProjectCard.Title />
    <ProjectCard.Line />
    <ProjectCard.ItemsLine>
      <ProjectCard.Item />
      <ProjectCard.Item />
      <ProjectCard.Item />
    </ProjectCard.ItemsLine>
    <ProjectCard.Progress />
  </ProjectCard>
)

Loading.args = {
  ...args,
  imageProps: {},
  loading: true,
}
Loading.argTypes = argTypes
