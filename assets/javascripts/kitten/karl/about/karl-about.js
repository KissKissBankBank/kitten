import React, { Component } from 'react'
import classNames from 'classnames'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'
import { Title } from 'kitten/components/typography/title'
import { GithubAboutIllustration } from 'kitten/components/illustrations/github-about-illustration'
import { KittenAboutIllustration } from 'kitten/components/illustrations/kitten-about-illustration'
import { MixIllustration } from 'kitten/components/illustrations/mix-illustration'
import { NetworkAboutIllustration } from 'kitten/components/illustrations/network-about-illustration'

class KarlAboutInfoBlock extends Component {
  // renderIllustration() {
  //   return (

  //   )
  // }

  renderTitle() {
    return (
      <div className="karl-About__title">
        <Text
          tag="p"
          weight="bold"
          size="default"
          className={ classNames('k-u-color-primary3',
                                 'k-u-align-center@s-down') }
        >
          { this.props.title }
        </Text>
      </div>
    )
  }

  renderLink() {
    return (
      <Text
        tag="a"
        href="https://github.com/KissKissBankBank/kitten"
        target="_blank"
        margin={ false }
        modifier="quaternary"
        weight="bold"
      >
        { this.props.href }
      </Text>
    )
  }

  renderParagraph() {
    if (this.props.href) {
      return (
        <div className="karl-About__text">
          <Paragraph
            margin={ false }
            modifier="quaternary"
          >
            { this.props.paragraph }
          </Paragraph>
          { this.renderLink() }
        </div>
      )
    }

    else

    return (
      <div className="karl-About__text">
        <Paragraph
          margin={ false }
          modifier="quaternary"
        >
          { this.props.paragraph }
        </Paragraph>
      </div>
    )
  }

  render() {
    return (
      <GridCol col-s="12" col-m="5">
        <div className="karl-About__content__item">
          <MixIllustration
            className="karl-About__svg"
            lightColor="#cadbfd"
            darkColor="#4a84ff"
          />
          { this.renderTitle() }
          { this.renderParagraph() }
        </div>
      </GridCol>
    )
  }
}

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

  render() {
    return (
      <Container>
        <Marger top="12" bottom="10">
          <Grid>
            <GridCol col-l="10" offset-l="1">
              <div>
                { this.renderIntro() }
                <div className="karl-About__bloc">
                  <Grid className="karl-About__content">
                    <KarlAboutInfoBlock
                      title="Comment utilise-t-on Kitten ?"
                      paragraph="Kitten nous sert avant tout à centraliser
                                 les différents composants utilisés sur nos
                                 3 services.
                                 Chaque membre de l’équipe peut être au
                                 courant des derniers composants créés."
                    />
                    <KarlAboutInfoBlock
                      title="Pourquoi a-t-on besoin de Kitten ?"
                      paragraph="Kitten nous permet de garder une cohérence
                                 d’unification lors de la création et de la
                                 modification de composants.
                                 L‘unité globale de kitten nous apporte une
                                 certaine clarté, une utilité et un gain de
                                 temps."
                    />
                  </Grid>
                </div>

                <div className="karl-About__bloc">
                  <Grid className="karl-About__content">
                    <KarlAboutInfoBlock
                      title="Pourquoi nous avons décidé de le rendre open-source ?"
                      paragraph="Il est important pour nous de contribuer à
                                 la communauté Tech en partageant notre
                                 librairie et en vous apportant la possibilité
                                 de collaborer à l‘évolution de Kitten."
                    />
                    <KarlAboutInfoBlock
                      title="Comment utiliser Kitten ?"
                      paragraph="Tous nos partenaires peuvent utiliser
                                 l‘ensemble du kit UI."
                      href="Fork me !"
                    />
                  </Grid>
                </div>
              </div>
            </GridCol>
          </Grid>
        </Marger>
      </Container>
    )
  }
}
