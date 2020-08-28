import React from 'react'
import { text } from '@storybook/addon-knobs'
import { ArticleCard as _ArticleCard } from './index'

export default {
  title: 'Cards/ArticleCard',
  component: _ArticleCard,
}

export const ArticleCard = () => (
  <ArticleCard
    articleTitle={text('Article Title', 'Article Title')}
    articleSubTitle={text('Article SubTitle', 'Article SubTitle')}
  />
)
