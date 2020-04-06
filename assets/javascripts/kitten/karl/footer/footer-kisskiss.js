import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Row as RowBase } from '../../components/grid/row'
import { Marger } from '../../components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from '../../components/grid/grid'
import { TextInputWithButton as TextInputWithButtonBase } from '../../components/form/text-input-with-button'
import { Paragraph as ParagraphBase } from '../../components/typography/paragraph'
import { Text } from '../../components/typography/text'
import {
  FacebookButtonIcon as FacebookButtonIconBase,
  TwitterButtonIcon as TwitterButtonIconBase,
  InstagramButtonIcon,
} from '../../components/buttons/social-button-icon'
import { LinkList } from '../../components/links/link-list'
import { SelectWithState } from '../../components/form/select-with-state'
import { KissKissBankBankLogo as KissKissBankBankLogoBase } from '../../karl/logos/kisskissbankbanklogo'
import { createMatchMediaMax } from '../../helpers/utils/media-queries'
import { ScreenConfig, SCREEN_SIZE_M } from '../../constants/screen-config'
import COLORS from '../../constants/colors-config'
import { parseHtml } from '../../helpers/utils/parser'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Row = Radium(RowBase)
const Paragraph = Radium(ParagraphBase)
const FacebookButtonIcon = Radium(FacebookButtonIconBase)
const TwitterButtonIcon = Radium(TwitterButtonIconBase)
const KissKissBankBankLogo = Radium(KissKissBankBankLogoBase)
const TextInputWithButton = Radium(TextInputWithButtonBase)

export class KarlFooterKisskiss extends Component {
  constructor(props, context) {
    super(props, context)

    this.mqTabletOrLess = createMatchMediaMax(SCREEN_SIZE_M)

    this.state = {
      viewportIsTabletOrLess: false,
    }
  }

  onTabletMQ = event => {
    this.setState({ viewportIsTabletOrLess: event.matches })
  }

  componentDidMount() {
    if (this.mqTabletOrLess) {
      this.mqTabletOrLess.addListener(this.onTabletMQ)
      this.onTabletMQ(this.mqTabletOrLess)
    }
  }

  componentWillUnmount() {
    if (this.mqTabletOrLess) this.mqTabletOrLess.removeListener(this.onTabletMQ)
  }

  render() {
    return (
      <StyleRoot>
        {this.renderNetwork()}
        <div style={styles.darkBackground}>
          {this.renderList()}
          {this.renderNotice()}
        </div>
      </StyleRoot>
    )
  }

  renderNetwork() {
    const {
      subscribeLabel,
      socialText,
      newsletterSubmitValue,
      textInputProps,
      hrefFacebook,
      hrefTwitter,
      hrefInstagram,
    } = this.props

    return (
      <Row style={styles.network}>
        <Grid>
          <GridCol col-m="12" col-l="8">
            <Marger top="3" bottom="3">
              <Grid>
                <GridCol
                  col-l="12"
                  offset-l="0"
                  col-m="6"
                  offset-m="3"
                  col-s="10"
                  offset-s="1"
                  style={styles.network.subscribe}
                >
                  <div style={styles.network.subscribe.label}>
                    <Text
                      size="tiny"
                      weight="regular"
                      htmlFor="subscribe"
                      tag="label"
                    >
                      {parseHtml(subscribeLabel)}
                    </Text>
                  </div>

                  <div style={styles.network.subscribe.form}>
                    <TextInputWithButton
                      textInputProps={{ ...textInputProps, id: 'subscribe' }}
                      value={newsletterSubmitValue}
                      style={styles.network.subscribe.form.textInput}
                    />
                  </div>
                </GridCol>
              </Grid>
            </Marger>
          </GridCol>

          <GridCol col-m="12" col-l="4" style={styles.network.social}>
            <div style={styles.network.social.text}>
              <Text size="tiny" weight="regular">
                {parseHtml(socialText)}
              </Text>
            </div>

            <div style={styles.network.social.buttons}>
              <FacebookButtonIcon
                tag="a"
                style={styles.network.social.buttons.buttonIcon}
                href={hrefFacebook}
              />
              <TwitterButtonIcon
                tag="a"
                style={styles.network.social.buttons.buttonIcon}
                href={hrefTwitter}
              />
              <InstagramButtonIcon tag="a" href={hrefInstagram} />
            </div>
          </GridCol>
        </Grid>
      </Row>
    )
  }

