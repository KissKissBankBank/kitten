import React from 'react'
import { COLORS, ClockCircleIcon, CheckedCircleIcon, Text } from '../../../..'
import { HorizontalCrowdfundingCard } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Cards/HorizontalCrowdfundingCard',
  component: HorizontalCrowdfundingCard,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="HorizontalCrowdfundingCard"
        />
      ),
    },
  },
  args: {
    href: '#',
    imageProps: {
      src: '/kitten.jpg',
    },
    title: 'Nulla vitae elit libero, a pharetra augue.',
    titleTag: 'h3',
    description: 'Aenean lacinia bibendum nulla sed consectetur.',
    info: 'lastday',
    progress: 69,
    progressColor: COLORS.primary1,
    noProgressOnMobile: false,
  },
  argTypes: {
    href: {
      name: 'href',
      control: { type: 'text' },
    },
    imageProps: {
      name: 'imageProps',
      control: { type: 'object' },
    },
    title: {
      name: 'title',
      control: { type: 'text' },
    },
    titleTag: {
      name: 'titleTag',
      control: { type: 'text' },
    },
    description: {
      name: 'description',
      control: { type: 'text' },
    },
    info: {
      name: 'info',
      options: ['lastday', 'lastdays', 'started', 'success', 'failed'],
      descrition: 'Any node will do, this select shows various possibilities',
      control: { type: 'select' },
    },
    progress: {
      name: 'progress',
      control: { type: 'number' },
    },
    progressColor: {
      name: 'progressColor',
      control: { type: 'color' },
    },
    noProgressOnMobile: {
      name: 'noProgressOnMobile',
      control: { type: 'boolean' },
    },
  },
}

const InfoComponent = ({ info }) => {
  switch (info) {
    case 'lastday':
      return (
        <div className="k-u-flex k-u-flex-alignItems-center">
          <ClockCircleIcon
            width="12"
            height="12"
            color={COLORS.background1}
            bgColor={COLORS.primary1}
            className="k-u-margin-right-noneHalf"
          />
          <Text weight="regular" size="micro" color="primary1">
            Dernier jour&nbsp;!
          </Text>
        </div>
      )
    case 'lastdays':
      return (
        <div className="k-u-flex k-u-flex-alignItems-center">
          <ClockCircleIcon
            width="12"
            height="12"
            color={COLORS.background1}
            bgColor={COLORS.primary1}
            className="k-u-margin-right-noneHalf"
          />
          <Text weight="regular" size="micro" color="primary1">
            Derniers jours&nbsp;!
          </Text>
        </div>
      )
    case 'started':
      return (
        <div className="k-u-flex k-u-flex-alignItems-center">
          <ClockCircleIcon
            width="12"
            height="12"
            color={COLORS.background1}
            bgColor={COLORS.primary1}
            className="k-u-margin-right-noneHalf"
          />
          <Text weight="regular" size="micro" color="font1">
            En cours
          </Text>
        </div>
      )
    case 'success':
      return (
        <div className="k-u-flex k-u-flex-alignItems-center">
          <CheckedCircleIcon
            width="12"
            height="12"
            color={COLORS.background1}
            bgColor={COLORS.valid}
            className="k-u-margin-right-noneHalf"
          />
          <Text weight="regular" size="micro" color="font1">
            Réussi
          </Text>
        </div>
      )
    default:
      return null
  }
}

export const Default = args => {
  return (
    <HorizontalCrowdfundingCard
      {...args}
      info={<InfoComponent info={args.info} />}
    />
  )
}
