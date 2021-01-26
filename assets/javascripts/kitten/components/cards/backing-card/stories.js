import React from 'react'
import styled from 'styled-components'
import { BackingCard } from './index'
import {
  pxToRem,
  ScreenConfig,
  Container,
  Grid,
  GridCol,
  Title,
  Tag,
  Carousel,
} from '../../../index'
import { useMedia } from '../../../helpers/utils/use-media-query'
import { getMinQuery } from '../../../helpers/utils/media-queries'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 335px);
  gap: 50px;
  align-items: start;

  & > * {
    height: inherit;
  }
`

const StyledCarouselContainer = styled.div`
  margin: 40px 0;

  .k-Carousel--showOtherPages .k-Carousel__inner {
    padding: 0 ${pxToRem(70)} 0 ${pxToRem(20)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: 0 ${pxToRem(120)} 0 ${pxToRem(40)};
    }
  }
`

export default {
  title: 'Cards/BackingCard',
  component: BackingCard,
}

export const Default = () => {
  return (
    <Container>
      <Grid>
        <GridCol col="6" col-l="3">
          <BackingCard>
            <BackingCard.Image>
              <img src="/kitten.jpg" alt="" />
            </BackingCard.Image>
            <BackingCard.Title>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </BackingCard.Title>
            <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
            <BackingCard.Info
              legend="Prix de livraison&nbsp;:"
              value="5&nbsp;€ (en France)"
            />
            <BackingCard.Info
              legend="Livraison estimée&nbsp;:"
              value="Janvier 2022"
            />
            <BackingCard.Description>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum.
              </p>
              <p>
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p>
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p>
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </BackingCard.Description>
            <BackingCard.TagList>
              <Tag as="li">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li">
                <strong className="k-u-weight-regular">2/6</strong> disponibles
              </Tag>
            </BackingCard.TagList>
            <BackingCard.Button>Je soutiens</BackingCard.Button>
          </BackingCard>
        </GridCol>
      </Grid>
    </Container>
  )
}

const Row = props => {
  return (
    <Container>
      <StyledGrid {...props}>
        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>
      </StyledGrid>
    </Container>
  )
}

export const MultipleCases = () => (
  <>
    <Title className="k-u-margin-top-quintuple k-u-margin-bottom-single">
      No constraints
    </Title>
    <Row />
    <Title className="k-u-margin-top-quintuple k-u-margin-bottom-single">
      100% height
    </Title>
    <Row style={{ height: '100%' }} />
    <Title className="k-u-margin-top-quintuple k-u-margin-bottom-single">
      300x520 (Mobile Carousel)
    </Title>
    <Row style={{ height: 520, gridTemplateColumns: 'repeat(8, 300px)' }} />
  </>
)

export const InACarouselComponent = () => {
  const itemMinWidth = useMedia({
    queries: [getMinQuery(ScreenConfig.M.min)],
    values: [250],
    defaultValue: 0,
  })
  const itemsPerPage = useMedia({
    queries: [getMinQuery(ScreenConfig.M.min), getMinQuery(ScreenConfig.S.min)],
    values: [null, 2],
    defaultValue: 1,
  })
  const baseItemMarginBetween = useMedia({
    queries: [getMinQuery(ScreenConfig.S.min)],
    values: [20],
    defaultValue: 10,
  })

  return (
    <StyledCarouselContainer>
      <Container>
        <Title tag="h2" modifier="senary" className="k-u-margin-bottom-double">
          Choisissez votre contrepartie
        </Title>
      </Container>

      <Carousel
        itemMinWidth={itemMinWidth}
        itemsPerPage={itemsPerPage}
        baseItemMarginBetween={baseItemMarginBetween}
        hidePagination
        showOtherPages
        loop
        tinyButtons
      >
        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p>
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
          </BackingCard.Description>
          <BackingCard.TagList>
            <Tag as="li">
              <strong className="k-u-weight-regular">5</strong> contributeurs
            </Tag>
            <Tag as="li">
              <strong className="k-u-weight-regular">2/6</strong> disponibles
            </Tag>
          </BackingCard.TagList>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>
      </Carousel>
    </StyledCarouselContainer>
  )
}
