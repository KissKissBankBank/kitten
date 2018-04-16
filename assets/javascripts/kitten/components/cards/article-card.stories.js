import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { ArticleCard } from './article-card'
import GridDecorator from 'decorators/grid'

storiesOf('Cards/ArticleCard', module)
  .addDecorator(withKnobs)
  .addDecorator(GridDecorator)
  .add(
    'default',
    withInfo('common info')(() => (
      <ArticleCard
        articleTitle={text('Article Title', 'Article Title')}
        articleSubTitle={text('Article SubTitle', 'Article SubTitle')}
      />
    )),
  )
