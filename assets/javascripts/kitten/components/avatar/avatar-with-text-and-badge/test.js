import React from 'react'
import renderer from 'react-test-renderer'
import { AvatarWithTextAndBadge } from './index'
import { Text } from '../../../components/typography/text'

describe('<AvatarWithTextAndBadge />', () => {
  describe('with avatar', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(
          <AvatarWithTextAndBadge
            imageProps={{
              src: 'https://via.placeholder.com/40x40.png',
              alt: 'Default image',
            }}
            notifications="5"
            text="Jean-Luc"
          />,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('without avatar', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(
          <AvatarWithTextAndBadge
            imageProps={{
              text: (
                <Text size="micro" weight="bold">
                  JC
                </Text>
              ),
              backgroundColor: '#002e7d',
            }}
            notifications="2"
            text={
              <Text lineHeight="normal" weight="bold">
                Jean Charles
              </Text>
            }
            subText={<Text weight="light">Solde : 1&nbsp;000,97&nbsp;€</Text>}
          />,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
