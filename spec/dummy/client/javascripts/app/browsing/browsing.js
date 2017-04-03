import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { LegoGrid } from 'kitten/components/grid/lego-grid'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/Paragraph'
import { Marger } from 'kitten/components/layout/marger'
import { RadioButton } from 'kitten/components/form/radio-button'
import { KarlProjectCard } from 'kitten/karl/cards/project-card'
import { Separator } from 'kitten/components/layout/separator'
import { Progress } from 'kitten/components/meters/progress'

const randomLogo = (key) => {
  return `http://lorempixel.com/40/40/abstract/${ key }`
}

const randomImage = (key) => {
  return `http://lorempixel.com/500/230/business/${ key }`
}

export class KarlBrowsing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      progressValue: 0,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        progressValue: 100,
      })
    }, 500)

    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 800)
  }

  renderLoader() {
    if (!this.state.loading) return

    return (
      <Grid>
        <GridCol col="4" offset="4">
          <Marger top="5" bottom="2">
            <Paragraph className="k-u-centered" margin={ false }>
              Chargement des projets…
            </Paragraph>
          </Marger>

          <Marger top="2">
            <Progress value={ this.state.progressValue } />
          </Marger>
        </GridCol>
      </Grid>
    )
  }

  renderProjects() {
    if (this.state.loading) return

    const masonryProps = {
      options: {
        transitionDuration: 0,
      }
    }

    const projectCards = [
      { key: 'project-4', status: 'succeed', score: 'B', image: false, dataLocked: true, logo: randomLogo(4) },
      { key: 'project-5', status: 'studing', score: 'B+', image: false, logo: randomLogo(5) },
      { key: 'project-6', status: 'defaulted', score: 'C', image: randomImage(3), logo: randomLogo(6) },
      { key: 'project-7', status: 'retarded', score: 'A', image: randomImage(4), logo: randomLogo(7) },
      { key: 'project-8', status: 'fraudulent', score: 'B+', image: false, logo: randomLogo(8) },
      { key: 'project-9', status: 'failed', score: 'A+', image: randomImage(5), logo: randomLogo(9) },
      { key: 'project-9', status: 'failed', score: 'C', image: false, logo: randomLogo(10) },
      { key: 'project-9', status: 'failed', score: 'B+', image: randomImage(6), logo: randomLogo(1) },
    ]

    const projectCollectingCards = [
      { key: 'project-1', status: 'collecting', score: 'A', image: false, logo: randomLogo(1) },
      { key: 'project-2', status: 'closing', score: 'C', image: randomImage(1), logo: randomLogo(2) },
      { key: 'project-3', status: 'collecting', disabled: true, score: 'A+', image: randomImage(2), logo: randomLogo(3) },
    ]

    return (
      <div>
        <Marger top="1.5" bottom="1.5">
          <Title margin={ false } tag="h2" modifier="secondary">Collectes du moment</Title>
        </Marger>

        <LegoGrid masonryProps={ masonryProps }>
          { projectCollectingCards.map((project, index) =>
            <LegoGrid.Item key={ index }>
              <KarlProjectCard { ...project } />
            </LegoGrid.Item>
          ) }
        </LegoGrid>

        <Marger top="4" bottom="3">
          <Separator darker />
        </Marger>

        <Marger top="3" bottom="1.5">
          <Title margin={ false } tag="h2" modifier="secondary">Collectes terminées</Title>
        </Marger>

        <LegoGrid masonryProps={ masonryProps }>
          { projectCards.map((project, index) =>
            <LegoGrid.Item key={ index }>
              <KarlProjectCard { ...project } />
            </LegoGrid.Item>
          ) }
        </LegoGrid>
      </div>
    )
  }

  render() {
    return (
      <div className="k-DevGrid__container k-DevGrid__container--withoutOutline">
        <Marger top="3" bottom="3">
          <Grid>
            <GridCol col-l="10" col="12">
              { this.renderLoader() }
              { this.renderProjects() }
            </GridCol>

            <GridCol col="2" className="k-u-hidden@m-down">
              <Marger top="1.5" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">Statuts de projets</Title>
              </Marger>

              <Marger top="1.5" bottom="3">
                <RadioButton id="status-option-0" name="status" checked text="Tous les statuts" />
                <RadioButton id="status-option-1" name="status" text="Collectes en cours" />
                <RadioButton id="status-option-2" name="status" text="Projets en remboursement" />
                <RadioButton id="status-option-3" name="status" text="Projets en défaut de paiement" />
                <RadioButton id="status-option-4" name="status" text="Projets en retard de paiement" />
                <RadioButton id="status-option-5" name="status" text="Projets frauduleux" />
                <RadioButton id="status-option-6" name="status" text="Collectes échouées" />
                <RadioButton id="status-option-7" name="status" text="Collectes annulées" />
              </Marger>

              <Marger top="3" bottom="2">
                <Separator />
              </Marger>

              <Marger top="2" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">Domaines</Title>
              </Marger>

              <Marger top="1.5" bottom="1.5">
                <RadioButton id="domaine-option-0" name="domaines" checked text="Tous les domaines" />
                <RadioButton id="domaine-option-1" name="domaines" text="Agriculture" />
                <RadioButton id="domaine-option-2" name="domaines" text="Industrie et agroalimentaire" />
                <RadioButton id="domaine-option-3" name="domaines" text="Construction" />
                <RadioButton id="domaine-option-4" name="domaines" text="Transport" />
                <RadioButton id="domaine-option-5" name="domaines" text="Hotellerie et restauration" />
                <RadioButton id="domaine-option-6" name="domaines" text="Services aux entreprises" />
                <RadioButton id="domaine-option-7" name="domaines" text="Édition, informatique, communication et conseil" />
                <RadioButton id="domaine-option-8" name="domaines" text="Santé" />
                <RadioButton id="domaine-option-9" name="domaines" text="Autres domaines" />
              </Marger>

              <Marger top="3" bottom="2">
                <Separator />
              </Marger>

              <Marger top="2" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">Localisation</Title>
              </Marger>

              <Marger top="1.5" bottom="1.5">
                <RadioButton id="localisation-option-0" name="localisation" checked text="Toutes les localisations" />
                <RadioButton id="localisation-option-1" name="localisation" text="France" />
                <RadioButton id="localisation-option-2" name="localisation" text="Île-de-France" />
                <RadioButton id="localisation-option-3" name="localisation" text="Nord-Ouest" />
                <RadioButton id="localisation-option-4" name="localisation" text="Nord-Est" />
                <RadioButton id="localisation-option-5" name="localisation" text="Sud-Ouest" />
                <RadioButton id="localisation-option-5" name="localisation" text="Sud-Est" />
              </Marger>

              <Marger top="3" bottom="2">
                <Separator />
              </Marger>

              <Marger top="2" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">Note</Title>
              </Marger>

              <Marger top="1.5" bottom="1.5">
                <RadioButton id="note-option-0" name="score" checked text="Toutes les notes" />
                <RadioButton id="note-option-1" name="score" text="A+" />
                <RadioButton id="note-option-2" name="score" text="A" />
                <RadioButton id="note-option-4" name="score" text="B+" />
                <RadioButton id="note-option-3" name="score" text="B" />
                <RadioButton id="note-option-5" name="score" text="C" />
              </Marger>
            </GridCol>
          </Grid>
        </Marger>
      </div>
    )
  }
}
