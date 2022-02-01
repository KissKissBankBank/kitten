import React from 'react'
import { CheckList } from './index'

export default {
  component: CheckList,
  title: 'Feedback/CheckList',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="CheckList" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        {story()}
      </div>
    ),
  ],
}

export const Default = () => (
  <CheckList>
    <CheckList.Item done>Huit caractères minimum</CheckList.Item>
    <CheckList.Item done>Une minuscule</CheckList.Item>
    <CheckList.Item>Une majuscule</CheckList.Item>
    <CheckList.Item>Un chiffre</CheckList.Item>
  </CheckList>
)
