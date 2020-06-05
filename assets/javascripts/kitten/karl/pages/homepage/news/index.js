import React from 'react'
import styled from 'styled-components'
import { NewsBlock } from './components/news-block'
import { Container } from '../../../../components/grid/container'
import { Title } from '../../../../components/typography/title'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledSection = styled.section`
  margin: ${pxToRem(50)} 0;
`

const StyledTitle = styled(Title)`
  margin: 0 0 ${pxToRem(10)};
  font-size: ${stepToRem(-1)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin: 0 0 ${pxToRem(15)};
    font-size: ${stepToRem(0)};
  }
`

const HomepageNews = () => (
  <Container>
    <StyledSection>
      <StyledTitle tag="h2">Nos 4 actus</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,1',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,1',
            url: '#',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,2',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,2',
            url: '#',
          },
          {
            title: 'Donec sed odio dui.',
            excerpt:
              'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,3',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,3',
            url: '#',
          },
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,4',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,4',
            url: '#',
          },
        ]}
      />
    </StyledSection>
    <StyledSection>
      <StyledTitle tag="h2">Nos 3 actus</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,5',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,5',
            url: '#',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,6',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,6',
            url: '#',
          },
          {
            title: 'Donec sed odio dui.',
            excerpt:
              'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,7',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,7',
            url: '#',
          },
        ]}
      />
    </StyledSection>
    <StyledSection>
      <StyledTitle tag="h2">Nos 2 actus horizontales</StyledTitle>
      <NewsBlock
        horizontal
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,8',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,8',
            url: '#',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,9',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,9',
            url: '#',
          },
        ]}
      />
    </StyledSection>
    <StyledSection>
      <StyledTitle tag="h2">Nos 2 actus verticales</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,0',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,0',
            url: '#',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,1',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,1',
            url: '#',
          },
        ]}
      />
    </StyledSection>
    <StyledSection>
      <StyledTitle tag="h2">Notre actu</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait:
              'https://source.unsplash.com/random/300x400?kitten,2',
            imageUrlLandscape:
              'https://source.unsplash.com/random/600x300?kitten,2',
            url: '#',
          },
        ]}
      />
    </StyledSection>
  </Container>
)

export default HomepageNews
