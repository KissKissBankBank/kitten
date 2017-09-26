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
      <Row>
        <Marger top="12" bottom="3">
          <Grid>
            <GridCol col-m="12" col-l="10" offset-l="1">
              <Paragraph
                modifier="tertiary"
                margin={ false }
              >
                Chez KissKissBankBank, nous opérons trois services de financement participatif (KissKissBankBank, LENDOPOLIS, hellomerci) avec une seule équipe technique et produit.
                Aujourd’hui, notre volonté d’unifier les expériences et la charte graphique sur les trois services nous a naturellement poussés vers la démarche d’une bibliothèque de composants réutilisables. Cette bibliothèque s'accompagne d'un styleguide vivant qui liste les composants existants et définit un langage commun pour les développeurs et les designers.
                  Nous avons donc imaginé Kitten, le premier Kit UI du crowdfunding, ie.
              </Paragraph>
            </GridCol>
          </Grid>
        </Marger>
      </Row>
    )
  }

  renderBloc() {
    return (
      <Row>
        <Marger>
          <Grid>
            <GridCol col-l="5" offset-l="1">
              <Grid>
                <GridCol>
                  <div className="karl-About__items">
                    <MixIllustration className="karl-About__illustrations"/>
                    <Text
                      className="karl-About__title"
                      weight="bold"
                      size="default"
                    >
                      Comment utilise-t-on Kitten ?
                    </Text>
                    <Paragraph
                      margin={ false }
                      modifier="quaternary"
                    >
                      Kitten nous sert avant tout à centraliser
                      les différents composants utilisés sur nos 3 services.
                      Chaque membre de l’équipe peut être au courant des derniers composants crées.
                    </Paragraph>
                  </div>
                </GridCol>
              </Grid>
            </GridCol>
          </Grid>
        </Marger>
      </Row>
    )
  }

  render() {
    return (
      <div className="karl-About">
        { this.renderIntro() }
        { this.renderBloc() }
      </div>
    )
  }
}
