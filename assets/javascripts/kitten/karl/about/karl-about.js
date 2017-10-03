import React, { Component } from 'react'
import classNames from 'classnames'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'
import { GithubAboutIllustration } from 'kitten/components/illustrations/github-about-illustration'
import { KittenAboutIllustration } from 'kitten/components/illustrations/kitten-about-illustration'
import { MixIllustration } from 'kitten/components/illustrations/mix-illustration'
import { NetworkAboutIllustration } from 'kitten/components/illustrations/network-about-illustration'

class KarlAboutInfoBlock extends Component {
  renderIllustration() {
    return (
      <Marger
        top="1.5"
        bottom="1.5"
        className="k-u-align-center@s-down">
        { this.props.illustration }
      </Marger>
    )
  }

  renderTitle() {
    return (
      <Marger
        top="1.5"
        bottom="1.5"
        className={ classNames('k-u-blockAlign-center@m-down',
                                'k-u-blockAlign-start@m-up') }
      >
        <Text
          tag="p"
          weight="bold"
          margin={ false }
          size="big"
          className={ classNames('k-u-color-primary3',
                                 'k-u-align-center@s-down') }
        >
          { this.props.title }
        </Text>
      </Marger>
    )
  }

  renderLink() {
    return (
      <Text
        tag="a"
        href="https://github.com/KissKissBankBank/kitten"
        target="_blank"
        margin={ false }
        modifier="tertiary"
        weight="bold"
        className="karl-About__link"
      >
        { this.props.href }
      </Text>
    )
  }

  renderParagraph() {
    return (
      <Paragraph
         margin={ false }
         modifier="tertiary"
       >
         { this.props.paragraph }
      </Paragraph>
    )
  }

  renderContent() {
    return (
      <Marger
        top="1.5"
        bottom="1.5"
        className={ classNames('k-u-align-center@m-down',
                                  'k-u-align-left@m-up',
                                  'k-u-blockAlign-center@m-down',
                                  'k-u-blockAlign-start@m-up') }
      >
        { this.renderParagraph() }
        { this.props.href ? this.renderLink() : null }
      </Marger>
    )
  }

  render() {
    return (
      <GridCol col-s="12" col-m="5">
        <Marger top="7">
          { this.renderIllustration() }
          { this.renderTitle() }
          { this.renderContent() }
        </Marger>
      </GridCol>
    )
  }
}

export class KarlAbout extends Component {
  renderIntro() {
    return (
      <div>
        <Marger top="1.5" bottom="1.5">
          <Paragraph
            className="k-u-align-center@s-down"
            modifier="secondary"
            margin={ false }
          >
            Chez KissKissBankBank, nous opérons trois services de financement
            participatif (KissKissBankBank, LENDOPOLIS, hellomerci) avec une
            seule équipe technique et produit.
          </Paragraph>
        </Marger>

        <Marger top="1.5" bottom="1.5">
          <Paragraph
            className="k-u-align-center@s-down"
            modifier="secondary"
            margin={ false }
          >
            Aujourd‘hui, notre volonté d’unifier les expériences et la charte
            graphique sur les trois services nous a naturellement poussés vers
            la démarche d’une bibliothèque de composants réutilisables.
            Cette bibliothèque s‘accompagne d‘un styleguide vivant qui liste les
            composants existants et définit un langage commun pour les
            développeurs et les designers.
            Nous avons donc imaginé Kitten, le premier Kit UI du
            crowdfunding, ie.
          </Paragraph>
        </Marger>
      </div>
    )
  }

  render() {
    return (
      <Container>
        <Marger top="10" bottom="10">
          <Grid>
            <GridCol col-l="10" offset-l="1">
              <div>
                { this.renderIntro() }
                <Grid className="karl-About__content">
                  <KarlAboutInfoBlock
                    illustration={
                      <MixIllustration
                        height="80"
                        lightColor="#cadbfd"
                        darkColor="#4a84ff"
                      />
                    }
                    title="Comment utilise-t-on Kitten ?"
                    paragraph="Kitten nous sert avant tout à centraliser
                               les différents composants utilisés sur nos
                               3 services.
                               Chaque membre de l‘équipe peut être au
                               courant des derniers composants créés."
                  />
                  <KarlAboutInfoBlock
                    illustration={
                      <KittenAboutIllustration
                        height="80"
                      />
                    }
                    title="Pourquoi a-t-on besoin de Kitten ?"
                    paragraph="Kitten nous permet de garder une cohérence
                               d‘unification lors de la création et de la
                               modification de composants.
                               L‘unité globale de kitten nous apporte une
                               certaine clarté, une utilité et un gain de
                               temps."
                  />
                  <KarlAboutInfoBlock
                    illustration={
                      <GithubAboutIllustration
                        height="80"
                      />
                    }
                    title="Pourquoi avons-nous décidé de le rendre open source ?"
                    paragraph="Il est important pour nous de contribuer à
                               la communauté Tech en partageant notre
                               librairie et en vous apportant la possibilité
                               de collaborer à l‘évolution de Kitten."
                  />
                  <KarlAboutInfoBlock
                    illustration={
                      <NetworkAboutIllustration
                        height="80"
                      />
                    }
                    title="Comment utiliser Kitten ?"
                    paragraph="Tous nos partenaires peuvent utiliser
                               l‘ensemble du kit UI."
                    href="Fork me!"
                  />
                </Grid>
              </div>
            </GridCol>
          </Grid>
        </Marger>
      </Container>
    )
  }
}
