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

const HomepageNews = props => (
  <Container>
    <StyledSection tag="h2">
      <StyledTitle>Nos 4 actus</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
          {
            title: 'Donec sed odio dui.',
            excerpt:
              'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
        ]}
      />
    </StyledSection>
    <StyledSection tag="h2">
      <StyledTitle>Nos 3 actus</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
          {
            title: 'Donec sed odio dui.',
            excerpt:
              'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
        ]}
      />
    </StyledSection>
    <StyledSection tag="h2">
      <StyledTitle>Nos 2 actus horizontales</StyledTitle>
      <NewsBlock
        horizontal
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
        ]}
      />
    </StyledSection>
    <StyledSection tag="h2">
      <StyledTitle>Nos 2 actus verticales</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
          {
            title: 'Cras mattis consectetur purus sit amet fermentum.',
            excerpt:
              'Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. ',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
        ]}
      />
    </StyledSection>
    <StyledSection tag="h2">
      <StyledTitle>Notre actu</StyledTitle>
      <NewsBlock
        contents={[
          {
            title:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing enean ligula eget dolor.',
            excerpt:
              'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            imageUrlPortrait: 'https://placekitten.com/300/400',
            imageUrlLandscape: 'https://placekitten.com/600/300',
          },
        ]}
      />
    </StyledSection>
  </Container>
)

export default HomepageNews
