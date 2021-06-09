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

          <ContributionCard.Title>
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor 
            eget dolor.eget dolor.eget dolor.
          </ContributionCard.Title>

          <ContributionCard.PillNumber value={0} min={0} max={100} />
          <ContributionCard.Amount>
            1005&nbsp;€
          </ContributionCard.Amount>
        </ContributionCard>,
      )
      .toJSON()
  
    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  
  describe('with PetitPlus', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ContributionCard borderStyle="dashed" closeButton={false}>
            <ContributionCard.Image>
              <img src="/kitten.jpg" alt="" />
            </ContributionCard.Image>
    
            <ContributionCard.Title>
              Un petit plus pour 900 care
              <ContributionCard.Description>
                Donnez encore plus de chances à ce projet de voir le jour.
              </ContributionCard.Description>
            </ContributionCard.Title>
            
            <ContributionCard.Input unit="€" />
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
