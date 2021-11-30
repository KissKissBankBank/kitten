import React from 'react'
import renderer from 'react-test-renderer'
import { RewardSummaryCard } from './index'
import { DropdownMenu, EllipsisIcon } from 'kitten'

describe('<RewardSummaryCard />', () => {
  let component

  describe('default', () => {
    const component = renderer
      .create(
        <RewardSummaryCard>
          <RewardSummaryCard.Image>
            <img src="/kitten.jpg" alt="" />
          </RewardSummaryCard.Image>

          <RewardSummaryCard.Title>
            Stickers Free Boobs Club
          </RewardSummaryCard.Title>

          <RewardSummaryCard.Amount>10 000€</RewardSummaryCard.Amount>
        </RewardSummaryCard>,
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
          <RewardSummaryCard>
            <RewardSummaryCard.Image>
              <img src="/kitten.jpg" alt="" />
            </RewardSummaryCard.Image>

            <RewardSummaryCard.Title>
              Stickers Free Boobs Club
            </RewardSummaryCard.Title>

            <RewardSummaryCard.TitleTag
              className="k-u-margin-top-single"
              icon="star"
              text="Contrepartie star"
            />

            <RewardSummaryCard.Amount>10 000€</RewardSummaryCard.Amount>
            <RewardSummaryCard.Contribution>
              1 468 000
            </RewardSummaryCard.Contribution>
            <RewardSummaryCard.Availability>
              Illimitée
            </RewardSummaryCard.Availability>
            <RewardSummaryCard.Options>
              <DropdownMenu menuPosition="left" button={() => <EllipsisIcon />}>
                <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
                <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
                <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
                <DropdownMenu.Button>Supprimer</DropdownMenu.Button>
              </DropdownMenu>
            </RewardSummaryCard.Options>
          </RewardSummaryCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
