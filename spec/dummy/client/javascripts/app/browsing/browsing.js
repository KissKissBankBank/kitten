import React from 'react'
import classNames from 'classnames'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { LegoGrid } from 'kitten/components/grid/lego-grid'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Marger } from 'kitten/components/layout/marger'
import { RadioButton } from 'kitten/components/form/radio-button'
import { KarlProjectCard } from 'kitten/karl/cards/project-card'
import { Separator } from 'kitten/components/layout/separator'
import { Progress } from 'kitten/components/meters/progress'

const randomOwnerAvatarSrc = (key) => {
  return `http://lorempixel.com/40/40/abstract/${ key }`
}

const randomImage = (key) => {
  return `http://lorempixel.com/620/310/business/${ key }`
}

const projectDefaultProps = {
  linkHref: "#",
  linkTitle: "Se rendre sur le projet …",
  ownerName: 'Léa & Léo Groupe',
  ownerLocation: 'Paris',
  tags: [{ key: 'tpe-pme', item: 'TPE / PME' }],
  title: 'Reprise d\'une micro crèche',
  info1: { value: '8,8 %', text: 'Taux d\'intérêt' },
  info2: { value: '48 mois', text: 'Durée' },
  info3: { value: '135 000 €', text: 'Objectif' },
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
      {
        id: 'project-4',
        status: 'succeed',
        score: 'A',
        imageSrc: randomImage(4),
        ownerAvatarSrc: randomOwnerAvatarSrc(4),
        info1: { value: '8,8 %', text: 'Taux d\'intérêt', locked: true },
        info2: { value: '48 mois', text: 'Durée', locked: true },
      },
      {
        id: 'project-5',
        status: 'studying',
        score: 'B+',
        imageSrc: randomImage(5),
        ownerAvatarSrc: randomOwnerAvatarSrc(5),
      },
      {
        id: 'project-6',
        status: 'defaulted',
        score: 'C',
        imageSrc: randomImage(3),
        ownerAvatarSrc: randomOwnerAvatarSrc(6),
      },
      {
        id: 'project-7',
        status: 'delayed',
        score: 'A',
        imageSrc: randomImage(4),
        ownerAvatarSrc: randomOwnerAvatarSrc(7),
      },
      {
        id: 'project-8',
        status: 'fraudulent',
        score: 'B+',
        imageSrc: randomImage(8),
        ownerAvatarSrc: randomOwnerAvatarSrc(8),
      },
      {
        id: 'project-9',
        status: 'failed',
        score: 'A+',
        imageSrc: randomImage(5),
        ownerAvatarSrc: randomOwnerAvatarSrc(9),
      },
      {
        id: 'project-10',
        status: 'failed',
        score: 'C',
        imageSrc: randomImage(6),
        ownerAvatarSrc: randomOwnerAvatarSrc(10),
      },
      {
        id: 'project-11',
        status: 'failed',
        score: 'B+',
        imageSrc: randomImage(1),
        ownerAvatarSrc: randomOwnerAvatarSrc(1),
      },
    ]

    const projectCollectingCards = [
      {
        id: 'project-1',
        status: 'collecting',
        score: 'A',
        imageSrc: randomImage(1),
        ownerAvatarSrc: randomOwnerAvatarSrc(1),
        progress: 23,
      },
      {
        id: 'project-2',
        status: 'closing',
        score: 'C',
        imageSrc: randomImage(2),
        ownerAvatarSrc: randomOwnerAvatarSrc(2),
        progress: 23,
      },
      {
        id: 'project-3',
        status: 'collecting',
        score: 'A+',
        imageSrc: randomImage(3),
        ownerAvatarSrc: randomOwnerAvatarSrc(3),
        progress: 23,
        disabled: true,
      },
    ]

    return (
      <div>
        <Marger top="1.5" bottom="3">
          <Title margin={ false } tag="h2" modifier="secondary">
            Collectes du moment
          </Title>
        </Marger>

        <LegoGrid masonryProps={ masonryProps }>
          <LegoGrid.Item key="special-card">
            <div className={ classNames('k-ProjectCard',
                                        'k-Card',
                                        'k-Card--light',
                                        'k-Card--withBorder',
                                        'k-Card--withShadow') }>
              <div className="k-ProjectCard__grid">
                <Title modifier="quaternary">Projets recommandés</Title>
                <Paragraph modifier="tertiary">
                  Nous avons sélectionné pour vous les projets correspondant à
                  votre profil. La souscription aux investissements proposés
                  nécessite de bien comprendre l'engagement financier
                  correspondant.
                </Paragraph>
                <Paragraph modifier="tertiary">
                  Prenez le temps de lire les documents relatifs à chaque
                  projet (Termes et conditions des opérations et Document
                  d'information réglementaire) et n'hésitez pas à nous
                  contacter pour toutes vos questions concernant les projets.
                </Paragraph>
                <Paragraph modifier="tertiary">
                  La maturité des projets ci-contre correspond à votre horizon
                  d'investissement. Nous vous conseillons cependant de
                  n'investir que les sommes dont vous n'aurez pas besoin
                  pendant la durée de remboursement, et de ne pas investir
                  plus de 10% de votre patrimoine financier.
                </Paragraph>
              </div>
            </div>
          </LegoGrid.Item>

          { projectCollectingCards.map(project =>
            <LegoGrid.Item key={ project.id }>
              <KarlProjectCard { ...projectDefaultProps } { ...project } />
            </LegoGrid.Item>
          ) }
        </LegoGrid>

        <Marger top="4" bottom="3">
          <Separator />
        </Marger>

        <Marger top="3" bottom="3">
          <Title margin={ false } tag="h2" modifier="secondary">
            Collectes terminées
          </Title>
        </Marger>

        <LegoGrid masonryProps={ masonryProps }>
          { projectCards.map(project =>
            <LegoGrid.Item key={ project.id }>
              <KarlProjectCard { ...projectDefaultProps } { ...project } />
            </LegoGrid.Item>
          ) }
        </LegoGrid>
      </div>
    )
  }

  render() {
    return (
      <div className={ classNames('k-DevGrid__container',
                                  'k-DevGrid__container--withoutOutline') }>
        <Marger top="3" bottom="3">
          <Grid>
            <GridCol col-l="10" col="12">
              { this.renderLoader() }
              { this.renderProjects() }
            </GridCol>

            <GridCol col="2" className="k-u-hidden@m-down">
              <Marger top="1.5" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">
                  Statuts
                </Title>
              </Marger>

              <Marger top="1.5" bottom="3">
                <RadioButton id="status-option-0"
                             name="status"
                             text="Tous les statuts"
                             defaultChecked />
                <RadioButton id="status-option-1"
                             name="status"
                             text="En cours" />
                <RadioButton id="status-option-2"
                             name="status"
                             text="En remboursement" />
                <RadioButton id="status-option-3"
                             name="status"
                             text="En défaut de paiement" />
                <RadioButton id="status-option-4"
                             name="status"
                             text="En retard de paiement" />
                <RadioButton id="status-option-5"
                             name="status"
                             text="Frauduleux" />
                <RadioButton id="status-option-6"
                             name="status"
                             text="Échouées" />
                <RadioButton id="status-option-7"
                             name="status"
                             text="Annulées" />
              </Marger>

              <Marger top="3" bottom="2">
                <Separator />
              </Marger>

              <Marger top="2" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">
                  Domaines
                </Title>
              </Marger>

              <Marger top="1.5" bottom="1.5">
                <RadioButton id="domaine-option-0"
                             name="domaines"
                             text="Tous les domaines"
                             defaultChecked />
                <RadioButton id="domaine-option-1"
                             name="domaines"
                             text="Agriculture" />
                <RadioButton id="domaine-option-2"
                             name="domaines"
                             text="Industrie et agroalimentaire" />
                <RadioButton id="domaine-option-3"
                             name="domaines"
                             text="Construction" />
                <RadioButton id="domaine-option-4"
                             name="domaines"
                             text="Transport" />
                <RadioButton id="domaine-option-5"
                             name="domaines"
                             text="Hotellerie et restauration" />
                <RadioButton id="domaine-option-6"
                             name="domaines"
                             text="Services aux entreprises" />
                <RadioButton id="domaine-option-7"
                             name="domaines"
                             text="Édition, informatique, communication et conseil" />
                <RadioButton id="domaine-option-8"
                             name="domaines"
                             text="Santé" />
                <RadioButton id="domaine-option-9"
                             name="domaines"
                             text="Autres domaines" />
              </Marger>

              <Marger top="3" bottom="2">
                <Separator />
              </Marger>

              <Marger top="2" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">
                  Localisation
                </Title>
              </Marger>

              <Marger top="1.5" bottom="1.5">
                <RadioButton id="localisation-option-0"
                             name="localisation"
                             text="Toutes les localisations"
                             defaultChecked />
                <RadioButton id="localisation-option-1"
                             name="localisation"
                             text="France" />
                <RadioButton id="localisation-option-2"
                             name="localisation"
                             text="Île-de-France" />
                <RadioButton id="localisation-option-3"
                             name="localisation"
                             text="Nord-Ouest" />
                <RadioButton id="localisation-option-4"
                             name="localisation"
                             text="Nord-Est" />
                <RadioButton id="localisation-option-5"
                             name="localisation"
                             text="Sud-Ouest" />
                <RadioButton id="localisation-option-5"
                             name="localisation"
                             text="Sud-Est" />
              </Marger>

              <Marger top="3" bottom="2">
                <Separator />
              </Marger>

              <Marger top="2" bottom="1.5">
                <Title margin={ false } tag="p" modifier="quaternary">
                  Note
                </Title>
              </Marger>

              <Marger top="1.5" bottom="1.5">
                <RadioButton id="note-option-0"
                             name="score"
                             text="Toutes les notes"
                             defaultChecked />
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