  renderLanguageSelect() {
    const { options, initialLanguage } = this.props

    return (
      <GridCol col="8" col-m="4" col-l="2" offset="2" offset-m="4" offset-l="2">
        <SelectWithState
          name="language"
          options={options}
          value={initialLanguage}
        />
      </GridCol>
    )
  }

  renderList() {
    const { items1, items2, items3 } = this.props

    return (
      <Row role="navigation">
        <Grid style={styles.list}>
          <GridCol col-l="2">
            <Marger bottom="4" style={styles.list.logo}>
              <KissKissBankBankLogo color="#fff" style={styles.list.logo.img} />
            </Marger>
          </GridCol>

          <GridCol col-l="6" style={styles.list.linkList}>
            <Grid>
              <GridCol col-m="4" style={styles.list.linkList.items}>
                <LinkList
                  margin={false}
                  items={items1}
                  color="light"
                  itemMargin="double"
                  lineHeight="normal"
                />
              </GridCol>

              <GridCol col-m="4" style={styles.list.linkList.items}>
                <LinkList
                  margin={false}
                  items={items2}
                  color="light"
                  itemMargin="double"
                  lineHeight="normal"
                />
              </GridCol>

              <GridCol col-m="4" style={styles.list.linkList.items}>
                <LinkList
                  margin={false}
                  items={items3}
                  color="light"
                  itemMargin="double"
                  lineHeight="normal"
                />
              </GridCol>
            </Grid>
          </GridCol>

          {this.renderLanguageSelect()}
        </Grid>
      </Row>
    )
  }

