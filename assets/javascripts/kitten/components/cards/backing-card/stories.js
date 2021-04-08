import React from 'react'
import styled from 'styled-components'
import { boolean } from '@storybook/addon-knobs'
import { BackingCard } from './index'
import {
  pxToRem,
  ScreenConfig,
  Title,
  Tag,
  Carousel,
  TextInputWithUnit,
  Label,
  GifVideo,
} from '../../../index'
import { useMedia } from '../../../helpers/utils/use-media-query'
import { getMinQuery } from '../../../helpers/utils/media-queries'

const StyledCarouselContainer = styled.div`
  margin: 40px 0;

  .k-Carousel--showOtherPages .k-Carousel__inner {
    padding: 0 ${pxToRem(80 - 4)} 0 ${pxToRem(20 - 4)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: 0 ${pxToRem(120 - 4)} 0 ${pxToRem(40 - 4)};
    }
  }
`

export default {
  title: 'Cards/BackingCard',
  component: BackingCard,
}

export const Default = () => {
  return (
    <>
      <BackingCard
        disabled={boolean('Disabled', false)}
        hasBorder={boolean('Has border', true)}
      >
        <BackingCard.Image>
          <img src="/kitten.jpg" alt="" />
        </BackingCard.Image>
        <BackingCard.HeadingTag icon="star" text="Star reward" />
        <BackingCard.Title>
          With an image and a very very, very long title
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
        <BackingCard.Description
          moreButtonText="See more…"
          truncateText={boolean('Truncate text', false)}
        >
          <p className="k-u-margin-none">
            <strong className="k-u-weight-regular">Maecenas tempus</strong>,
            tellus eget condimentum rhoncus, sem quam semper libero,{' '}
            <em className="k-u-style-italic">sit amet adipiscing</em> sem neque
            sed ipsum.
          </p>
          <p className="k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
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

      <BackingCard
        disabled={boolean('Disabled', false)}
        hasBorder={boolean('Has border', true)}
      >
        <BackingCard.Image>
          <GifVideo poster="/kitten.jpg">
            <source
              src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm"
              type="video/webm"
            />
            <source
              src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
              type="video/mp4"
            />
          </GifVideo>
        </BackingCard.Image>
        <BackingCard.HeadingTag icon="star" text="Star reward" />
        <BackingCard.Title>With a video</BackingCard.Title>
        <BackingCard.Amount>95&nbsp;€</BackingCard.Amount>
        <BackingCard.Info
          legend="Prix de livraison&nbsp;:"
          value="5&nbsp;€ (en France)"
        />
        <BackingCard.Info
          legend="Livraison estimée&nbsp;:"
          value="Janvier 2022"
        />
        <BackingCard.Description
          moreButtonText="See more…"
          truncateText={boolean('Truncate text', false)}
        >
          <p className="k-u-margin-none">
            <strong className="k-u-weight-regular">Maecenas tempus</strong>,
            tellus eget condimentum rhoncus, sem quam semper libero,{' '}
            <em className="k-u-style-italic">sit amet adipiscing</em> sem neque
            sed ipsum.
          </p>
          <p className="k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
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
    </>
  )
}

export const InACarouselComponent = () => {
  const itemMinWidth = useMedia({
    queries: [getMinQuery(ScreenConfig.M.min)],
    values: [280],
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
      <div className="story-Container">
        <Title tag="h2" modifier="senary" className="k-u-margin-bottom-double">
          Choisissez votre contrepartie
        </Title>
      </div>

      <Carousel
        itemMinWidth={itemMinWidth}
        itemsPerPage={itemsPerPage}
        baseItemMarginBetween={baseItemMarginBetween}
        hidePagination
        showOtherPages
        loop
        tinyButtons
      >
        <BackingCard as="button" className="k-u-reset-button">
          <BackingCard.Image id="one_such_ID" className="hellowORLD">
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.HeadingTag icon="diamond" text="Diamond reward" />
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
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
          <BackingCard.Button as="div">Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard as="button" className="k-u-reset-button">
          <BackingCard.HeadingTag icon="star" text="Star reward" />
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
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
          <BackingCard.Button as="div">Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard as="button" className="k-u-reset-button">
          <BackingCard.Image>
            <GifVideo poster="/kitten.jpg">
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm"
                type="video/webm"
              />
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
                type="video/mp4"
              />
            </GifVideo>
          </BackingCard.Image>
          <BackingCard.HeadingTag icon="star" text="Star reward" />
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
          <BackingCard.Button as="div">Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard as="button" className="k-u-reset-button">
          <BackingCard.HeadingTag icon="star" text="Star reward" />
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Info
            legend="Prix de livraison&nbsp;:"
            value="5&nbsp;€ (en France)"
          />
          <BackingCard.Info
            legend="Livraison estimée&nbsp;:"
            value="Janvier 2022"
          />
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
          <BackingCard.Button as="div">Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard>
          <BackingCard.Title textSize="giant" strokeSize="default">
            Je donne ce que je veux
          </BackingCard.Title>
          <BackingCard.Form>
            <Label
              htmlFor="text_input_with_unit"
              className="k-u-margin-bottom-single"
            >
              Montant de votre don
            </Label>
            <TextInputWithUnit
              id="text_input_with_unit"
              variant="orion"
              unit="€"
            />
          </BackingCard.Form>
          <BackingCard.Button>Je soutiens</BackingCard.Button>
        </BackingCard>

        <BackingCard disabled className="k-u-reset-button">
          <BackingCard.Image>
            <img src="/kitten.jpg" alt="" />
          </BackingCard.Image>
          <BackingCard.HeadingTag icon="star" text="Star reward" />
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
        </BackingCard>

        <BackingCard disabled className="k-u-reset-button">
          <BackingCard.HeadingTag icon="star" text="Star reward" />
          <BackingCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
          </BackingCard.Title>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
        </BackingCard>

        <BackingCard disabled className="k-u-reset-button">
          <BackingCard.Image>
            <GifVideo poster="/kitten.jpg">
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm"
                type="video/webm"
              />
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
                type="video/mp4"
              />
            </GifVideo>
          </BackingCard.Image>
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
        </BackingCard>

        <BackingCard disabled className="k-u-reset-button">
          <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
          <BackingCard.Description moreButtonText="See more…" truncateText>
            <p className="k-u-margin-none">
              <strong className="k-u-weight-regular">Maecenas tempus</strong>,
              tellus eget condimentum rhoncus, sem quam semper libero,{' '}
              <em className="k-u-style-italic">sit amet adipiscing</em> sem
              neque sed ipsum.
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tell
            </p>
            <p className="k-u-margin-none">
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
        </BackingCard>
      </Carousel>
    </StyledCarouselContainer>
  )
}

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid">
      <Story />
    </div>
  ),
]
