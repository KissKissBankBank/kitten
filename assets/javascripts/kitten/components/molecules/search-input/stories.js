import React from 'react'
import { SearchInput } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../layout/container'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="SearchInput" />,
    },
  },
  decorators: [story => (
    <div className="story-Container">
      {story()}
    </div>
  )],
}

export const Default = () => (
  <SearchInput placeholder="Recherchez un projet, un porteur…" />
)
