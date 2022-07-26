import React from 'react'
import styled from 'styled-components'
import { CrowdfundingCard, Title, mq } from 'kitten'

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media ${mq.mobile} {
    grid-template-columns: 1fr;
  }
`

const data = [
  {
    title: 'Item A',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item B',
    imageSrc: '/kitten-2.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item C',
    imageSrc: '/kitten-3.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item D',
    imageSrc: '/kitten-4.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item E',
    imageSrc: '/kitten-5.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item F',
    imageSrc: '/kitten-6.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item G',
    imageSrc: '/kitten-7.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item H',
    imageSrc: '/kitten-8.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item I',
    imageSrc: '/kitten-9.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item J',
    imageSrc: '/kitten-0.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  {
    title: 'Item K',
    imageSrc: '/kitten-1.jpg',
    thumbSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
]

const CardComponent = ({ item }) => (
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
    ownerTitle="Title"
    ownerDescription="Custom description"
    titleProps={{
      tag: 'h4',
    }}
    cardTitle={item.title}
    cardSubTitle="Custom subtitle"
    titlesMinHeight
    progress={84}
    state="Custom state"
    stretch
  />
)

export const WithProjects = () => {
  return (
    <>
      <Title
        modifier="senary"
        className="k-u-margin-bottom-tripleHalf"
        noMargin
      >
        Les projets de Lorem-Ipsum
      </Title>
      <Grid>
        {data.map(item => (
          <CardComponent item={item} />
        ))}
      </Grid>
    </>
  )
}
