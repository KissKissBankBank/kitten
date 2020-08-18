import React from 'react'
import { text } from '@storybook/addon-knobs'
import { ArticleCard as _ArticleCard } from './article-card'

export default {
  title: 'Cards',
  component: _ArticleCard,
}

export const ArticleCard = () => (
  <ArticleCard
    articleTitle={text('Article Title', 'Article Title')}
    articleSubTitle={text('Article SubTitle', 'Article SubTitle')}
  />
)
