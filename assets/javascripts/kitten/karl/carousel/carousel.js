import React from 'react'
import Radium from 'radium'
import { Container } from 'kitten/components/grid/container'
import { Carousel } from 'kitten/components/carousel/carousel'
import {
  ProjectCard,
  MIN_WIDTH as ProjectCardMinWidth,
  MOBILE_MIN_WIDTH as MobileProjectCardWidth,
  MARGIN_BETWEEN as ProjectCardMarginBetween,
  MOBILE_MARGIN_BETWEEN as MobileProjectCardMarginBeetween,
} from 'kitten/components/cards/project-card'
import { SCREEN_SIZE_M } from 'kitten/constants/screen-config'

export const KarlCarouselProjectCard = props => {
  return (
    <Container fullWidthBelowScreenSize={SCREEN_SIZE_M}>
      <Carousel
        itemMinWidth={ProjectCardMinWidth}
        mobileItemMinWidth={MobileProjectCardWidth}
        baseItemMarginBetween={ProjectCardMarginBetween}
        mobilebaseItemMarginBetween={MobileProjectCardMarginBeetween}
        renderItem={({ item }) => {
          return <ProjectCard linkHref={item.linkHref} title={item.title} />
        }}
        {...props}
      />
    </Container>
  )
}
