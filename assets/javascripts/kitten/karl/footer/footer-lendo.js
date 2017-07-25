import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Title } from 'kitten/components/typography/title'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookButtonIcon,
         TwitterButtonIcon,
         LinkedinButtonIcon } from 'kitten/components/buttons/social-button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { LinkList } from 'kitten/components/links/link-list'
import { Row } from 'kitten/components/grid/row'

export class KarlFooterLendo extends Component {
  renderNetwork() {
    return (
      <Row
        lightTopBorder>
        <Marger top="3" bottom="3">
          <Grid>
            <GridCol col="12">
              <div className="k-FooterLendo__network">
                <Grid>
                  <GridCol col="2">
                    <Paragraph
                      modifier="tertiary"
                      margin={ false }>
                      Inscrivez-vous à notre Newsletter et à l'alerte nouveau projet
                    </Paragraph>
                  </GridCol>
                  <GridCol col="4">
                    <TextInputWithButton />
                  </GridCol>
                  <GridCol col="2" />
                  <GridCol col="2">
                    <Paragraph
                      modifier="tertiary"
                      margin={ false }
                      className="k-u-align-right">
                      Suivez nous
                    </Paragraph>
                  </GridCol>
                  <GridCol col="2">
                    <FacebookButtonIcon className="k-FooterLendo__buttonIcon" />
                    <TwitterButtonIcon className="k-FooterLendo__buttonIcon" />
                    <LinkedinButtonIcon />
                  </GridCol>
                </Grid>
              </div>
            </GridCol>
          </Grid>
        </Marger>
      </Row>
    )
  }

  renderQuote() {
    return (
      <Row
        lightTopBorder>
        <Marger top="2" bottom="2">
          <Paragraph
            italic
            className="k-u-align-center">
            Attention : Investir présente un risque d’illiquidité et de perte partielle ou totale en capital.<br/>
            Vérifiez vos capacités financières avant d’investir.
          </Paragraph>
        </Marger>
      </Row>
    )
  }

  renderList() {
    const items = [
      { key: 'key1', item: 'Comment emprunter', href: '#' },
      { key: 'key2', item: 'Déposer mon projet', href: '#' },
    ]

    const items2 = [
      { key: 'key1', item: 'Comment investir', href: '#' },
      { key: 'key2', item: 'Fiscalité', href: '#' },
      { key: 'key3', item: 'Découvrez les projets', href: '#' },
      { key: 'key4', item: 'Projets recommandés', href: '#' },
      { key: 'key5', item: 'Simulateur', href: '#' },
    ]

    const items3 = [
      { key: 'key1', item: 'Blog', href: '#' },
      { key: 'key2', item: 'Statistiques', href: '#' },
      { key: 'key3', item: 'FAQ', href: '#' },
      { key: 'key4', item: 'Mentors', href: '#' },
    ]

    const items4 = [
      { key: 'key1', item: 'Contact', href: '#' },
      { key: 'key2', item: 'Devenir partenaire', href: '#' },
      { key: 'key3', item: 'Mentions légales', href: '#' },
      { key: 'key4', item: 'Réclamations', href: '#' },
      { key: 'key4', item: 'CGU', href: '#' },
    ]

    return (
      <Row
        lightTopBorder>
        <Marger top="7.5" bottom="2">
          <Grid>
            <GridCol col="12">
              <Grid>
                <GridCol col="2">
                  <img
                    className="k-FooterLendo__logo"
                    src="/assets/brand/lendopolis.svg"
                    alt="" />
                </GridCol>
                <GridCol col="10">
                  <Grid>
                    <GridCol col="12">
                      <Grid>
                        <GridCol col="3">
                          <LinkList items={ items } />
                        </GridCol>
                        <GridCol col="3">
                          <LinkList items={ items2 } />
                        </GridCol>
                        <GridCol col="3">
                          <LinkList items={ items3 } />
                        </GridCol>
                        <GridCol col="3">
                          <LinkList items={ items4 } />
                        </GridCol>
                      </Grid>
                    </GridCol>
                  </Grid>
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
      <div className="k-FooterLendo">
        { this.renderNetwork() }
        { this.renderQuote() }
        { this.renderList() }
      </div>
    )
  }
}
