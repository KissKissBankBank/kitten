import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'
import { Row } from 'kitten/components/grid/row'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  InstagramButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { LinkList } from 'kitten/components/links/link-list'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { KissKissBankBankLogo } from 'kitten/karl/logos/kisskissbankbanklogo'

export class KarlFooterKisskiss extends Component {
  renderNetwork() {
    return (
      <Row style= {{
        background: 'linear-gradient(to right, #f6f6f6 0%, #f6f6f6 50%, #fff 50%, #fff 100%)'
      }}
      >
        <Grid>
          <GridCol col-l="9">
            <div
              style={{
                padding: '35px 0',
                backgroundColor: '#f6f6f6',
              }}
            >
              <Grid>
                <GridCol
                  col-l="3"
                  col-m="12"
                  style={{
                    alignSelf: 'center'
                  }}
                  className="k-u-align-center@m-up"
                >
                  <Text
                    size="tiny"
                    weight="regular"
                  >
                    Inscrivez-vous à notre Newsletter
                  </Text>
                </GridCol>

                <GridCol
                  col-l="5"
                  col-m="12"
                  style={{
                    alignSelf: 'center',
                  }}
                  className="k-u-margin-top-single@m-down"
                >
                  <Grid>
                    <GridCol
                      col-l="12"
                      col-m="5"
                    >
                      <TextInputWithButton
                        value="Envoyer"
                      />
                    </GridCol>
                  </Grid>
                </GridCol>
              </Grid>
            </div>
          </GridCol>

          <GridCol
            col-l="3"
            style={{
              alignSelf: 'center',
            }}
            className="k-u-margin-top-triple@s-down"
          >
            <div className={ classNames('karl-FooterKisskiss__network__logo',
                                        'k-u-align-center@m-up') }
            >
              <div
                style={{
                  alignSelf: 'center',
                  marginRight: '15px',
                }}
              >
                <Text
                  size="tiny"
                  weight="regular"
                  className={ classNames('k-u-align-center@m-up',
                                         'k-u-align-right@l-up') }
                >
                  Suivez-nous
                </Text>
              </div>

              <div
                style={{
                  textAlign: 'center'
                }}
                className="k-u-margin-top-single@m-down"
              >
                <FacebookButtonIcon
                  style={{
                    marginRight: '15px',
                  }}
                />

                <TwitterButtonIcon
                  style={{
                    marginRight: '15px',
                  }}
                />

                <InstagramButtonIcon />
              </div>
            </div>
          </GridCol>
        </Grid>
      </Row>
    )
  }

  renderLanguageSelect() {
    const options = [
      { value: 'fr', label: 'Français' },
      { value: 'en', label: 'English' },
      { value: 'nl', label: 'Nederlands' },
    ]

    return (
      <GridCol
        col-l="2" offset-l="2"
        col-m="4" offset-m="4"
        col-xs="8" offset-xs="2"
      >
        <SelectWithState
          name=""
          options= { options }
          value="FR"
          onInputChange
        />
      </GridCol>
    )
  }

  renderList() {
    const items = [
      { key: 'key1', item: 'L’équipe', href: '#' },
      { key: 'key2', item: 'Presse', href: '#' },
      { key: 'key3', item: 'Conditions générales', href: '#' },
      { key: 'key4', item: 'Nos valeurs', href: '#' },
    ]

    const items2 = [
      { key: 'key1', item: 'Crowd', href: '#' },
      { key: 'key2', item: 'Les Mentors', href: '#' },
      { key: 'key3', item: 'Pop My Project', href: '#' },
      { key: 'key4', item: 'Les StaKissTiques', href: '#' },
      { key: 'key5', item: 'KissKiss Cinéma', href: '#' },
    ]

    const items3 = [
      { key: 'key1', item: 'Réussir sa collecte', href: '#' },
      { key: 'key2', item: 'Questions fréquentes', href: '#' },
      { key: 'key3', item: 'Conditions générales', href: '#' },
      { key: 'key4', item: 'Nous contacter', href: '#' },
    ]

    return (
      <Row style={{ background: '#222' }}>
        <Grid className="karl-FooterKisskiss__paddingList">
          <GridCol col-l="2">
            <div className={ classNames('k-u-align-center@l-down',
                                        'k-u-margin-bottom-triple',
                                        'karl-FooterKisskiss__logo__img') }
            >
              <KissKissBankBankLogo
                color="#fff"
                className="karl-FooterKisskiss__logo__img__imgTag"
              />
            </div>
          </GridCol>

          <GridCol
            col-l="6"
            className="karl-FooterKisskiss__paddingLinkList"
          >
              <Grid>
                <GridCol
                  col-m="4"
                  className="k-u-margin-bottom-triple@s-down"
                >
                  <LinkList
                    margin={ false }
                    items={ items }
                    color= 'light'
                  />
                </GridCol>

                <GridCol
                  col-m="4"
                  className="k-u-margin-bottom-triple@s-down"
                >
                  <LinkList
                    margin={ false }
                    items={ items2 }
                    color= 'light'
                  />
                </GridCol>

                <GridCol
                  col-m="4"
                  className="k-u-margin-bottom-triple@s-down"
                >
                  <LinkList
                    margin={ false }
                    items={ items3 }
                    color= 'light'
                  />
                </GridCol>
              </Grid>
            </GridCol>

            { this.renderLanguageSelect() }

        </Grid>
      </Row>
    )
  }

