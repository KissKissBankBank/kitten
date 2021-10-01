import React from 'react'
import { CrowdfundingCard } from './index'
import { Text, parseHtml } from '../../../..'
import { STATE_CHOICES } from './stories/project-state'
import { DocsPage } from 'storybook/docs-page'

const args = {
  additionalInfo: '',
  avatarProps: {
    alt: '',
    src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  buttonText: undefined,
  cardSubTitle: 'Sed ut perspiciatis unde omnis iste natus error Lorem',
  cardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  forceVersion: '',
  href: '#',
  imageContainerBackground: '',
  imageContainerRatio: 10 / 16,
  imageProps: { alt: '', src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` },
  info1: 'Lorem ipsum…',
  info2: 'Lorem ipsum…',
  info3: 'Lorem ipsum…',
  loading: false,
  ownerDescription: 'Owner description',
  ownerTitle: 'Owner title',
  progress: 42,
  progressColor: '',
  progressLabel: 'Crowdfunding progress',
  state: 'Current state',
  stretch: false,
  subTitleTruncate: false,
  titleProps: {},
  titlesMinHeight: true,
  titleTruncate: false,
  videoProps: undefined,
  videoSources: undefined,
  widgetState: '',
}

const argTypes = {
  additionalInfo: { control: 'text' },
  avatarProps: { control: 'object' },
  cardSubTitle: { control: 'text' },
  cardTitle: { control: 'text' },
  href: { control: 'text' },
  imageContainerBackground: { control: 'color' },
  imageProps: { control: 'object' },
  info1: { control: 'text' },
  info2: { control: 'text' },
  info3: { control: 'text' },
  loading: { control: 'boolean' },
  ownerDescription: { control: 'text' },
  ownerTitle: { control: 'text' },
  progress: { control: 'number' },
  progressColor: { control: 'text' },
  imageContainerRatio: { control: 'number' },
  state: { control: 'text' },
  stretch: { control: 'boolean' },
  subTitleTruncate: { control: 'boolean' },
  titleProps: { control: 'object' },
  titlesMinHeight: { control: 'boolean' },
  titleTruncate: { control: 'boolean' },
  videoProps: { control: 'object' },
  videoSources: { control: 'object' },
  widgetState: { control: 'text' },
  buttonText: { control: 'text' },
  forceVersion: {
    control: 'select',
    options: ['null', 'mobile', 'tablet', 'desktop'],
  },
  progressLabel: { control: 'text' },
}

export default {
  component: CrowdfundingCard,
  title: 'Molecules/Cards/CrowdfundingCard',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'components/button.js',
            'components/image.js',
            'components/informations.js',
            'components/progress.js',
            'components/state.js',
            'components/subtitle.js',
            'components/title.js',
          ]}
          importString="CrowdfundingCard"
        />
      ),
    },
    componentSubtitle:
      'The CrowdfundingCardWidget is a clickable card that displays info about a crowdfunding campaign.',
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  args,
  argTypes,
}

export const KissKissCrowdfundingCard = args => <CrowdfundingCard {...args} />
KissKissCrowdfundingCard.args = args
KissKissCrowdfundingCard.argTypes = argTypes

export const KissKissCrowdfundingCardWithVideo = KissKissCrowdfundingCard.bind(
  {},
)
KissKissCrowdfundingCardWithVideo.args = {
  ...args,
  imageProps: undefined,
  videoProps: { className: 'videoClass' },
  videoSources: [
    {
      src:
        'https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.webm',
      type: 'video/webm',
    },
    {
      src:
        'https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.mp4',
      type: 'video/mp4',
    },
  ],
}
KissKissCrowdfundingCardWithVideo.argTypes = argTypes

const Info = ({ label, text }) => (
  <span className="k-u-inlineFlex k-u-flex-direction-column">
    <Text
      tag="strong"
      weight="bold"
      size="tiny"
      className="k-u-inlineFlex@s-down"
    >
      {parseHtml(text)}
    </Text>
    <Text weight="light" size="tiny">
      {parseHtml(label)}
    </Text>
  </span>
)

export const LendopolisCrowdfundingCard = KissKissCrowdfundingCard.bind({})
LendopolisCrowdfundingCard.args = {
  ...args,
  ownerTitle: 'Urbasolar Energy Ocean Indien 6',
  cardTitle: 'Centrale solaire Urbasolar Le Port',
  cardSubTitle: 'Obligation convertible',
  info1: <Info label="maturité" text="48 mois" />,
  info2: <Info label="sur 157 000 €" text="157 000 €" />,
  info3: <Info label="Taux d'intérêt" text="5,0%" />,
  widgetState: STATE_CHOICES['None'],
  additionalInfo: 'Collecte réservée aux départements : 92, 34, 12, 82',
  title: 'Aller sur la collecte …',
  imageContainerRatio: 9 / 16,
  state: undefined,
}
LendopolisCrowdfundingCard.argTypes = {
  ...argTypes,
  widgetState: { control: 'select', options: STATE_CHOICES },
}
