import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { LegoGrid } from 'kitten/components/grid/lego-grid'
import { Title } from 'kitten/components/typography/title'
import { Marger } from 'kitten/components/layout/marger'
import { Checkbox } from 'kitten/components/form/checkbox'
import { KarlProjectCard } from 'kitten/karl/cards/project-card'

const randomLogo = (key) => {
  return `http://lorempixel.com/40/40/abstract/${ key }`
}

const randomImage = (key) => {
  return `http://lorempixel.com/500/230/business/${ key }`
}

export const KarlBrowsing = () => {
  const masonryProps = {
    options: {
      transitionDuration: 0,
    }
  }

  const projectCards = [
    { key: 'project-1', status: 'collecting', score: 'A', image: false, logo: randomLogo(1) },
    { key: 'project-2', status: 'closing', score: 'C', image: randomImage(1), logo: randomLogo(2) },
    { key: 'project-3', status: 'collecting', disabled: true, score: 'A+', image: randomImage(2), logo: randomLogo(3) },
    { key: 'project-4', status: 'succeed', score: 'B', image: false, dataLocked: true, logo: randomLogo(4) },
    { key: 'project-5', status: 'studing', score: 'B+', image: false, logo: randomLogo(5) },
    { key: 'project-6', status: 'defaulted', score: 'C', image: randomImage(3), logo: randomLogo(6) },
    { key: 'project-7', status: 'retarded', score: 'A', image: randomImage(4), logo: randomLogo(7) },
    { key: 'project-8', status: 'fraudulent', score: 'B+', image: false, logo: randomLogo(8) },
    { key: 'project-9', status: 'failed', score: 'A+', image: randomImage(5), logo: randomLogo(9) },
  ]

  return (
    <div className="k-DevGrid__container k-DevGrid__container--withoutOutline">
      <Marger top="3" bottom="3">
        <Grid>
          <GridCol col="10">
            <LegoGrid masonryProps={ masonryProps }>
              { projectCards.map((project, index) =>
                <LegoGrid.Item key={ index }>
                  <KarlProjectCard { ...project } />
                </LegoGrid.Item>
              ) }
            </LegoGrid>
          </GridCol>

          <GridCol col="2">
            <Marger top="1.5" bottom="1.5">
              <Title margin={ false } tag="p" modifier="quaternary">Statuts de projets</Title>
            </Marger>

            <Marger top="1.5" bottom="1.5">
              <Checkbox id="status-option-1">Collectes en cours</Checkbox>
              <Checkbox id="status-option-2">Projets en remboursement</Checkbox>
              <Checkbox id="status-option-3">Projets en défaut de paiement</Checkbox>
              <Checkbox id="status-option-4">Projets en retard de paiement</Checkbox>
              <Checkbox id="status-option-5">Projets frauduleux</Checkbox>
              <Checkbox id="status-option-6">Collectes échouées</Checkbox>
              <Checkbox id="status-option-7">Collectes annulées</Checkbox>
            </Marger>

            <Marger top="2" bottom="2">
              <hr style={ { marginTop: 0, marginBottom: 0 } } />
            </Marger>

            <Marger top="1.5" bottom="1.5">
              <Title margin={ false } tag="p" modifier="quaternary">Domaines</Title>
            </Marger>

            <Marger top="1.5" bottom="1.5">
              <Checkbox id="domaine-option-1">Agriculture</Checkbox>
              <Checkbox id="domaine-option-2">Industrie et agroalimentaire</Checkbox>
              <Checkbox id="domaine-option-3">Construction</Checkbox>
              <Checkbox id="domaine-option-4">Transport</Checkbox>
              <Checkbox id="domaine-option-5">Hotellerie et restauration</Checkbox>
              <Checkbox id="domaine-option-6">Services aux entreprises</Checkbox>
              <Checkbox id="domaine-option-7">Édition, informatique, communication et conseil</Checkbox>
              <Checkbox id="domaine-option-8">Santé</Checkbox>
              <Checkbox id="domaine-option-9">Autres domaines</Checkbox>
            </Marger>
          </GridCol>
        </Grid>
      </Marger>
    </div>
  )
}
