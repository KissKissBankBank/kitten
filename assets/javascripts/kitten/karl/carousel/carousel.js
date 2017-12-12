import React from 'react'
import Carousel from 'kitten/components/carousel/carousel'

import FakeCard from 'kitten/components/carousel/fake-card'
import { ProjectCard, MIN_WIDTH as ProjectCardMinWidth } from 'kitten/components/cards/project-card'

export const KarlCarouselFakeCard = (props) => {
  return (
    <Carousel
      itemMinWidth={FakeCard.MIN_WIDTH}
      renderItem={({item}) => {
        return (
          <FakeCard
            title={item.title}
          />
        )
      }}
      { ...props }
    />
  )
}

export const KarlCarouselProjectCard = (props) => {
  return (
    <Carousel
      itemMinWidth={ProjectCardMinWidth}
      renderItem={({item}) => {
        return (
          <ProjectCard
            title={item.title}
          />
        )
      }}
      { ...props }
    />
  )
}

