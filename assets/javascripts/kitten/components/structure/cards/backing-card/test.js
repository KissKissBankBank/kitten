import React from 'react'
import renderer from 'react-test-renderer'
import { BackingCard } from './index'
import { Tag } from 'kitten'

describe('<BackingCard />', () => {
  let component

  describe('default', () => {
    const component = renderer
      .create(
        <BackingCard>
          <BackingCard.Contents>
            <BackingCard.Title>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </BackingCard.Title>
            <BackingCard.Description>
              Custom description
            </BackingCard.Description>
          </BackingCard.Contents>
        </BackingCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('not truncated title', () => {
    const component = renderer
      .create(
        <BackingCard>
          <BackingCard.Contents>
            <BackingCard.Title truncateText={false}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </BackingCard.Title>
            <BackingCard.Description>
              Custom description
            </BackingCard.Description>
          </BackingCard.Contents>
        </BackingCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <BackingCard disabled hasBorder={false}>
            <BackingCard.Image>
              <img src="/kitten.jpg" alt="" />
            </BackingCard.Image>
            <BackingCard.Contents>
              <BackingCard.HeadingTag icon="star" text="Star reward" />
              <BackingCard.Title>
                Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
              </BackingCard.Title>
              <BackingCard.Amount suffix="Etiam Consectetur Venenatis">
                65&nbsp;€
              </BackingCard.Amount>
              <BackingCard.Description moreButtonText="See more…" truncateText>
                <p className="k-u-margin-none">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum.
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
                  <strong className="k-u-weight-regular">5</strong>{' '}
                  contributeurs
                </Tag>
                <Tag as="li">
                  <strong className="k-u-weight-regular">2/6</strong>{' '}
                  disponibles
                </Tag>
              </BackingCard.TagList>
            </BackingCard.Contents>
            <BackingCard.Button disabled>Je soutiens</BackingCard.Button>
          </BackingCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
