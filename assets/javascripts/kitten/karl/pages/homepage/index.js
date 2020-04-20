import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../components/typography/title'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { Video } from './video'
import { NewsBlock } from './news/components/news-block'
import { DialogWithPictureBorder } from './dialog-with-picture-border'
import { FeaturedProjects } from './featured-projects'
import { PopularProjects } from './carousel'
import { TextWithSideImage } from './text-with-side-image'

const StyledHomePage = styled.div`
  section.Homepage__Section {
    margin-top: ${pxToRem(50)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-top: ${pxToRem(80)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-top: ${pxToRem(100)};
    }

    &.Homepage__LastSection {
      margin-bottom: ${pxToRem(50)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        margin-bottom: ${pxToRem(80)};
      }
      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        margin-bottom: ${pxToRem(100)};
      }
    }
  }
`

const StyledHorizontalStrokeContainer = styled.div`
  margin-top: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin-top: ${pxToRem(20)};
    margin-bottom: ${pxToRem(40)};
  }
`

const StyledHorizontalStroke = styled.div`
  display: block;
  border: none;
  background-color: ${COLORS.font1};
  margin: 0 auto;
  width: ${pxToRem(30)};
  height: ${pxToRem(4)};

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    width: ${pxToRem(40)};
    height: ${pxToRem(6)};
  }
`

const StyledSectionTitle = styled(Title)`
  font-size: ${stepToRem(-1)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(0)};
  }
`

const StyledCarouselLink = styled.a`
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


`

const HomePage = () => (
  <StyledHomePage>
    <Container as="section" className="Homepage__Section">
      <Title className="k-u-align-center" modifier="tertiary" margin={false}>
        La communauté des projets engagés
      </Title>
      <StyledHorizontalStrokeContainer>
        <StyledHorizontalStroke />
      </StyledHorizontalStrokeContainer>
    </Container>

    <Container as="section" className="Homepage__Section">
      <FeaturedProjects />
    </Container>

    <Container as="section" className="Homepage__Section">
      <StyledSectionTitle
        tag="h2"
        className="
          k-u-margin-top-none
          k-u-margin-bottom-singleHalf@s-up
          k-u-margin-bottom-single@s-down
        "
      >
        Notre actu
      </StyledSectionTitle>
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

    <section className="Homepage__Section">
      <Container
        className="k-u-margin-bottom-singleHalf@s-up
          k-u-margin-bottom-single@s-down"
      >
        <Grid>
          <GridCol col={8}>
            <StyledSectionTitle tag="h2" margin={false}>
              Nos projets populaires
            </StyledSectionTitle>
          </GridCol>
          <GridCol col={4}>
            <StyledCarouselLink href="#">
              <span className="k-u-hidden@xs-down">Voir tous les projets</span>
              <span className="k-u-hidden@s-up" aria-hidden>
                Tous les projets
              </span>
              <ArrowIcon />
            </StyledCarouselLink>
          </GridCol>
        </Grid>
      </Container>

      <PopularProjects />
    </section>

    <Container as="section" className="Homepage__Section">
      <TextWithSideImage />
    </Container>

    <Container as="section" className="Homepage__Section">
      <Video />
    </Container>

    <section className="Homepage__Section Homepage__LastSection">
      <DialogWithPictureBorder />
    </section>
  </StyledHomePage>
)

export default HomePage
