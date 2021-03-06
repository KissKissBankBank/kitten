import React from 'react'
import renderer from 'react-test-renderer'
import { ContributionCard } from './index'

describe('<ContributionCard />', () => {
  describe('default', () => {
    const component = renderer
      .create(
        <ContributionCard>
          <ContributionCard.Image>
            <img src="/kitten.jpg" alt="" />
          </ContributionCard.Image>

          <ContributionCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor eget dolor.eget dolor.eget dolor.
          </ContributionCard.Title>

          <ContributionCard.PillNumber value={0} min={0} max={100} />
          <ContributionCard.Amount>1005&nbsp;€</ContributionCard.Amount>
        </ContributionCard>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
