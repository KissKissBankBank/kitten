import React from 'react'
import Carousel from 'kitten/components/carousel/carousel'

import FakeCard from 'kitten/components/carousel/fake-card'
import {
  ProjectCard,
  MIN_WIDTH as ProjectCardMinWidth,
  MARGIN_BETWEEN as ProjectCardMarginBetween,
} from 'kitten/components/cards/project-card'

export const KarlCarouselFakeCard = (props) => {
  return (
    <Carousel
      itemMinWidth={FakeCard.MIN_WIDTH}
      itemMarginBetween={FakeCard.MARGIN_BETWEEN}
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
      itemMarginBetween={ProjectCardMarginBetween}
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

