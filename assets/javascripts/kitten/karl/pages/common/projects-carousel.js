import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import { Button } from '../../../components/buttons/button'
import { Carousel } from '../../../components/carousel/carousel'
import { ScreenConfig, SCREEN_SIZE_M } from '../../../constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from '../../../constants/grid-config'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { CrowdfundingCard } from '../../../components/cards/crowdfunding-card'
import { withMediaQueries } from '../../../hoc/media-queries'
import { pxToRem } from '../../../helpers/utils/typography'
import styled from 'styled-components'

const StyledThanks = styled.div`
  .ProjectsCarousel__gridCol {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-end;
  }

  .ProjectsCarousel__Header {
    flex: 1;

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-right: ${pxToRem(-CONTAINER_PADDING)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      margin-right: ${pxToRem(-CONTAINER_PADDING_MOBILE)};
    }
  }

  .ProjectsCarousel__titleCotnainer {
    display: flex;
    align-items: center;

    margin-left: ${pxToRem(-50)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      margin-left: 0;
    }
  }

  .ProjectsCarousel__stroke {
    margin-right: ${pxToRem(20)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      order: 2;
      width: 100%;
      margin-left: ${pxToRem(20)};
      margin-right: 0;
    }
  }

  .ProjectsCarousel__button {
    flex-shrink: 0;
    margin-left: ${pxToRem(10)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      position: absolute;
      bottom: 0;
      right: ${pxToRem(CONTAINER_PADDING)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      right: ${pxToRem(CONTAINER_PADDING_MOBILE)};
    }
  }

  .ProjectsCarousel__carouselContainer {
    position: relative;

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      padding-bottom: ${pxToRem(80)};
    }
  }
`

const ProjectsCarousel = ({
  title,
  description,
  buttonHref,
  buttonLabel,
  viewportIsMOrLess,
  viewportIsXSOrLess,
}) => {
  const renderButton = () => (
    <Button
      icon
      iconOnRight
      tag="a"
      href={buttonHref}
      className="ProjectsCarousel__button"
    >
      {buttonLabel}
      <ArrowIcon
        className="k-Button__icon k-ButtonIcon__svg"
        style={{ width: 6 }}
      />
    </Button>
  )

  return (
    <StyledThanks>
      <Marger bottom={viewportIsXSOrLess ? 2 : 3}>
        <Container>
          <Grid>
            <GridCol
              col-l="10"
              offset-l="1"
              className="ProjectsCarousel__gridCol"
            >
              <div className="ProjectsCarousel__Header">
                <Marger
                  bottom={description ? 0.5 : 0}
                  className="ProjectsCarousel__titleContainer"
                >
                  <HorizontalStroke className="ProjectsCarousel__stroke" />
                  <Title tag="h2" modifier="quaternary" margin={false}>
                    {title}
                  </Title>
                </Marger>

                {!!description && (
                  <Marger top=".5">
                    <Text size="tiny" color="font1" weight="light">
                      {description}
                    </Text>
                  </Marger>
                )}
              </div>

              {!viewportIsMOrLess && renderButton()}
            </GridCol>
          </Grid>
        </Container>
      </Marger>

      <Container
        fullWidthBelowScreenSize={SCREEN_SIZE_M}
        className="ProjectsCarousel__carouselContainer"
      >
        <Carousel
          itemMinWidth={280}
          baseItemMarginBetween={CONTAINER_PADDING}
          data={[
            {
              title: 'Item A',
              imageSrc: 'http://placekitten.com/500/300',
              thumbSrc: 'http://placekitten.com/80/80',
            },
            {
              title: 'Item B',
              imageSrc: 'http://placekitten.com/501/301',
              thumbSrc: 'http://placekitten.com/81/81',
            },
            {
              title: 'Item C',
              imageSrc: 'http://placekitten.com/502/302',
              thumbSrc: 'http://placekitten.com/82/82',
            },
            {
              title: 'Item D',
              imageSrc: 'http://placekitten.com/503/303',
              thumbSrc: 'http://placekitten.com/83/83',
            },
            {
              title: 'Item E',
              imageSrc: 'http://placekitten.com/504/304',
              thumbSrc: 'http://placekitten.com/84/84',
            },
          ]}
          renderItem={({ item }) => (
            <CrowdfundingCard
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
              progress="84"
              state="Custom state"
            />
          )}
        />

        {viewportIsMOrLess && renderButton()}
      </Container>
    </StyledThanks>
  )
}

ProjectsCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonHref: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  viewportIsMOrLess: PropTypes.bool.isRequired,
  viewportIsXSOrLess: PropTypes.bool.isRequired,
}

ProjectsCarousel.defaultProps = {
  description: null,
}

export default withMediaQueries({
  viewportIsMOrLess: true,
  viewportIsXSOrLess: true,
})(ProjectsCarousel)
