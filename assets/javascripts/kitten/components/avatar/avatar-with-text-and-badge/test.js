import React from 'react'
import renderer from 'react-test-renderer'
import { AvatarWithTextAndBadge } from './index'

describe('<AvatarWithTextAndBadge />', () => {
  describe('with simple props and avatar', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(
          <AvatarWithTextAndBadge>
            <AvatarWithTextAndBadge.Image
              alt="Alt text"
              src="/kitten.jpg"
              text="ST"
            />

            <AvatarWithTextAndBadge.Text>
              Simple Text
            </AvatarWithTextAndBadge.Text>
          </AvatarWithTextAndBadge>,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('with simple props and no avatar image', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(
          <AvatarWithTextAndBadge>
            <AvatarWithTextAndBadge.Image
              text="ST"
              textColor="white"
              backgroundColor="rgba(0,0,0,.8)"
            />

            <AvatarWithTextAndBadge.Text>
              Simple Text
            </AvatarWithTextAndBadge.Text>
          </AvatarWithTextAndBadge>,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('with multiple lines and badge', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(
          <AvatarWithTextAndBadge>
            <AvatarWithTextAndBadge.Image
              alt="Alt text"
              size="big"
              src="/kitten.jg"
              text="LT"
              textColor="white"
              backgroundColor="rgba(0,0,0,.8)"
            >
              <AvatarWithTextAndBadge.Badge a11yText="2 notifications">
                2
              </AvatarWithTextAndBadge.Badge>
            </AvatarWithTextAndBadge.Image>

            <AvatarWithTextAndBadge.Text
              className="k-u-hidden@xxs-down"
              withEllipsisOverflow
            >
              Long Text
              <br />
              <span>
                <span className="k-u-hidden@xs-down">Solde&nbsp;:</span>{' '}
                24&nbsp;093,39&nbsp;€
              </span>
            </AvatarWithTextAndBadge.Text>
          </AvatarWithTextAndBadge>,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
