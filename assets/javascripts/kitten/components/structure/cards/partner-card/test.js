import React from 'react'
import renderer from 'react-test-renderer'
import { PartnerCard } from './index'
import { Text } from 'kitten'

describe('<PartnerCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <PartnerCard
            status="normal"
            imageProps={{
              src: 'kitten.jpg',
              alt: 'image alt',
            }}
          >
            <PartnerCard.Avatar
              imageProps={{
                src: 'kitten.jpg',
                alt: 'image alt',
              }}
            />
            <PartnerCard.Line>
              <Text size="small" weight="500">
                Les Jeunes Pousses méritent tout notre soutien : Naturalia s’engage dans le développement de votre produit bio.
              </Text>
              <PartnerCard.Sticker>
                Citoyenneté
              </PartnerCard.Sticker>
              <Text
                tag="p"
                weight="700"
                size="small"
                className="k-u-link-font1 k-u-cursor-pointer k-u-margin-none"
              >
                En savoir plus
              </Text>
            </PartnerCard.Line>
          </PartnerCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
