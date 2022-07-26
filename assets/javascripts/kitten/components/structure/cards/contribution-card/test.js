import React from 'react'
import renderer from 'react-test-renderer'
import { ContributionCard } from './index'

describe('<ContributionCard />', () => {
  let component

  describe('default', () => {
    const component = renderer
      .create(
        <ContributionCard>
          <ContributionCard.Image>
            <img src="/kitten.jpg" alt="" />
          </ContributionCard.Image>

          <ContributionCard.Title largeTitle>
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor eget dolor.eget dolor.eget dolor.
          </ContributionCard.Title>

          <ContributionCard.Amount>1005&nbsp;€</ContributionCard.Amount>
        </ContributionCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('Petit plus', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ContributionCard borderStyle="dashed">
            <ContributionCard.Image>
              <img src="/kitten.jpg" alt="" />
            </ContributionCard.Image>

            <ContributionCard.Title>
              Lorem ipsum dolor sit amet, consectetuer
              <ContributionCard.Description>
                adipiscing ligula eget dolor eget dolor.eget dolor.eget dolor.
              </ContributionCard.Description>
            </ContributionCard.Title>

            <ContributionCard.Input id="Input" unit="€" />
            <ContributionCard.Action>Ajouter</ContributionCard.Action>
          </ContributionCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
