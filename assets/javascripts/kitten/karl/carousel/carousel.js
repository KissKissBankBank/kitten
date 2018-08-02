import React from 'react'
import { Container } from 'kitten/components/grid/container'
import { Carousel } from 'kitten/components/carousel/carousel'
import {
  ProjectCard,
  MIN_WIDTH as ProjectCardMinWidth,
  MARGIN_BETWEEN as ProjectCardMarginBetween,
} from 'kitten/components/cards/project-card'

import { SCREEN_SIZE_M } from 'kitten/constants/screen-config'

export const KarlCarouselProjectCard = props => {
  return (
    <Container fullWidthBelowScreenSize={SCREEN_SIZE_M}>
      <Carousel
        itemMinWidth={ProjectCardMinWidth}
        baseItemMarginBetween={ProjectCardMarginBetween}
        renderItem={({ item }) => {
          return <ProjectCard linkHref={item.linkHref} title={item.title} />
        }}
        {...props}
      />
    </Container>
  )
}