  renderNotice() {
    const {
      noticeAltAutorite,
      noticeParagraphAutorite,
      noticeAltMangopay,
      noticeParagraphMangopayText1,
      noticeParagraphMangopayLink,
      noticeParagraphMangopayLinkAcronym,
      noticeParagraphMangopayText2,
      noticeCopyright,
    } = this.props

    return (
      <Row role="contentinfo">
        <Grid style={styles.notice}>
          <GridCol
            col-xs="8"
            col-s="10"
            col-m="5"
            col-l="4"
            offset-xs="2"
            offset-s="1"
            offset-m="0"
            offset-l="0"
          >
            <div style={styles.notice.block}>
              <div style={styles.notice.block.logo}>
                <img
                  src="/assets/partners/french-authorities.svg"
                  alt={noticeAltAutorite}
                  style={styles.notice.block.logo.img}
                />
              </div>

              <Paragraph
                modifier="quaternary"
                margin={false}
                style={styles.notice.block.paragraph}
              >
                {parseHtml(noticeParagraphAutorite)}
              </Paragraph>
            </div>
          </GridCol>

          <GridCol
            col-xs="8"
            col-s="10"
            col-m="5"
            col-l="4"
            offset-xs="2"
            offset-s="1"
            offset-m="1"
            offset-l="0"
          >
            <div style={styles.notice.block}>
              <div style={styles.notice.block.logo}>
                <img
                  src="/assets/partners/mangopay.svg"
                  alt={noticeAltMangopay}
                  style={styles.notice.block.logo.img.mangopay}
                />
              </div>

              <Paragraph
                modifier="quaternary"
                margin={false}
                style={styles.notice.block.paragraph}
              >
                {parseHtml(noticeParagraphMangopayText1)}{' '}
                <a
                  href="https://www.mangopay.com/fr/"
                  target="_blank"
                  style={styles.notice.block.paragraph.link}
                >
                  {parseHtml(noticeParagraphMangopayLink)}
                  <abbr> {parseHtml(noticeParagraphMangopayLinkAcronym)}</abbr>
                </a>{' '}
                {parseHtml(noticeParagraphMangopayText2)}
              </Paragraph>
            </div>
          </GridCol>

          <GridCol col-l="4" style={styles.notice.block.copyright}>
            <Marger top={this.state.viewportIsTabletOrLess ? 5 : 0}>
              <Text size="tiny" weight="regular" color="background1">
                {parseHtml(noticeCopyright)}
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
  },

  network: {
    background:
      'linear-gradient(to top, ' +
      `${COLORS.background3} 0%, ` +
      `${COLORS.background3} 50%, ` +
      `${COLORS.background1} 50%, ` +
      `${COLORS.background1} 100%)`,

    [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
      background:
        'linear-gradient(to right, ' +
        `${COLORS.background3} 0%, ` +
        `${COLORS.background3} 70%, ` +
        `${COLORS.background1} 70%, ` +
        `${COLORS.background1} 100%)`,
    },

    subscribe: {
      alignSelf: 'center',
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },

      label: {
        textAlign: 'center',
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          alignSelf: 'center',
          pointerEvents: 'auto',
          marginRight: '15px',
        },
      },

      form: {
        textAlign: 'center',
        flex: '1',
        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          marginTop: '10px',
        },

        textInput: {
          [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
            maxWidth: '450px',
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
    paddingTop: '80px',
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
        marginBottom: '10px',
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
            width: '130px',
            marginTop: '30px',
            [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
              width: '100px',
              marginTop: 0,
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
          textDecoration: 'underline',
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

KarlFooterKisskiss.defaultProps = {
  // Network
  subscribeLabel: 'Inscrivez-vous à notre Newsletter',
  textInputProps: {
    placeholder: 'Entrez votre e-mail',
  },
  newsletterSubmitValue: 'Envoyer',
  socialText: 'Suivez-nous',
  hrefFacebook: '#',
  hrefTwitter: '#',
  hrefInstagram: '#',

  // List
  items1: [
    {
      key: 'key1',
      item: 'Réussir ma collecte',
      href: '#',
    },
    {
      key: 'key2',
      item: 'Crowdfunding : Questions fréquentes',
      href: '#',
    },
    {
      key: 'key3',
      item: 'Financer mon projet food ou agricole',
      href: '#',
    },
  ],
  items2: [
    {
      key: 'key1',
      item: 'Les Mentors',
      href: '#',
    },
    {
      key: 'key2',
      item: 'Blog',
      href: '#',
    },
    {
      key: 'key3',
      item: 'Maison de Crowdfunding',
      href: '#',
    },
    {
      key: 'key4',
      item: 'Les StaKissTiques',
      href: '#',
    },
  ],
  items3: [
    {
      key: 'key1',
      item: "L'équipe",
      href: '#',
    },
    {
      key: 'key2',
      item: 'Jobs',
      href: '#',
    },
    {
      key: 'key3',
      item: 'Presse',
      href: '#',
    },
    {
      key: 'key4',
      item: 'Conditions générales',
      href: '#',
    },
    {
      key: 'key5',
      item: 'Nos valeurs',
      href: '#',
    },
    {
      key: 'key6',
      item: 'Nous contacter',
      href: '#',
    },
  ],

  // LanguageSelect
  options: [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
    { value: 'nl', label: 'Nederlands' },
  ],
  initialLanguage: 'fr',

  // Notice
  noticeAltAutorite: 'Autorités françaises',
  noticeParagraphAutorite:
    'KissKissBankBank est une plateforme de financement \
    participatif régulée par les autorités françaises.\
    Immatriculation&nbsp; : 14007218',
  noticeAltMangopay: 'Mangopay',
  noticeParagraphMangopayText1:
    'KissKissBankBank &amp; Co est agent de \
  l’institution financière',
  noticeParagraphMangopayLink: 'Mangopay',
  noticeParagraphMangopayLinkAcronym: 'SA.',
  noticeParagraphMangopayText2:
    'Paiements sécurisés avec Mangopay Payment Services',
  noticeCopyright: '&copy; 2018 KissKissBankBank &amp; Co',
}
