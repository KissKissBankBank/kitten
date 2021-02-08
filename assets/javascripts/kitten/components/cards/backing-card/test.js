import React from 'react'
import renderer from 'react-test-renderer'
import { BackingCard } from './index'
import { Tag } from '../../../components/atoms/tag'

describe('<BackingCard />', () => {
  let component

  describe('default', () => {
    const component = renderer
      .create(
        <BackingCard>
          <BackingCard.Description>Custom description</BackingCard.Description>
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
          <BackingCard>
            <BackingCard disabled hasBorder={false}>
              <BackingCard.Image>
                <img src="/kitten.jpg" alt="" />
              </BackingCard.Image>
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
              <BackingCard.Button>Je soutiens</BackingCard.Button>
            </BackingCard>
          </BackingCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
