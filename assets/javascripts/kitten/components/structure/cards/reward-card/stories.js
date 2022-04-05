import React from 'react'
import styled from 'styled-components'
import { RewardCard } from './index'
import {
  pxToRem,
  ScreenConfig,
  Container,
  Title,
  Tag,
  Carousel,
  TextInputWithUnit,
  Label,
  GifVideo,
  useMedia,
  getMinQuery,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'

const StyledCarouselContainer = styled.div`
  .k-Carousel--showOtherPages .k-Carousel__inner {
    padding: 0 ${pxToRem(40 - 4)} 0 ${pxToRem(20 - 4)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: 0 ${pxToRem(60 - 4)} 0 ${pxToRem(40 - 4)};
    }
  }

  .k-Carousel__page {
    height: 100% !important;
  }
  .k-Carousel__page__item {
    padding-top: ${pxToRem(12)} !important;
  }
`

const argTypes = {
  disabled: { control: 'boolean' },
  hasBorder: { control: 'boolean' },
  truncateTitle: {
    name: 'RewardCard.Title: truncate Text',
    control: 'boolean',
  },
  truncateText: {
    name: 'RewardCard.Description: truncate Text',
    control: 'boolean',
  },
}
const args = {
  disabled: false,
  hasBorder: true,
  truncateTitle: true,
  truncateText: false,
}

export default {
  title: 'Structure/Cards/RewardCard',
  component: RewardCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="RewardCard" />,
    },
  },
}

