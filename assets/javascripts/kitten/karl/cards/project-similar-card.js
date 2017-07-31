import React, { Component } from 'react'
import { ProjectSimilarCard } from 'kitten/components/cards/project-similar-card'

export const KarlProjectSimilarCard = () => (
  <ProjectSimilarCard
    step="1/5"
    imageSrc="https://placehold.it/400x200/4a84ff/4a84ff"
    title="Lorem ipsum dolor sit amet"
    paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
  />
)

export const KarlProjectSimilarCardInfos = props => {
  const tags = [
    { key: 'tag-1', item: 'Tag 1' },
    { key: 'tag-2', item: 'Tag 2' },
  ]

  const infos = [
    { key: 'info-1', text: 'Info 1', value: 'xx', locked: false },
    { key: 'info-2', text: 'Info 2', value: 'xx', locked: false },
    { key: 'info-3', text: 'Info 3', value: 'xx', locked: false },
  ]

  return (
    <ProjectSimilarCard
      step="1/5"
      title="Lorem ipsum dolor sit amet"
      tags={ tags }
      infos={ infos }
      paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    />
  )
}

export const KarlProjectSimilarLoader = () => (
  <ProjectSimilarCard
    step="1/5"
    loading
  />
)
