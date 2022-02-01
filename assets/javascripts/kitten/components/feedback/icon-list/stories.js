import React from 'react'
import { IconList } from './index'
import { Text, LockIcon } from '../../..'

export default {
  component: IconList,
  title: 'Feedback/IconList',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="IconList" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
}

export const Default = () => (
  <IconList>
    <IconList.Item
      icon={<LockIcon color="#333" />}
      iconProps={{
        style: { backgroundColor: '#FFEBE0', borderColor: '#FFEBE0' },
      }}
    >
      <Text weight="light">
        <Text weight="regular">Donnez de la visibilité</Text> et du sens à votre
        marque, entreprise, collectivité, association, fondation…
      </Text>
    </IconList.Item>
    <IconList.Item>
      Donnez de la visibilité et du sens à votre marque, entreprise,
      collectivité, association, fondation…
    </IconList.Item>
    <IconList.Item>
      Donnez de la visibilité et du sens à votre marque, entreprise,
      collectivité, association, fondation…
    </IconList.Item>
    <IconList.Item>
      Donnez de la visibilité et du sens à votre marque, entreprise,
      collectivité, association, fondation…
    </IconList.Item>
  </IconList>
)
