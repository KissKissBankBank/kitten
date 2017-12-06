import React, { Component } from 'react'
import { KarlLandingPageHeader } from 'kitten/karl/headers/header'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Button } from 'kitten/components/buttons/button'
import { Label } from 'kitten/components/form/label'
import { TextInput } from 'kitten/components/form/text-input'
import { ProjectCard } from 'kitten/components/cards/project-card'
import { KarlFooterLendo } from 'kitten/karl/footer/footer-lendo'

// LANDING PAGE

export class KarlLandingPage extends Component {
  render() {
    return (
      <div>
        <KarlLandingPageHeader />

        <Container>
          <Grid>
            <GridCol
              col="4"
              style={ { background: '#caecf4' } }
            />
            <GridCol col="7" offset="1">
              <Marger top="15" bottom="3">
                <Title margin={ false }>
                  Premier site de financement participatif sur l’agriculture
                  et l’alimentation.
                </Title>
              </Marger>

              <Marger top="3" bottom="5">
                <Text size="huge" style="italic" weight="bold">
                  — De la fourche à la fourchette
                </Text>
              </Marger>

              <Marger top="5" bottom="15">
                <Button modifier="helium" size="big">
                  Financer mon projet
                </Button>
              </Marger>
            </GridCol>
          </Grid>
        </Container>

        <Container>
          <Grid>
            <GridCol
              col="6"
              offset="1"
              style={ {
                background: '#789641',
                position: 'relative',
                top: '80px',
                marginBottom: '80px',
              } }
            >
              <div style={ { paddingLeft: '100px', paddingRight: '100px' } }>
                <Marger top="10" bottom="2">
                  <Title
                    modifier="tertiary"
                    margin={ false }
                    style={ { color: '#fff' } }
                  >
                    Agriculture, alimentation, restauration&nbsp;: financez vos
                    projets sur KissKissBankBank
                  </Title>
                </Marger>

                <Marger top="2" bottom="3">
                  <span style={ { fontSize: '50px', color: '#fff' } }>—</span>
                </Marger>

                <Marger top="3" bottom="5">
                  <Paragraph margin={ false } style={ { color: '#fff' } }>
                    Financer l’installation de son exploitation, valoriser sa
                    production, développer sa commercialisation en circuit-court,
                    ouvrir une épicerie locale ou un concept de restauration…
                    tout devient possible grâce à une communauté de plus d’1,3
                    million de KissBankers qui s’engagent au quotidien pour une
                    alimentation plus juste.
                  </Paragraph>
                </Marger>

                <Marger top="5" bottom="10">
                  <Button modifier="helium" size="big">
                    Financer mon projet
                  </Button>
                </Marger>
              </div>
            </GridCol>

            <GridCol
              col="7"
              style={ {
                background: '#caecf4',
                marginLeft:'-237px',
                marginBottom: '80px',
              } }
            />
          </Grid>
        </Container>

        <Container>
          <Grid>
            <GridCol
              col="5"
              style={ {
                position: 'relative',
                top: '260px',
              } }
            >
              <figure
                style={ {
                  position: 'relative',
                } }
              >
                <img
                  src="https://placehold.it/500x800/caecf4/caecf4"
                  alt=""
                  style={ {
                    display: 'block',
                    width: '100%',
                  } }
                />
                <figcaption
                  style={ {
                    position: 'absolute',
                    bottom: 0,
                    background: 'white',
                    right: 0,
                    padding: '20px 40px',
                  } }
                >
                  <strong>Augustin Mille</strong> <br />
                  Spécialiste Agriculture & Alimentation
                </figcaption>
              </figure>
            </GridCol>

            <GridCol col="5" offset="1">
              <Marger top="10" bottom="2">
                <Title
                  modifier="tertiary"
                  margin={ false }
                >
                  Agriculture, alimentation, restauration&nbsp;: financez vos
                  projets sur KissKissBankBank
                </Title>
              </Marger>

              <Marger top="2" bottom="3">
                <span style={ { fontSize: '50px' } }>—</span>
              </Marger>

              <Marger top="3" bottom="4">
                <Paragraph margin={ false }>
                  72% des porteurs de projet accompagnés par un spécialiste,
                  réussissent leur collecte sur KissKissBankBank
                </Paragraph>
              </Marger>

              <Marger top="4" bottom="4">
                <Grid>
                  <GridCol col="6">
                    <Marger bottom="1.5">
                      <Label>Nom</Label>
                    </Marger>

                    <Marger top="1.5">
                      <TextInput />
                    </Marger>
                  </GridCol>

                  <GridCol col="6">
                    <Marger bottom="1.5">
                      <Label>Prénom</Label>
                    </Marger>

                    <Marger top="1.5">
                      <TextInput />
                    </Marger>
                  </GridCol>
                </Grid>
              </Marger>

              <Marger top="4" bottom="4">
                <Marger bottom="1.5">
                  <Label>Adresse mail</Label>
                </Marger>

                <Marger top="1.5">
                  <TextInput />
                </Marger>
              </Marger>

              <Marger top="4" bottom="4">
                <Marger bottom="1.5">
                  <Label>Téléphone (optionnel)</Label>
                </Marger>

                <Marger top="1.5">
                  <TextInput />
                </Marger>
              </Marger>

              <Marger top="4" bottom="4">
                <Marger bottom="1.5">
                  <Label>Présentez-nous votre projet en quelques mots</Label>
                </Marger>

                <Marger top="1.5">
                  <TextInput tag="textarea" rows="6" />
                </Marger>
              </Marger>

              <Marger top="5" bottom="2">
                <Button modifier="helium" size="big">
                  Envoyer
                </Button>
              </Marger>
            </GridCol>
          </Grid>
        </Container>

        <Container>
          <Grid>
            <GridCol col="6" offset="3">
              <Marger top="17" bottom="2">
                <Title
                  modifier="secondary"
                  margin={ false }
                  className="k-u-align-center"
                >
                  Ils soutiennent <br />
                  vos projets agriculture <br />
                  & alimentation
                </Title>
              </Marger>

              <Marger top="2" bottom="3" className="k-u-align-center">
                <span style={ { fontSize: '50px' } }>—</span>
              </Marger>

              <Marger top="3" bottom="5">
                <Paragraph margin={ false } className="k-u-align-center">
                  KissKissBankBank s’associe à des acteurs de l’agriculture et
                  de l’alimentation pour vous aider à développer votre projet.
                </Paragraph>
              </Marger>
            </GridCol>
          </Grid>
        </Container>

        <Container>
          <Grid>
            <GridCol col="3">
              <Marger bottom="2">
                <img
                  src="https://placehold.it/500x500/caecf4/caecf4"
                  alt=""
                  style={ {
                    display: 'block',
                    width: '100%',
                  } }
                />
              </Marger>

              <Marger top="2" bottom=".5">
                <Title modifier="senary" margin={ false }>
                  La Ruche Qui Dit Oui&nbsp;!
                </Title>
              </Marger>

              <Marger top=".5" bottom=".5">
                <Text>
                  Agriculture
                </Text>
              </Marger>

              <Marger top=".5">
                <span style={ { fontSize: '30px' } }>—</span>
              </Marger>
            </GridCol>

            <GridCol col="3">
              <Marger bottom="2">
                <img
                  src="https://placehold.it/500x500/caecf4/caecf4"
                  alt=""
                  style={ {
                    display: 'block',
                    width: '100%',
                  } }
                />
              </Marger>

              <Marger top="2" bottom=".5">
                <Title modifier="senary" margin={ false }>
                  La Ruche Qui Dit Oui&nbsp;!
                </Title>
              </Marger>

              <Marger top=".5" bottom=".5">
                <Text>
                  Agriculture
                </Text>
              </Marger>

              <Marger top=".5">
                <span style={ { fontSize: '30px' } }>—</span>
              </Marger>
            </GridCol>

            <GridCol col="3">
              <Marger bottom="2">
                <img
                  src="https://placehold.it/500x500/caecf4/caecf4"
                  alt=""
                  style={ {
                    display: 'block',
                    width: '100%',
                  } }
                />
              </Marger>

              <Marger top="2" bottom=".5">
                <Title modifier="senary" margin={ false }>
                  La Ruche Qui Dit Oui&nbsp;!
                </Title>
              </Marger>

              <Marger top=".5" bottom=".5">
                <Text>
                  Agriculture
                </Text>
              </Marger>

              <Marger top=".5">
                <span style={ { fontSize: '30px' } }>—</span>
              </Marger>
            </GridCol>

            <GridCol col="3">
              <Marger bottom="2">
                <img
                  src="https://placehold.it/500x500/caecf4/caecf4"
                  alt=""
                  style={ {
                    display: 'block',
                    width: '100%',
                  } }
                />
              </Marger>

              <Marger top="2" bottom=".5">
                <Title modifier="senary" margin={ false }>
                  La Ruche Qui Dit Oui&nbsp;!
                </Title>
              </Marger>

              <Marger top=".5" bottom=".5">
                <Text>
                  Agriculture
                </Text>
              </Marger>

              <Marger top=".5">
                <span style={ { fontSize: '30px' } }>—</span>
              </Marger>
            </GridCol>
          </Grid>
        </Container>

        <Container>
          <Grid>
            <GridCol col="12">
              <Marger top="10" bottom="3">
                <Title modifier="secondary" margin={ false }>
                  Ils ont poussé <br />
                  sur KissKissBankBank
                </Title>
              </Marger>
            </GridCol>
          </Grid>
        </Container>

        <Container>
          <Marger bottom="8">
            <Grid>
              <GridCol col="4">
                <ProjectCard />
              </GridCol>

              <GridCol col="4">
                <ProjectCard />
              </GridCol>

              <GridCol col="4">
                <ProjectCard />
              </GridCol>
            </Grid>
          </Marger>
        </Container>

        <Container>
          <Grid>
            <GridCol col="6" style={ { background: '#caecf4' } } />
            <GridCol col="4" offset="1">
              <Marger top="3" bottom="2">
                <Title modifier="secondary" margin={ false }>
                  François M. a collecté 4&nbsp;500&nbsp;€
                </Title>
              </Marger>

              <Marger top="2" bottom="3">
                <span style={ { fontSize: '50px' } }>—</span>
              </Marger>

              <Marger top="3" bottom=".5">
                <Title modifier="senary" margin={ false }>
                  Maraîchage Sol Vivant
                </Title>
              </Marger>

              <Marger top=".5" bottom="3">
                <Paragraph modifier="tertiary" margin={ false }>
                  « Grâce à la communauté qui s’est créée autour de Maraichage
                  Sol Vivant lors de la collecte, nous avons tous les jours
                  des porteurs de projets intéressés pour changer leurs
                  pratiques, pour produire mieux dans le respect des sols et
                  des vers de terre. La recherche avance également avec de plus
                  en plus de vidéos de formations en libre accès sur internet !
                  Crowdfunding et agriculture, un duo gagnant »
                </Paragraph>
              </Marger>
            </GridCol>
          </Grid>
        </Container>

        <Container>
          <Grid>
            <GridCol col="12">
              <Marger top="12" bottom="2">
                <Title modifier="tertiary" margin={ false }>
                  On parle de vous sur notre blog
                </Title>
              </Marger>
            </GridCol>
          </Grid>
        </Container>

        <Container>
          <Marger bottom="11">
            <Grid>
              <GridCol col="4">
                <ProjectCard />
              </GridCol>

              <GridCol col="4">
                <ProjectCard />
              </GridCol>

              <GridCol col="4">
                <ProjectCard />
              </GridCol>
            </Grid>
          </Marger>
        </Container>

        <KarlFooterLendo />
      </div>
    )
  }
}
