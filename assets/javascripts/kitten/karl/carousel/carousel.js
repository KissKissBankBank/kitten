import React from 'react'
import Carousel from 'kitten/components/carousel/carousel'

import FakeCard from 'kitten/components/carousel/fake-card'

export const KarlCarouselFakeCard = (props) => {
  return (
    <Carousel
      itemMinWidth={FakeCard.MIN_WIDTH}
      renderItem={({item, index, style}) => {
        return (
          <FakeCard
            key={index}
            style={style}
            title={item.title}
          />
        )
      }}
      { ...props }
    />
  )
}

