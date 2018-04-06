import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { ArticleCard } from './article-card'

storiesOf('Cards/ArticleCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ArticleCard
      articleTitle={text('Article Title', 'Article Title')}
      articleSubTitle={text('Article SubTitle', 'Article SubTitle')}
    />
  ))
