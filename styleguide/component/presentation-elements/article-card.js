import React from 'react'
import { ArticleCard } from 'kitten/components/cards/article-card'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Article card" className="k-Grid__col--3@m">
        <ArticleCard />
      </Example>
      <Example title="Clickable article card" className="k-Grid__col--3@m">
        <ArticleCard href="#" />
      </Example>
    </div>
  )
}
