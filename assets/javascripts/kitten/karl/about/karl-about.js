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
      <div>
        <Paragraph
          className="k-u-align-center@s-down"
          modifier="tertiary"
          margin={ false }
        >
          Chez KissKissBankBank, nous opérons trois services de financement participatif (KissKissBankBank, LENDOPOLIS, hellomerci) avec une seule équipe technique et produit.
        </Paragraph>

        <Paragraph
          className="k-u-align-center@s-down"
          modifier="tertiary"
        >
          Aujourd‘hui, notre volonté d’unifier les expériences et la charte graphique sur les trois services nous a naturellement poussés vers la démarche d’une bibliothèque de composants réutilisables. Cette bibliothèque s‘accompagne d‘un styleguide vivant qui liste les composants existants et définit un langage commun pour les développeurs et les designers.
            Nous avons donc imaginé Kitten, le premier Kit UI du crowdfunding, ie.
        </Paragraph>
      </div>
    )
  }

  renderBloc1() {
    return (
      <div className="karl-About__bloc">
        <Grid className="karl-About__content">
          <GridCol col-s="12" col-m="5">
            <div className="karl-About__content__item">
              <MixIllustration
                className="karl-About__svg"
                lightColor="#cadbfd"
                darkColor="#4a84ff"
              />
              <div className="karl-About__title">
                <Text
                  tag="p"
                  weight="bold"
                  size="default"
                  className="k-u-color-primary3 k-u-align-center@s-down"
                >
                  Comment utilise-t-on Kitten ?
                </Text>
              </div>
              <div className="karl-About__text">
                <Paragraph
                  margin={ false }
                  modifier="quaternary"
                  className="k-u-align-center@s-down"
                >
                  Kitten nous sert avant tout à centraliser
                  les différents composants utilisés sur nos 3 services.
                  Chaque membre de l’équipe peut être au courant des derniers composants créés.
                </Paragraph>
              </div>
            </div>
          </GridCol>

          <GridCol col-s="12" col-m="5">
            <div className="karl-About__content__item">
              <KittenAboutIllustration
                className="karl-About__svg"
              />
              <div
                className="karl-About__title"
              >
                <Text
                  tag="p"
                  weight="bold"
                  size="default"
                  className="k-u-color-primary3 k-u-align-center@s-down"
                >
                  Pourquoi a-t-on besoin de Kitten ?
                </Text>
              </div>
              <div
                className="karl-About__text"
              >
                <Paragraph
                  margin={ false }
                  modifier="quaternary"
                  className="k-u-align-center@s-down"
                >
                  Kitten nous permet de garder une cohérence d’unification lors de la création et de la modification de composants.
                  L‘unité globale de kitten nous apporte une certaine clarté, une utilité et un gain de temps.
                </Paragraph>
              </div>
            </div>
          </GridCol>
        </Grid>
      </div>
    )
  }

  renderBloc2() {
    return (
      <div className="karl-About__bloc">
        <Grid className="karl-About__content">
          <GridCol col-s="12" col-m="5">
            <div className="karl-About__content__item">
              <GithubAboutIllustration
                className="karl-About__svg"
              />
              <div
                className="karl-About__title"
              >
                <Text
                  tag="p"
                  weight="bold"
                  size="default"
                  className="k-u-color-primary3 k-u-align-center@s-down"
                >
                  Pourquoi nous avons décidé de le rendre open-source ?
                </Text>
              </div>
              <div className="karl-About__text">
                <Paragraph
                  margin={ false }
                  modifier="quaternary"
                  className="k-u-align-center@s-down"
                >
                  Il est important pour nous de contribuer à la communauté Tech en partageant notre librairie et en vous apportant la possibilité de collaborer à l‘évolution de Kitten.
                </Paragraph>
              </div>
            </div>
          </GridCol>

          <GridCol col-s="12" col-m="5">
            <div className="karl-About__content__item">
              <NetworkAboutIllustration
                className="karl-About__svg"
              />
              <div
                className="karl-About__title"
              >
                <Text
                  tag="p"
                  weight="bold"
                  size="default"
                  className="k-u-color-primary3 k-u-align-center@s-down"
                >
                  Comment utiliser Kitten ?
                </Text>
              </div>
              <div className="karl-About__text">
                <Paragraph
                  margin={ false }
                  modifier="quaternary"
                  className="k-u-align-center@s-down"
                >
                  Tous nos partenaires peuvent utiliser l‘ensemble du kit UI.
                </Paragraph>
                <a
                  href="https://github.com/KissKissBankBank/kitten"
                  target="_blank"
                  className={ classNames('k-u-color-font-1',
                                         'k-u-size-tiny',
                                         'k-u-align-center@s-down',
                                         'karl-About__link') }
                >
                  Fork me !
                </a>
              </div>
            </div>
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
