import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../components/typography/title'
import { TitleWithStroke } from '../../../components/typography/title-with-stroke'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { EngagementsCarousel } from './engagements-carousel'
import { FeaturedProjects } from './featured-projects'
import { PopularProjects } from './popular-projects'
import { NewsBlock } from './news/components/news-block'
import { TextWithSideImage } from './text-with-side-image'
import { Video } from './video'
import { DialogWithPictureBorder } from './dialog-with-picture-border'
import { Partners } from './partners'

const StyledHomePage = styled.div`
  .Homepage__section {
    margin-top: ${pxToRem(50)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-top: ${pxToRem(80)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-top: ${pxToRem(100)};
    }

    &.Homepage__section--lastSection {
      margin-bottom: ${pxToRem(50)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        margin-bottom: ${pxToRem(80)};
      }
      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        margin-bottom: ${pxToRem(100)};
      }
    }
  }

  .Homepage__section__title {
    font-size: ${stepToRem(-1)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(0)};
    }
  }

  .Homepage__section__carouselLink {
    display: block;
    text-align: right;
    text-decoration: none;
    ${TYPOGRAPHY.fontStyles.regular}
    color: ${COLORS.font1};
    transition: color .4s ease;

    span {
      font-size: ${stepToRem(-2)};
      margin-right: ${pxToRem(7)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(-1)};
        margin-right: ${pxToRem(8)};
      }
    }

    &:hover,
    &:focus,
    &:active {
      color: ${COLORS.primary2}
    }

    svg {
      vertical-align: center;
      fill: currentColor;
      transition: fill .4s ease;
    }
  }
`

const HomePage = () => (
  <StyledHomePage>
    <Container as="section" className="Homepage__section">
      <TitleWithStroke align="center" modifier="tertiary">
        La communauté des projets engagés
      </TitleWithStroke>
    </Container>

    <section>
      <EngagementsCarousel />
    </section>

    <Container as="section" className="Homepage__section">
      <FeaturedProjects />
    </Container>

    <Container as="section" className="Homepage__section">
      <Title
        tag="h2"
        className="
          Homepage__section__title
          k-u-margin-top-none
          k-u-margin-bottom-singleHalf@s-up
          k-u-margin-bottom-single@s-down
        "
      >
        Notre actu
      </Title>
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
    </Container>

    <section className="Homepage__section">
      <Container
        className="k-u-margin-bottom-singleHalf@s-up
          k-u-margin-bottom-single@s-down"
      >
        <Grid>
          <GridCol col={8}>
            <Title tag="h2" margin={false} className="Homepage__section__title">
              Nos projets populaires
            </Title>
          </GridCol>
          <GridCol col={4}>
            <a href="#" className="Homepage__section__carouselLink">
              <span className="k-u-hidden@xs-down">Voir tous les projets</span>
              <span className="k-u-hidden@s-up" aria-hidden>
                Tous les projets
              </span>
              <ArrowIcon />
            </a>
          </GridCol>
        </Grid>
      </Container>

      <PopularProjects />
    </section>

    <Container as="section" className="Homepage__section">
      <TextWithSideImage />
    </Container>
    
    <Container as="section" className="Homepage__section">
      <Partners />
    </Container>

    <Container as="section" className="Homepage__section">
      <Video />
    </Container>

    <section className="Homepage__section Homepage__section--lastSection">
      <DialogWithPictureBorder />
    </section>
  </StyledHomePage>
)

export default HomePage
