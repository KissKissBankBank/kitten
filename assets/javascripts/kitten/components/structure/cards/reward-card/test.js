import React from 'react'
import renderer from 'react-test-renderer'
import { RewardCard } from './index'
import { Tag } from 'kitten'

describe('<RewardCard />', () => {
  let component

  describe('default', () => {
    const component = renderer
      .create(
        <RewardCard>
          <RewardCard.Contents>
            <RewardCard.Title>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </RewardCard.Title>
            <RewardCard.Description>Custom description</RewardCard.Description>
          </RewardCard.Contents>
        </RewardCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('not truncated title', () => {
    const component = renderer
      .create(
        <RewardCard>
          <RewardCard.Contents>
            <RewardCard.Title truncateText={false}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </RewardCard.Title>
            <RewardCard.Description>Custom description</RewardCard.Description>
          </RewardCard.Contents>
        </RewardCard>,
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
          <RewardCard disabled hasBorder={false}>
            <RewardCard.Image>
              <img src="/kitten.jpg" alt="" />
            </RewardCard.Image>
            <RewardCard.Contents>
              <RewardCard.HeadingTag icon="star" text="Star reward" />
              <RewardCard.Title>
                Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
              </RewardCard.Title>
              <RewardCard.Amount suffix="Etiam Consectetur Venenatis">
                65&nbsp;€
              </RewardCard.Amount>
              <RewardCard.Description moreButtonText="See more…" truncateText>
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
              </RewardCard.Description>
              <RewardCard.TagList>
                <Tag as="li">
                  <strong className="k-u-weight-500">5</strong> contributeurs
                </Tag>
                <Tag as="li">
                  <strong className="k-u-weight-500">2/6</strong> disponibles
                </Tag>
              </RewardCard.TagList>
            </RewardCard.Contents>
            <RewardCard.Button disabled>Je soutiens</RewardCard.Button>
          </RewardCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
