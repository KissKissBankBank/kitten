import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'
import { Row } from 'kitten/components/grid/row'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Title } from 'kitten/components/typography/title'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { LinkList } from 'kitten/components/links/link-list'
import { Line } from 'kitten/components/layout/line'

export class KarlFooterLendo extends Component {
  renderNetwork() {
    return (
      <Row lightTopBorder>
        <Marger top="3" bottom="3">
          <Grid>
            <GridCol col-m="6" col-l="7">
              <Grid>
                <GridCol col-m="12" col-l="5">
                  <Paragraph
                    className={classNames(
                      'k-u-align-center@l-down',
                      'k-u-align-left@l-up'
                    )}
                    modifier="tertiary"
                    margin={false}
                  >
                    Inscrivez-vous à notre Newsletter{' '}
                    <span className="k-u-hidden@m-down">
                      et à l’alerte nouveau projet
                    </span>
                  </Paragraph>
                </GridCol>

                <GridCol
                  col-m="12"
                  col-l="7"
                  className={classNames(
                    'k-u-margin-top-single@m-down',
                    'k-u-blockAlign-center'
                  )}
                >
                  <TextInputWithButton
                    value="Envoyer"
                    textInputProps={{ tiny: true }}
                  />
                </GridCol>
              </Grid>
            </GridCol>

            <GridCol
              col-m="6"
              col-l="5"
              className="k-u-margin-top-triple@s-down"
            >
              <div className="karl-FooterLendo__network__logo">
                <div className="k-u-blockAlign-center">
                  <Paragraph
                    modifier="tertiary"
                    margin={false}
                    className={classNames(
                      'k-u-align-center@l-down',
                      'k-u-align-right@l-up',
                      'karl-FooterLendo__network__followText'
                    )}
                  >
                    Suivez-nous
                  </Paragraph>
                </div>

                <div
                  className={classNames(
                    'k-u-align-center',
                    'k-u-margin-top-single@m-down'
                  )}
                >
                  <FacebookButtonIcon className="k-u-margin-right-single" />

                  <TwitterButtonIcon className="k-u-margin-right-single" />

                  <LinkedinButtonIcon />
                </div>
              </div>
            </GridCol>
          </Grid>
        </Marger>
      </Row>
    )
  }

  renderQuote() {
    return (
      <Row lightTopBorder>
        <Marger top="2" bottom="2">
          <Paragraph italic modifier="tertiary" className="k-u-align-center">
            Attention&nbsp;: Investir présente un risque d’illiquidité et de
            perte partielle ou totale en capital.<br />
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
      <Row lightTopBorder>
        <Marger top="5" bottom="5">
          <Grid>
            <GridCol col-l="2">
              <div
                className={classNames(
                  'k-u-align-center@l-down',
                  'k-u-margin-bottom-triple',
                  'karl-FooterLendo__logo__img',
                  'karl-FooterLendo__logo__imgLendo'
                )}
              >
                <img
                  src="/assets/brand/new-lendopolis.svg"
                  alt="Logo Lendopolis"
                  className="karl-FooterLendo__logo__img__imgTag"
                />
              </div>
            </GridCol>

            <GridCol col-l="10">
              <Grid>
                <GridCol
                  col-m="3"
                  col-l="3"
                  className="k-u-margin-bottom-triple@s-down"
                >
                  <LinkList margin={false} items={items} />
                </GridCol>

                <GridCol
                  col-m="3"
                  col-l="3"
                  className="k-u-margin-bottom-triple@s-down"
                >
                  <LinkList margin={false} items={items2} />
                </GridCol>

                <GridCol
                  col-m="3"
                  col-l="3"
                  className="k-u-margin-bottom-triple@s-down"
                >
                  <LinkList margin={false} items={items3} />
                </GridCol>

                <GridCol col-m="3" col-l="3">
                  <LinkList margin={false} items={items4} />
                </GridCol>
              </Grid>
            </GridCol>
          </Grid>
        </Marger>
      </Row>
    )
  }

  renderNotice() {
    return (
      <Row>
        <Grid>
          <GridCol
            col-xs="8"
            offset-xs="2"
            col-s="10"
            offset-s="1"
            col-m="4"
            offset-m="1"
            col-l="4"
            offset-l="0"
          >
            <div
              className={classNames(
                'k-u-align-left@l-up',
                'karl-FooterLendo__notice__logo'
              )}
            >
              <div
                className={classNames(
                  'k-u-align-center@l-down',
                  'k-u-margin-bottom-single',
                  'karl-FooterLendo__logo__img'
                )}
              >
                <img
                  src="/assets/partners/french-authorities.svg"
                  alt="Autorités Française"
                  className="karl-FooterLendo__logo__img__imgTag"
                />
              </div>

              <Paragraph
                modifier="quaternary"
                className={classNames(
                  'k-u-align-center@l-down',
                  'k-u-align-left@l-up'
                )}
                margin={false}
              >
                LENDOPOLIS est une plateforme de financement participatif
                régulée par les autorités françaises. Immatriculation&nbsp;:
                14007218
              </Paragraph>
            </div>
          </GridCol>

          <GridCol
            col-xs="8"
            offset-xs="2"
            col-s="10"
            offset-s="1"
            col-m="4"
            offset-m="2"
            col-l="4"
            offset-l="0"
            className="k-u-margin-top-triple@s-down"
          >
            <div className="karl-FooterLendo__notice__logo">
              <div
                className={classNames(
                  'k-u-align-center@l-down',
                  'k-u-margin-bottom-single',
                  'karl-FooterLendo__logo__img'
                )}
              >
                <img
                  src="/assets/partners/mangopay.svg"
                  alt="MANGOPAY"
                  className={classNames(
                    'karl-FooterLendo__logo__imgMangopay',
                    'karl-FooterLendo__logo__img__imgTag'
                  )}
                />
              </div>

              <Paragraph
                modifier="quaternary"
                className={classNames(
                  'k-u-align-center@l-down',
                  'k-u-align-left@l-up'
                )}
                margin={false}
              >
                KissKissBankBank &amp; Co est agent de l’institution financière{' '}
                <a
                  href="https://www.mangopay.com/fr/"
                  target="_blank"
                  className={classNames(
                    'k-u-color-font1',
                    'karl-FooterLendo__notice__link'
                  )}
                >
                  MANGOPAY SA.
                </a>{' '}
                Paiements sécurisés avec MANGOPAY SA.
              </Paragraph>
            </div>
          </GridCol>

          <GridCol
            col-l="4"
            className={classNames(
              'k-u-align-center@l-down',
              'k-u-align-right@l-up',
              'k-u-margin-top-triple',
              'karl-FooterLendo__notice__copyright'
            )}
          >
            <div>
              <Paragraph
                modifier="quaternary"
                className="k-u-weight-regular"
                margin={false}
              >
                © 2017 KissKissBankBank &amp; Co
              </Paragraph>
            </div>
          </GridCol>
        </Grid>
      </Row>
    )
  }

  render() {
    return (
      <div className="karl-FooterLendo">
        {this.renderNetwork()}
        {this.renderQuote()}
        {this.renderList()}
        {this.renderNotice()}
      </div>
    )
  }
}
