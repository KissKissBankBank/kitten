import renderer from 'react-test-renderer'
import React from 'react'
import { VerticalProgress } from './index'

describe('<VerticalStepper />', () => {
  let component

  describe('with all sub-components', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <VerticalProgress>
            <VerticalProgress.Step actions progressTitle="Brouillon" />
            <VerticalProgress.Step waiting progressTitle="En cours de vérification" />
            <VerticalProgress.Step valid progressTitle="Prêt à être partagé" />
            <VerticalProgress.Step disabled progressTitle="Partager avec mon coach" />
          </VerticalProgress>
        )
        .toJSON()
    })
  
    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
