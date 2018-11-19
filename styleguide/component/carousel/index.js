import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import CarouselWithProjectCard from './carousel-with-project-card'

export default () => {
  return (
    <Section title="Carousel" id="carousel">
      <Component
        title="Carousel with ProjectCard"
        id="components/carousel/carousel"
        component={CarouselWithProjectCard}
      />
    </Section>
  )
}
