import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { ArticleCard } from './article-card'

storiesOf('Cards/ArticleCard', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add(
    'default',
    withInfo('common info')(() => (
      <ArticleCard
        articleTitle={text('Article Title', 'Article Title')}
        articleSubTitle={text('Article SubTitle', 'Article SubTitle')}
      />
    )),
  )
