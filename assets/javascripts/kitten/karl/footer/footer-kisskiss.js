import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Row as RowBase } from 'kitten/components/grid/row'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import { ScreenConfig,
  SCREEN_SIZE_XS,
  SCREEN_SIZE_M,
} from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph  as ParagraphBase } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'
import {
  FacebookButtonIcon as FacebookButtonIconBase,
  TwitterButtonIcon as TwitterButtonIconBase,
  InstagramButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { LinkList } from 'kitten/components/links/link-list'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import {
  KissKissBankBankLogo as KissKissBankBankLogoBase
} from 'kitten/karl/logos/kisskissbankbanklogo'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Row = Radium(RowBase)
const Paragraph = Radium(ParagraphBase)
const FacebookButtonIcon = Radium(FacebookButtonIconBase)
const TwitterButtonIcon = Radium(TwitterButtonIconBase)
const KissKissBankBankLogo = Radium(KissKissBankBankLogoBase)

export class KarlFooterKisskiss extends Component {
  constructor(props, context) {
    super(props, context)

    this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
    this.mqTabletOrLess = createMatchMediaMax(SCREEN_SIZE_M)

    this.state = {
      viewportIsMobile: this.mqMobile
        ? this.mqMobile.matches
        : false,
      viewportIsTabletOrLess: this.mqTabletOrLess
        ? this.mqTabletOrLess.matches
        : false,
    }
  }

  onMobileMQ = (event) => {
    this.setState({ viewportIsMobile: event.matches })
  }

  onTabletMQ = (event) => {
    this.setState({ viewportIsTabletOrLess: event.matches })
  }

  componentDidMount() {
    if (this.mqMobile) this.mqMobile.addListener(this.onMobileMQ)
    if (this.mqTabletOrLess) this.mqTabletOrLess.addListener(this.onTabletMQ)
  }

  componentWillUnmount() {
    if (this.mqMobile) this.mqMobile.removeListener(this.onMobileMQ)
    if (this.mqTabletOrLess) this.mqTabletOrLess.removeListener(this.onTabletMQ)
  }

  render() {
    return (
      <StyleRoot>
        <div>
          { this.renderNetwork() }
          <div style={ styles.darkBackground }>
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
            col-m="12"
            col-l="8"
          >
            <Marger top="3" bottom="3">
              <Grid>
                <GridCol
                  col-m="12"
                  col-l="4"
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
                  col-m="12"
                  col-l="6"
                  style={ styles.network.subscribe.newsletter.form }
                >
                  <Grid>
                    <GridCol
                      col="10" offset="1"
                      col-m="6" offset-m="3"
                      col-l="12"
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
            </Marger>
          </GridCol>

          <GridCol
            col-m="12"
            col-l="4"
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
        col="8" offset="2"
        col-m="4" offset-m="4"
        col-l="3" offset-l="1"
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
            <Marger
              bottom={ this.state.viewportIsMobile ? 4 : 5 }
              style={ styles.list.logo }>
              <KissKissBankBankLogo
                color="#fff"
                style={ styles.list.logo.img }
              />
            </Marger>
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
                  color="light"
                />
              </GridCol>

              <GridCol
                col-m="4"
                style={ styles.list.linkList.items }
              >
                <LinkList
                  margin={ false }
                  items={ items2 }
                  color="light"
                />
              </GridCol>

              <GridCol
                col-m="4"
                style={ styles.list.linkList.items }
              >
                <LinkList
                  margin={ false }
                  items={ items3 }
                  color="light"
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
            col-m="5" offset-m="0"
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
                margin={ false }
                style={ styles.notice.block.paragraph }
              >
                KissKissBankBank est une plateforme de financement participatif
                régulée par les autorités françaises. Immatriculation &nbsp;: 14007218
              </Paragraph>
            </div>
          </GridCol>

          <GridCol
            col-xs="8" offset-xs="2"
            col-s="10" offset-s="1"
            col-m="5" offset-m="1"
            col-l="4" offset-l="0"
          >
            <div style={ styles.notice.block }>
              <div style={ styles.notice.block.logo }>
                <img
                  src="/assets/partners/mangopay.svg"
                  alt="MANGOPAY"
                  style={ styles.notice.block.logo.img.mangopay }
                />
              </div>

              <Paragraph
                modifier="quaternary"
                margin={ false }
                style={ styles.notice.block.paragraph }
              >
                KissKissBankBank &amp; Co est agent de l’institution financière
                {' '}
                <a
                  href="https://www.mangopay.com/fr/"
                  target="_blank"
                  style={ styles.notice.block.paragraph.link }
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
            style={ styles.notice.block.copyright }
          >
            <Marger top={ this.state.viewportIsTabletOrLess ? 5 : 0 }>
              <Text
                size="tiny"
                weight="regular"
                color="background1"
              >
                © 2018 KissKissBankBank &amp; Co
              </Text>
            </Marger>
          </GridCol>
        </Grid>
      </Row>
    )
  }
}

const styles = {
  darkBackground: {
    backgroundColor: `${COLORS.font1}`,
    // paddingTop: '30px',
    // paddingBottom: '30px',
  },

  network: {
    background: 'linear-gradient(to top, '
    + `${COLORS.background3} 0%, `
    + `${COLORS.background3} 50%, `
    + `${COLORS.background1} 50%, `
    + `${COLORS.background1} 100%)`,

    [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
      background: 'linear-gradient(to right, '
      + `${COLORS.background3} 0%, `
      + `${COLORS.background3} 70%, `
      + `${COLORS.background1} 70%, `
      + `${COLORS.background1} 100%)`,
    },

    subscribe: {
      newsletter: {
        label: {
          alignSelf: 'center',
          [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
            textAlign: 'center',
          },
        },

        form: {
          [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
            marginTop: '10px',
          },
        },
      },
    },

    social: {
      alignSelf: 'center',
      [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
        marginTop: '30px',
        marginBottom: '30px',
        order: '-1',
      },
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },

      text: {
        textAlign: 'center',
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          textAlign: 'right',
          marginRight: '15px',
          alignSelf: 'center',
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
    paddingTop: '50px',
    paddingBottom: '50px',
    [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
      paddingTop: '100px',
    },
    [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
      paddingTop: '100px',
      paddingBottom: 0,
    },

    logo: {
      textAlign: 'center',

      img: {
        verticalAlign: 'middle',
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          display: 'block',
          verticalAlign: 'top',
        },
      },
    },

    linkList: {
      paddingBottom: 0,
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        paddingBottom: '50px',
      },
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        paddingBottom: '80px',
      },

      items: {
        [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
          marginBottom: '30px',
        },
      },
    },
  },

  notice: {
    paddingBottom: '100px',

    block: {
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        textAlign: 'left',
        display: 'flex',
      },

      logo: {
        textAlign: 'center',
        marginBottom:'10px',
        lineHeight: 0,
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          marginRight: '14px',
        },

        img: {
          verticalAlign: 'middle',
          [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
            display: 'block',
            verticalAlign: 'top',
            marginBottom: '10px',
          },

          mangopay: {
            width: '100px',
            [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
              marginTop: '30px',
              width: '130px',
            },
          },
        },
      },

      paragraph: {
        color: `${COLORS.background1}`,
        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          textAlign: 'center',
        },

        link: {
          color: `${COLORS.background1}`,
          ':active': {
            color: `${COLORS.primary3}`,
          },
          ':hover': {
            color: `${COLORS.primary1}`,
          },
        },
      },
      copyright: {
        textAlign: 'center',
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          alignSelf: 'flex-end',
          textAlign: 'right',
        },
      },
    },
  },
}
