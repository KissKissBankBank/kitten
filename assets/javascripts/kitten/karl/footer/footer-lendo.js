import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'
import { Row } from 'kitten/components/grid/row'
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
import { Line } from 'kitten/components/layout/line'

export class KarlFooterLendo extends Component {
  renderNetwork() {
    return (
      <Row
        lightTopBorder>
        <Marger top="3" bottom="3">
          <Grid>
            <GridCol>
              <Grid>
                <GridCol col-m="6" col-l="7">
                  <Grid>
                    <GridCol col-m="12" col-l="5">
                      <Paragraph
                        className="k-FooterLendo__text"
                        modifier="tertiary"
                        margin={ false }>
                        Inscrivez-vous à notre Newsletter
                        <span className="k-FooterLendo__network--textNone">
                          et à l'alerte nouveau projet
                        </span>
                      </Paragraph>
                    </GridCol>
                    <GridCol col-m="12" col-l="7" className="k-FooterLendo__network--list">
                      <TextInputWithButton />
                    </GridCol>
                  </Grid>
                </GridCol>

                <GridCol col-m="6" col-l="5" className="k-FooterLendo__network--marger">
                  <Grid>
                    <GridCol col-l="4" offset-l="3" className="k-FooterLendo__network--follow">
                      <Paragraph
                        modifier="tertiary"
                        margin={ false }
                        className="k-FooterLendo__text k-FooterLendo__network--followText">
                        Suivez nous
                      </Paragraph>
                    </GridCol>
                    <GridCol col-l="5" className="k-u-align-center k-FooterLendo__network--list">
                      <FacebookButtonIcon className="k-FooterLendo__buttonIcon" />
                      <TwitterButtonIcon className="k-FooterLendo__buttonIcon" />
                      <LinkedinButtonIcon />
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

  renderQuote() {
    return (
      <Row
        lightTopBorder>
        <Marger top="2" bottom="2">
          <Paragraph
            italic
            modifier="tertiary"
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
        <Marger top="5" bottom="5">
          <Grid>
            <GridCol col-l="2">
              <div className="k-FooterLendo__logo--img k-FooterLendo__logo--imgLendo">
                <img
                  src="/assets/brand/new-lendopolis.svg"
                  alt="" />
                </div>
            </GridCol>
            <GridCol col-l="10">
              <Grid>
                <GridCol col-m="3" col-l="3">
                  <LinkList
                    margin={ false }
                    items={ items } />
                </GridCol>
                <GridCol col-m="3" col-l="3">
                  <LinkList
                    margin={ false }
                    items={ items2 } />
                </GridCol>
                <GridCol col-m="3" col-l="3">
                  <LinkList
                    margin={ false }
                    items={ items3 } />
                </GridCol>
                <GridCol col-m="3" col-l="3">
                  <LinkList
                    margin={ false }
                    items={ items4 } />
                </GridCol>
              </Grid>
            </GridCol>
          </Grid>
        </Marger>
      </Row>
    )
  }

  renderNotice() {
    return(
      <Row>
        <Grid>
          <GridCol>
            <Grid>
              <GridCol col-m="6" col-l="4">
                <div className="k-FooterLendo__notice__logo">
                  <div className="k-FooterLendo__logo--img">
                    <img
                      src="/assets/partners/french-authorities.svg"
                      alt="Autorités Française"
                    />
                  </div>
                  <Paragraph
                    modifier="quaternary"
                    className="k-FooterLendo__text"
                    margin={ false }>
                    LENDOPOLIS est une plateforme de financement participatif régulée par les autorités françaises. Immatriculation : 14007218
                  </Paragraph>
                </div>
              </GridCol>

              <GridCol col-m="6" col-l="4" className="k-FooterLendo__notice__logos--list--item">
                <div className="k-FooterLendo__notice__logo">
                  <div className="k-FooterLendo__logo--img">
                    <img
                      src="/assets/partners/mangopay.svg"
                      alt="MANGOPAY"
                      className="k-FooterLendo__logo--imgMangopay"
                    />
                  </div>
                  <Paragraph
                    modifier="quaternary"
                    className="k-FooterLendo__text"
                    margin={ false }>
                    KissKissBankBank & Co est agent de l'institution financière MANGOPAY SA. Paiements sécurisés avec MANGOPAY SA.
                  </Paragraph>
                </div>
              </GridCol>

              <GridCol col-l="4" className="k-FooterLendo__notice--copyright">
                <div>
                  <Paragraph
                    modifier="quaternary"
                    className= "k-u-strong"
                    margin={ false }>
                    © 2016 KissKissBankBank & Co
                  </Paragraph>
                </div>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </Row>
    )
  }

  render() {
    return (
      <div className="k-FooterLendo">
        { this.renderNetwork() }
        { this.renderQuote() }
        { this.renderList() }
        { this.renderNotice() }
      </div>
    )
  }
}
