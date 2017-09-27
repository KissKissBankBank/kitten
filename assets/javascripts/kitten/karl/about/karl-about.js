import React, { Component } from 'react'
import classNames from 'classnames'
import { Row } from 'kitten/components/grid/row'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'
import { Title } from 'kitten/components/typography/title'
import { GithubAboutIllustration } from 'kitten/components/illustrations/github-about-illustration'
import { KittenAboutIllustration } from 'kitten/components/illustrations/kitten-about-illustration'
import { MixIllustration } from 'kitten/components/illustrations/mix-illustration'
import { NetworkAboutIllustration } from 'kitten/components/illustrations/network-about-illustration'

export class KarlAbout extends Component {
  renderIntro() {
    return (
      <Paragraph
        className="k-u-align-center@s-down"
        modifier="tertiary"
        margin={ false }
      >
        Chez KissKissBankBank, nous opérons trois services de financement participatif (KissKissBankBank, LENDOPOLIS, hellomerci) avec une seule équipe technique et produit.
        Aujourd’hui, notre volonté d’unifier les expériences et la charte graphique sur les trois services nous a naturellement poussés vers la démarche d’une bibliothèque de composants réutilisables. Cette bibliothèque s'accompagne d'un styleguide vivant qui liste les composants existants et définit un langage commun pour les développeurs et les designers.
          Nous avons donc imaginé Kitten, le premier Kit UI du crowdfunding, ie.
      </Paragraph>
    )
  }

  renderBloc1() {
    return (
      <div className="karl-About__margerNone">
        <Grid className="karl-About__items">
          <GridCol col-s="12" col-m="5">
            <Grid>
              <GridCol>
                <div className="karl-About__itemsList">
                  <MixIllustration
                    className="karl-About__svg"
                    lightColor="#cadbfd"
                    darkColor="#4a84ff"
                  />
                  <Marger
                    top="1.2"
                    className="karl-About__title"
                  >
                    <Text
                      className="k-u-color-primary3"
                      weight="bold"
                      size="default"
                    >
                      Comment utilise-t-on Kitten ?
                    </Text>
                  </Marger>
                  <Marger
                    top="1"
                    className="karl-About__text"
                  >
                    <Paragraph
                      margin={ false }
                      modifier="quaternary"
                    >
                      Kitten nous sert avant tout à centraliser
                      les différents composants utilisés sur nos 3 services.
                      Chaque membre de l’équipe peut être au courant des derniers composants crées.
                    </Paragraph>
                  </Marger>
                </div>
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol col-s="12" col-m="5">
            <Grid>
              <GridCol>
                <div className="karl-About__itemsList">
                  <KittenAboutIllustration
                    className="karl-About__svg"
                  />
                  <Marger
                    top="1.2"
                    className="karl-About__title"
                  >
                    <Text
                      className="k-u-color-primary3"
                      weight="bold"
                      size="default"
                    >
                      Pourquoi a-t-on besoin de Kitten ?
                    </Text>
                  </Marger>
                  <Marger
                    top="1"
                    className="karl-About__text"
                  >
                    <Paragraph
                      margin={ false }
                      modifier="quaternary"
                    >
                      Kitten nous permet de garder une cohérence d’unification lors de la création et de la modification de composants.
                      L’unité globale de kitten nous apporte une certaine clarté, une utilité et un gain de temps.
                    </Paragraph>
                  </Marger>
                </div>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </div>
    )
  }

  renderBloc2() {
    return (
      <div className="karl-About__margerNone">
        <Grid className="karl-About__items">
          <GridCol col-s="12" col-m="5">
            <Grid>
              <GridCol>
                <div className="karl-About__itemsList">
                  <GithubAboutIllustration
                    className="karl-About__svg"
                  />
                  <Marger
                    top="1.2"
                    className="karl-About__title"
                  >
                    <Text
                      className="k-u-color-primary3"
                      weight="bold"
                      size="default"
                    >
                      Pourquoi nous avons décidé d’OpenSourcer ?
                    </Text>
                  </Marger>
                  <Marger
                    top="1"
                    className="karl-About__text"
                  >
                    <Paragraph
                      margin={ false }
                      modifier="quaternary"
                    >
                      Il est important pour nous de contribuer à la communauté Tech en partageant notre librairie et en vous apportant la possibilité de collaborer à l'\évolution de Kitten.
                    </Paragraph>
                  </Marger>
                </div>
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol col-s="12" col-m="5">
            <Grid>
              <GridCol>
                <div className="karl-About__itemsList">
                  <NetworkAboutIllustration
                    className="karl-About__svg"
                  />
                  <Marger
                    top="1.2"
                    className="karl-About__title"
                  >
                    <Text
                      className="k-u-color-primary3"
                      weight="bold"
                      size="default"
                    >
                      Comment utiliser Kitten ?
                    </Text>
                  </Marger>
                  <Marger
                    top="1"
                    className="karl-About__text"
                  >
                    <Paragraph
                      margin={ false }
                      modifier="quaternary"
                    >
                      Tous nos partenaires peuvent utiliser l'\ensemble du kit UI.
                    </Paragraph>
                  </Marger>
                </div>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </div>
    )
  }

  render() {
    return (
      <Row>
        <Marger top="12" bottom="10">
          <Grid>
            <GridCol col-l="10" offset-l="1">
              <div>
                { this.renderIntro() }
                { this.renderBloc1() }
                { this.renderBloc2() }
              </div>
            </GridCol>
          </Grid>
        </Marger>
      </Row>
    )
  }
}