  renderNotice() {
    return(
      <Row>
        <Grid style={{ paddingBottom: '80px' }}>
          <GridCol
            col-xs="8" offset-xs="2"
            col-s="10" offset-s="1"
            col-m="4" offset-m="1"
            col-l="4" offset-l="0"
          >
            <div className={ classNames('k-u-align-left@l-up',
                                        'karl-FooterKisskiss__notice__logo') }
              >
                <div className={ classNames('k-u-align-center@l-down',
                                            'k-u-margin-bottom-single',
                                            'karl-FooterKisskiss__logo__img') }
                >
                  <img
                    src="/assets/partners/french-authorities.svg"
                    alt="Autorités Française"
                    className="karl-FooterKisskiss__logo__img__imgTag"
                  />
                </div>

                <Paragraph
                  modifier="quaternary"
                  className={ classNames('k-u-align-center@l-down',
                                         'k-u-align-left@l-up',
                                         'k-u-color-background1') }
                  margin={ false }
                >
                  KissKissBankBank est une plateforme de financement participatif
                  régulée par les autorités françaises. Immatriculation&nbsp: 14007218
                </Paragraph>
              </div>
            </GridCol>

            <GridCol
              col-xs="8" offset-xs="2"
              col-s="10" offset-s="1"
              col-m="4" offset-m="2"
              col-l="4" offset-l="0"
              className="k-u-margin-top-triple@s-down"
            >
              <div className="karl-FooterKisskiss__notice__logo">
                <div className={ classNames('k-u-align-center@l-down',
                                            'k-u-margin-bottom-single',
                                            'karl-FooterKisskiss__logo__img') }
                >
                  <img
                    src="/assets/partners/mangopay.svg"
                    alt="MANGOPAY"
                    className={
                      classNames('karl-FooterKisskiss__logo__imgMangopay',
                                 'karl-FooterKisskiss__logo__img__imgTag')
                    }
                  />
                </div>

                <Paragraph
                  modifier="quaternary"
                  className={ classNames('k-u-align-center@l-down',
                                         'k-u-align-left@l-up',
                                         'k-u-color-background1') }
                  margin={ false }
                >
                  KissKissBankBank &amp; Co est agent de l’institution financière
                  {' '}
                  <a
                    href="https://www.mangopay.com/fr/"
                    target="_blank"
                    className={ classNames('k-u-color-background1',
                                           'karl-FooterKisskiss__notice__link') }
                  >
                    Mangopay SA.
                  </a>
                  {' '}
                  Paiements sécurisés avec Mangopay Payment Services
                </Paragraph>
              </div>
            </GridCol>

            <GridCol
              col-l="4"
              className={ classNames('k-u-align-center@l-down',
                                     'k-u-align-right@l-up',
                                     'k-u-margin-top-triple',
                                     'karl-FooterKisskiss__notice__copyright') }
            >
              <div>
                <Paragraph
                  modifier="quaternary"
                  className={ classNames('k-u-weight-regular',
                                         'k-u-color-background1') }
                  margin={ false }
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
      <div className="karl-FooterKisskiss">
        { this.renderNetwork() }
        <div style= {{ background: '#222' }}>
          { this.renderList() }
          { this.renderNotice() }
        </div>
      </div>
    )
  }
}
