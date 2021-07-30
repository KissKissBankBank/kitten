import React from 'react'
import { COLORS } from '../../../..'
import { HorizontalCrowdfundingCard } from './index'

export default {
  title: 'Molecules/Cards/HorizontalCrowdfundingCard',
  component: HorizontalCrowdfundingCard,
  args: {
    href: '#',
    imageProps: {
      src: '/kitten.jpg',
    },
    title: 'Nulla vitae elit libero, a pharetra augue.',
    titleTag: 'h3',
    description: 'Aenean lacinia bibendum nulla sed consectetur.',
    info: null,
    progress: 69,
    progressColor: COLORS.primary1,
    noProgressOnMobile: false,
  },
  argTypes: {
    href: {
      name: 'href',
      control: { type: 'text' }
    },
    imageProps: {
      name: 'imageProps',
      control: { type: 'object' }
    },
    title: {
      name: 'title',
      control: { type: 'text' }
    },
    titleTag: {
      name: 'titleTag',
      control: { type: 'text' }
    },
    description: {
      name: 'description',
      control: { type: 'text' }
    },
    info: {
      name: 'info',
      options: [],
      control: { type: 'select' }
    },
    progress: {
      name: 'progress',
      control: { type: 'number' }
    },
    progressColor: {
      name: 'progressColor',
      control: { type: 'color' }
    },
    noProgressOnMobile: {
      name: 'noProgressOnMobile',
      control: { type: 'boolean' }
    }
  }
}

export const Default = (args) => {
  return (
    <HorizontalCrowdfundingCard {...args} />
  )
}
