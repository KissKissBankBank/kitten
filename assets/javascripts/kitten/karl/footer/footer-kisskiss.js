import React, { Component } from 'react'
import classNames from 'classnames'
import Radium, { StyleRoot } from 'radium'
import { Row as RowBase } from 'kitten/components/grid/row'
import { Container } from 'kitten/components/grid/container'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { ScreenConfig } from 'kitten/constants/screen-config'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'
import COLORS from 'kitten/constants/colors-config'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph  as ParagraphBase } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  InstagramButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { LinkList } from 'kitten/components/links/link-list'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { KissKissBankBankLogo } from 'kitten/karl/logos/kisskissbankbanklogo'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Row = Radium(RowBase)
const Paragraph = Radium(ParagraphBase)

export class KarlFooterKisskiss extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="karl-FooterKisskiss">
          { this.renderNetwork() }
          <div style= {{ background: '#222' }}>
            { this.renderList() }
            { this.renderNotice() }
          </div>
        </div>
      </StyleRoot>
    )
  }

  renderNetwork() {
    return(
      <Row style={ styles.network }>
        <Grid>
          <GridCol
            col-l="8"
            col-m="12"
            style={ styles.network.subscribe }
          >
            <Grid>
              <GridCol
                col-l="4"
                col-m="12"
                style={ styles.network.subscribe.newsletter.label }
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
                style={ styles.network.subscribe.newsletter.form }
              >
                <Grid>
                  <GridCol
                    col-l="12"
                    col-m="5"
                  >
                    <TextInputWithButton
                      value="Envoyer"
                      textInputProps={{
                        placeholder:"Entrez votre e-mail"
                      }}
                    />
                  </GridCol>
                </Grid>
              </GridCol>
            </Grid>
          </GridCol>

          <GridCol
            col-l="4"
            col-m="12"
            style={ styles.network.social }
          >
            <div style={ styles.network.social.text }>
              <Text
                size="tiny"
                weight="regular"
              >
                Suivez-nous
              </Text>
            </div>

            <div style={ styles.network.social.buttons }>
              <FacebookButtonIcon
                style={ styles.network.social.buttons.buttonIcon }
              />
              <TwitterButtonIcon
                style={ styles.network.social.buttons.buttonIcon }
              />
              <InstagramButtonIcon />
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
          placeholder="Français"
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
      <Row>
        <Grid style={ styles.list }>
          <GridCol col-l="2">
            <div style={ styles.list.logo }>
              <KissKissBankBankLogo
                color="#fff"
                style={ styles.list.logo.img } />
            </div>
          </GridCol>

          <GridCol
            col-l="6"
            style={ styles.list.linkList }
          >
              <Grid>
                <GridCol
                  col-m="4"
                  style={ styles.list.linkList.items }
                >
                  <LinkList
                    margin={ false }
                    items={ items }
                    color= 'light'
                  />
                </GridCol>

                <GridCol
                  col-m="4"
                  style={ styles.list.linkList.items }
                >
                  <LinkList
                    margin={ false }
                    items={ items2 }
                    color= 'light'
                  />
                </GridCol>

                <GridCol
                  col-m="4"
                  style={ styles.list.linkList.items }
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
        <Grid style={ styles.notice }>
          <GridCol
            col-xs="8" offset-xs="2"
            col-s="10" offset-s="1"
            col-m="4" offset-m="1"
            col-l="4" offset-l="0"
          >
            <div style={ styles.notice.block }>
              <div style={ styles.notice.block.logo }>
                <img
                  src="/assets/partners/french-authorities.svg"
                  alt="Autorités Française"
                  style={ styles.notice.block.logo.img }
                />
              </div>

              <Paragraph
                modifier="quaternary"
                style={ styles.notice.block.paragraph }
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
            <div style={ styles.notice.block }>
              <div style={ styles.notice.block.logo }>
                <img
                  src="/assets/partners/mangopay.svg"
                  alt="MANGOPAY"
                  style={ styles.notice.block.logo.img }
                />
              </div>

              <Paragraph
                modifier="quaternary"
                style={ styles.notice.block.paragraph }
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
            style={ }
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
}

const styles = {
  network: {
    background: 'linear-gradient(to right, '
    + `${COLORS.background3} 0%, `
    + `${COLORS.background3} 50%, `
    + `${COLORS.background1} 50%, `
    + `${COLORS.background1} 100%)`,

    subscribe: {
      padding: '35px 0',
      backgroundColor: `${COLORS.background3}`,

      newsletter: {
        label: {
          alignSelf: 'center',
          [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
            textAlign: 'center',
          },
        },
        form: {
          alignSelf: 'center',
          [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
            marginTop: '10px',
          },
        },
      },
    },

    social: {
      alignSelf: 'center',
      [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
        marginTop: '30px',
      },
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },

      text: {
        alignSelf: 'center',
        marginRight: '15px',
        [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
          textAlign: 'center',
        },
        [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
          textAlign: 'center',
        },
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          textAlign: 'right',
        },
      },

      buttons: {
        textAlign: 'center',
        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginTop: '10px',
        },
        buttonIcon: {
          marginRight: '15px',
        },
      },
    },
  },

  list: {
    padding: '50px 0',

    [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
      paddingTop: '100px',
      paddingBottom: '80px',
    },

    logo: {
      marginBottom: '30px',
      [`@media (max-width: ${ScreenConfig['L'].max}px)`]: {
        textAlign: 'center',
        lineHeight: '4rem',
        marginBottom: 0,
        marginRight: '16px',
      },

      img: {
        verticalAlign: 'middle',
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          display: 'block',
          verticalAlign: 'top',
        },
      },
    },

    linkList: {
      [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
        paddingBottom: '70px',
      },

      items: {
        [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
          marginBottom: '30px',
      },
      }
    },
  },

  notice: {
    paddingBottom: '80px',

    block: {
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        textAlign: 'left',
        display: 'flex',
      },

      logo: {
        marginBottom:'10px',
        [`@media (max-width: ${ScreenConfig['L'].max}px)`]: {
          textAlign: 'center',
          lineHeight: '4rem',
          marginBottom: 0,
          marginRight: '16px',
        },

        img: {
          verticalAlign: 'middle',
          [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
            display: 'block',
            verticalAlign: 'top',
          },
        },
      },
      paragraph: {
        color: `${COLORS.background1}`,
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          textAlign: 'center',
        },

        [`@media (max-width: ${ScreenConfig['L'].max}px)`]: {
          textAlign: 'left',
        },
      }
    },
  },
}
