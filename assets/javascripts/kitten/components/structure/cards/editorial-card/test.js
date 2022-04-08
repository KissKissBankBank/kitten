import React from 'react'
import renderer from 'react-test-renderer'
import { EditorialCard } from './index'

describe('<EditorialCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <EditorialCard>
            <EditorialCard.Title>Les collectes à venir</EditorialCard.Title>
            <EditorialCard.Content>
              Découvrez nos futurs projets et inscrivez-vous pour être informé
              dès l'ouverture des collectes.
            </EditorialCard.Content>
          </EditorialCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('with custom linkProps, color and verso', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <EditorialCard
            href="#hello"
            status="custom"
            customColor="var(--color-grey-900)"
            linkProps={() => {}}
          >
            <EditorialCard.Title>Les collectes réservées</EditorialCard.Title>
            <EditorialCard.Content>
              Pourquoi ces collectes sont reservées à certains départements?
            </EditorialCard.Content>
            <EditorialCard.Verso actionText="Aller plus loin">
              <p>
                Le projet financé est lauréat d’un appel d'offres mené par la
                Commission de Régulation de l’Énergie (CRE) qui encadre le
                développement des énergies renouvelables en France.
              </p>
              <p>
                Pour investir dans ces projets, il faut pouvoir justifier d’une
                résidence dans le département d’implantation du projet ou un
                département limitrophe.
              </p>
            </EditorialCard.Verso>
          </EditorialCard>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
