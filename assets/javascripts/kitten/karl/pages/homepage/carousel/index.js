import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, object, boolean } from '@storybook/addon-knobs'
import { CrowdfundingCard } from '../../../../components/cards/crowdfunding-card'
import { Carousel } from '../../../../components/carousel/carousel/carousel'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import { Container } from '../../../../components/grid/container'
import { mediaQueries } from '../../../../hoc/media-queries'

const data = [
  {
    title: 'Atelier d’optique bruxellois dédié à l’upcycling et au cust…',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,0',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,1',
  },
  {
    title: 'Keep It Silky',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,2',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,3',
  },
  {
    title:
      '"Odyssée" une exposition itinérante de Fred Kleinberg encore plus long et tout ça',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,4',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,5',
  },
  {
    title: 'Les Arts dessinés : devenez abonné-fondateur',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,6',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,7',
  },
  {
    title: 'Cras mattis consectetur purus sit amet fermentum.',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,8',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,9',
  },
  {
    title: 'Maecenas faucibus mollis interdum.',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,9',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,8',
  },
  {
    title:
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.',
    imageSrc: 'https://source.unsplash.com/random/500x300?kitten,7',
    thumbSrc: 'https://source.unsplash.com/random/80x80?kitten,6',
  },
]

const PopularProjectsBase = ({ viewportIsMOrLess, viewportIsSOrLess }) => {
  let padding = 40
  if (viewportIsMOrLess) {
    padding = 20
  }
  if (viewportIsSOrLess) {
    padding = 10
  }

  return (
    <Container fullWidthBelowScreenSize="M">
      <Carousel
        itemMinWidth={viewportIsSOrLess ? 150 : 280}
        baseItemMarginBetween={padding}
        paginationPosition={{
          default: 'bottom-right',
        }}
        hidePagination={viewportIsMOrLess ? true : false}
        showOtherPages={viewportIsMOrLess ? true : false}
        showPageSquares={viewportIsMOrLess ? false : true}
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
              tag: 'h3',
            }}
            cardTitle={item.title}
            cardSubTitle="Custom subtitle"
            titlesMinHeight
            progress="84"
            state="Custom state"
          />
        ))}
      </Carousel>
    </Container>
  )
}

export const PopularProjects = mediaQueries(PopularProjectsBase, {
  viewportIsMOrLess: true,
  viewportIsSOrLess: true,
})
