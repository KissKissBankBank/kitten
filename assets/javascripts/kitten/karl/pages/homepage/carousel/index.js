import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, object, boolean } from '@storybook/addon-knobs'
import { CrowdfundingCard } from '../../../../components/cards/crowdfunding-card'
import { Carousel } from '../../../../components/carousel/carousel/carousel'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'

const data = [
  {
    title: 'Item A',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,0',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,1',
  },
  {
    title: 'Item B',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,2',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,3',
  },
  {
    title: 'Item C',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,4',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,5',
  },
  {
    title: 'Item D',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,6',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,7',
  },
  {
    title: 'Item E',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,8',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,9',
  },
]

export const HomepageCarousel = () => (
    <>
      <Carousel
        itemMinWidth={280}
        baseItemMarginBetween={CONTAINER_PADDING}
        paginationPosition={{
          default: 'bottom',
        }}
        hidePaginationOnMobile={true}
        showOtherPages={true}
      >
        {data.map(item => (
          <CrowdfundingCard
            key={`CrowdfundingCard${item.title}`}
            href="#"
            imageProps={{
              src: item.imageSrc,
              alt: 'Image alt',
              backgroundColor: '#d8d8d8',
              color: '#333',
            }}
            avatarProps={{
              src: item.thumbSrc,
              alt: 'Avatar alt',
            }}
            ownerTitle="Owner title"
            ownerDescription="Owner description"
            titleProps={{
              tag: 'h4',
            }}
            cardTitle={item.title}
            cardSubTitle="Custom subtitle"
            titlesMinHeight
            progress="84"
            state="Custom state"
          />
        ))}
      </Carousel>
    </>
  )