export const Default = ({
  truncateText,
  hasImage,
  hasButton,
  hasAmountSuffix,
  disabled,
  truncateTitle,
  ...args
}) => {
  return (
    <RewardCard
      {...args}
      disabled={disabled}
      as="button"
      className="k-u-reset-button"
    >
      {hasImage && (
        <RewardCard.Image>
          <img src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`} alt="" />
        </RewardCard.Image>
      )}
      <RewardCard.Contents>
        {disabled ? (
          <RewardCard.HeadingTag text="Unavailable" />
        ) : (
          <RewardCard.HeadingTag icon="star" text="Star reward" />
        )}
        <RewardCard.Title truncateText={truncateTitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
        </RewardCard.Title>
        <RewardCard.Amount suffix={hasAmountSuffix ? 'Par mois' : null}>
          65&nbsp;€
        </RewardCard.Amount>
        <RewardCard.TagList>
          <Tag as="li" variant="light">
            <strong className="k-u-weight-regular">5</strong> contributeurs
          </Tag>
          <Tag as="li" variant="light">
            <strong className="k-u-weight-regular">2</strong> disponibles
          </Tag>
        </RewardCard.TagList>
        <RewardCard.Description
          moreButtonText="See more…"
          truncateText={truncateText}
        >
          <p className="k-u-weight-light k-u-margin-none">
            <strong className="k-u-weight-regular">Maecenas tempus</strong>,
            tellus eget condimentum rhoncus, sem quam semper libero,{' '}
            <em className="k-u-style-italic">sit amet adipiscing</em> sem neque
            sed ipsum.
          </p>
          <p className="k-u-weight-light k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-weight-light k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-weight-light k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
        </RewardCard.Description>
      </RewardCard.Contents>
      {hasButton && (
        <RewardCard.Button disabled={disabled}>Je soutiens</RewardCard.Button>
      )}
    </RewardCard>
  )
}
Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid">{story()}</div>
  ),
]
Default.argTypes = {
  ...argTypes,
  hasImage: { name: 'has Image (story prop)', control: 'boolean' },
  hasButton: { name: 'has Button (story prop)', control: 'boolean' },
  hasAmountSuffix: {
    name: 'has Amount suffix (story prop)',
    control: 'boolean',
  },
}
Default.args = {
  ...args,
  hasImage: true,
  hasButton: true,
  hasAmountSuffix: false,
}

export const Video = ({ truncateText, hasImage, hasButton, ...args }) => {
  return (
    <RewardCard {...args}>
      <RewardCard.Image>
        <GifVideo poster={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}>
          <source
            src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm"
            type="video/webm"
          />
          <source
            src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
            type="video/mp4"
          />
        </GifVideo>
      </RewardCard.Image>
      <RewardCard.Contents>
        <RewardCard.HeadingTag icon="star" text="Star reward" />
        <RewardCard.Title truncateText={truncateTitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
        </RewardCard.Title>
        <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
        <RewardCard.TagList>
          <Tag as="li" variant="light">
            <strong className="k-u-weight-regular">5</strong> contributeurs
          </Tag>
          <Tag as="li" variant="light">
            <strong className="k-u-weight-regular">2</strong> disponibles
          </Tag>
        </RewardCard.TagList>
        <RewardCard.Description
          moreButtonText="See more…"
          truncateText={truncateText}
        >
          <p className="k-u-weight-light k-u-margin-none">
            <strong className="k-u-weight-regular">Maecenas tempus</strong>,
            tellus eget condimentum rhoncus, sem quam semper libero,{' '}
            <em className="k-u-style-italic">sit amet adipiscing</em> sem neque
            sed ipsum.
          </p>
          <p className="k-u-weight-light k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-weight-light k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
          <p className="k-u-weight-light k-u-margin-none">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tell
          </p>
        </RewardCard.Description>
      </RewardCard.Contents>
      <RewardCard.Button>Je soutiens</RewardCard.Button>
    </RewardCard>
  )
}
Video.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid">{story()}</div>
  ),
]
Video.argTypes = argTypes
Video.args = args

export const InACarouselComponent = ({ truncateTitle }) => {
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
        smallButtons
      >
        <RewardCard stretch as="button" className="k-u-reset-button">
          <RewardCard.Image id="one_such_ID" className="hellowORLD">
            <img src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`} alt="" />
          </RewardCard.Image>
          <RewardCard.Contents>
            <RewardCard.HeadingTag icon="diamond" text="Diamond reward" />
            <RewardCard.Title truncateText={truncateTitle}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor,
              sit amet adipiscing.
            </RewardCard.Title>
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
          <RewardCard.Button as="div">Je soutiens</RewardCard.Button>
        </RewardCard>

        <RewardCard stretch as="button" className="k-u-reset-button">
          <RewardCard.Contents>
            <RewardCard.HeadingTag icon="star" text="Star reward" />
            <RewardCard.Title truncateText={truncateTitle}>
              Smol titl.
            </RewardCard.Title>
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
          <RewardCard.Button as="div">Je soutiens</RewardCard.Button>
        </RewardCard>

        <RewardCard stretch as="button" className="k-u-reset-button">
          <RewardCard.Image>
            <GifVideo poster={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}>
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.webm"
                type="video/webm"
              />
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.mp4"
                type="video/mp4"
              />
            </GifVideo>
          </RewardCard.Image>
          <RewardCard.Contents>
            <RewardCard.HeadingTag icon="star" text="Star reward" />
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
          <RewardCard.Button as="div">Je soutiens</RewardCard.Button>
        </RewardCard>

        <RewardCard stretch as="button" className="k-u-reset-button">
          <RewardCard.Contents>
            <RewardCard.HeadingTag icon="star" text="Star reward" />
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
          <RewardCard.Button as="div">Je soutiens</RewardCard.Button>
        </RewardCard>

        <RewardCard stretch>
          <RewardCard.Contents>
            <RewardCard.Title textSize="giant">
              Je donne ce que je veux
            </RewardCard.Title>
            <RewardCard.Form>
              <Label
                htmlFor="text_input_with_unit"
                className="k-u-margin-bottom-single"
              >
                Montant de votre don
              </Label>
              <TextInputWithUnit id="text_input_with_unit" unit="€" />
            </RewardCard.Form>
          </RewardCard.Contents>
          <RewardCard.Button>Je soutiens</RewardCard.Button>
        </RewardCard>

        <RewardCard stretch disabled className="k-u-reset-button">
          <RewardCard.Image>
            <img src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`} alt="" />
          </RewardCard.Image>
          <RewardCard.Contents>
            <RewardCard.HeadingTag icon="star" text="Star reward" />
            <RewardCard.Title truncateText={truncateTitle}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </RewardCard.Title>
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
        </RewardCard>

        <RewardCard stretch disabled className="k-u-reset-button">
          <RewardCard.Contents>
            <RewardCard.HeadingTag icon="star" text="Star reward" />
            <RewardCard.Title truncateText={truncateTitle}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </RewardCard.Title>
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
        </RewardCard>

        <RewardCard stretch disabled className="k-u-reset-button">
          <RewardCard.Image>
            <GifVideo poster={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}>
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.webm"
                type="video/webm"
              />
              <source
                src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.mp4"
                type="video/mp4"
              />
            </GifVideo>
          </RewardCard.Image>
          <RewardCard.Contents>
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
        </RewardCard>

        <RewardCard stretch disabled className="k-u-reset-button">
          <RewardCard.Contents>
            <RewardCard.Amount>65&nbsp;€</RewardCard.Amount>
            <RewardCard.TagList>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li" variant="light">
                <strong className="k-u-weight-regular">2</strong> disponibles
              </Tag>
            </RewardCard.TagList>
            <RewardCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-weight-light k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-weight-light k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </RewardCard.Description>
          </RewardCard.Contents>
        </RewardCard>
      </Carousel>
    </StyledCarouselContainer>
  )
}
