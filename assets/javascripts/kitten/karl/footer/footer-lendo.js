import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Row as RowBase } from 'kitten/components/grid/row'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { TextInputWithButton as TextInputWithButtonBase } from 'kitten/components/form/text-input-with-button'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import { Text } from 'kitten/components/typography/text'
import {
  FacebookButtonIcon as FacebookButtonIconBase,
  TwitterButtonIcon as TwitterButtonIconBase,
  InstagramButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { LinkList } from 'kitten/components/links/link-list'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { LendopolisLogo as LendopolisLogoBase } from 'kitten/karl/logos/Lendopolis-logo'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import COLORS from 'kitten/constants/colors-config'
import { parseHtml } from 'kitten/helpers/utils/parser'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Row = Radium(RowBase)
const Marger = Radium(MargerBase)
const Paragraph = Radium(ParagraphBase)
const FacebookButtonIcon = Radium(FacebookButtonIconBase)
const TwitterButtonIcon = Radium(TwitterButtonIconBase)
const LendopolisLogo = Radium(LendopolisLogoBase)
const TextInputWithButton = Radium(TextInputWithButtonBase)

class KarlFooterLendoBase extends Component {
  static defaultProps = {
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
        item: 'Emprunter',
        href: '#',
      },
      {
        key: 'key2',
        item: 'Comment emprunter',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key3',
        item: 'FAQ Emprunteur',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key4',
        item: 'Déposer un projet',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key5',
        item: "S'inscrire",
        href: '#',
        weightItem: 'light',
      },
    ],
    items2: [
      {
        key: 'key1',
        item: 'Prêter',
        href: '#',
      },
      {
        key: 'key2',
        item: 'Comment investir',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key3',
        item: 'FAQ Prêteur',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key4',
        item: 'Prêter à un projet',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key5',
        item: "S'inscrire",
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key6',
        item: 'Simulateur',
        href: '#',
        weightItem: 'light',
      },
    ],
    items3: [
      {
        key: 'key1',
        item: 'A Propos',
        href: '#',
      },
      {
        key: 'key2',
        item: 'Nos valeurs',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key3',
        item: 'Manifeste',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key4',
        item: 'Statistiques',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key5',
        item: 'Indicateurs de performance',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key6',
        item: "L'équipe",
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key7',
        item: 'Mentors',
        href: '#',
        weightItem: 'light',
      },
    ],
    items4: [
      {
        key: 'key1',
        item: 'Contact',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key2',
        item: "Apporteurs d'affaires",
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key3',
        item: 'Mentions légales',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key4',
        item: 'CGU',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key5',
        item: 'Confidentialité',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key6',
        item: 'Presse',
        href: '#',
        weightItem: 'light',
      },
      {
        key: 'key7',
        item: 'Le blog',
        href: '#',
        weightItem: 'light',
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
      viewportIsTabletOrLess,
      ...others
    } = this.props

    return (
      <Row style={styles.network}>
        <Grid>
          <GridCol col-m="12" col-l="8">
            <Marger top="3" bottom="3">
              <Grid>
                <GridCol
                  col-s="10"
                  col-m="6"
                  col-l="12"
                  offset-s="1"
                  offset-m="3"
                  offset-l="0"
                  style={styles.network.subscribe}
                >
                  <Marger
                    bottom={viewportIsTabletOrLess ? 1 : 0}
                    style={styles.network.subscribe.label}
                  >
                    <Text
                      size="tiny"
                      weight="regular"
                      htmlFor="subscribe"
                      tag="label"
                    >
                      {parseHtml(subscribeLabel)}
                    </Text>
                  </Marger>

                  <Marger
                    top={viewportIsTabletOrLess ? 1 : 0}
                    style={styles.network.subscribe.form}
                  >
                    <TextInputWithButton
                      textInputProps={{ ...textInputProps, id: 'subscribe' }}
                      value={newsletterSubmitValue}
                      style={styles.network.subscribe.form.textInput}
                    />
                  </Marger>
                </GridCol>
              </Grid>
            </Marger>
          </GridCol>

          <GridCol col-m="12" col-l="4" style={styles.network.social}>
            <Marger top="3" bottom="3" style={styles.network.social.list}>
              <Marger
                bottom={viewportIsTabletOrLess ? 1 : 0}
                style={styles.network.social.text}
              >
                <Text size="tiny" weight="regular">
                  {parseHtml(socialText)}
                </Text>
              </Marger>

              <Marger
                top={viewportIsTabletOrLess ? 1 : 0}
                style={styles.network.social.buttons}
              >
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
              </Marger>
            </Marger>
          </GridCol>
        </Grid>
      </Row>
    )
  }

  renderLanguageSelect() {
    const { options, initialLanguage } = this.props

    return (
      <GridCol col="8" col-m="4" col-l="2" offset="2" offset-m="4" offset-l="1">
        <SelectWithState
          name="language"
          options={options}
          value={initialLanguage}
        />
      </GridCol>
    )
  }

  renderList() {
    const {
      items1,
      items2,
      items3,
      items4,
      viewportIsTabletOrLess,
      viewportIsMobile,
    } = this.props

    return (
      <Row role="navigation">
        <Grid style={styles.list}>
          <GridCol col-l="2">
            <Marger
              bottom={viewportIsTabletOrLess ? 5 : 0}
              style={styles.list.logo}
            >
              <LendopolisLogo
                primaryColor="#fff"
                secondaryColor="#caf4fe"
                style={styles.list.logo.img}
              />
            </Marger>
          </GridCol>

          <GridCol col-l="7" style={styles.list.linkList}>
            <Grid>
              <GridCol col-m="3">
                <Marger bottom={viewportIsMobile ? 3 : 0}>
                  <LinkList
                    margin={false}
                    items={items1}
                    color="light"
                    itemMargin="double"
                    lineHeight="normal"
                  />
                </Marger>
              </GridCol>

              <GridCol col-m="3">
                <Marger bottom={viewportIsMobile ? 3 : 0}>
                  <LinkList
                    margin={false}
                    items={items2}
                    color="light"
                    itemMargin="double"
                    lineHeight="normal"
                  />
                </Marger>
              </GridCol>

              <GridCol col-m="3">
                <Marger bottom={viewportIsMobile ? 3 : 0}>
                  <LinkList
                    margin={false}
                    items={items3}
                    color="light"
                    itemMargin="double"
                    lineHeight="normal"
                  />
                </Marger>
              </GridCol>

              <GridCol col-m="3">
                <Marger bottom={viewportIsMobile ? 3 : 0}>
                  <LinkList
                    margin={false}
                    items={items4}
                    color="light"
                    itemMargin="double"
                    lineHeight="normal"
                  />
                </Marger>
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
      viewportIsTabletOrLess,
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
              <Marger
                bottom={viewportIsTabletOrLess ? 1 : 0}
                style={styles.notice.block.logo}
              >
                <img
                  src="/assets/partners/french-authorities.svg"
                  alt={noticeAltAutorite}
                  style={styles.notice.block.logo.img}
                />
              </Marger>

              <Marger top={viewportIsTabletOrLess ? 1 : 0}>
                <Paragraph
                  modifier="quaternary"
                  margin={false}
                  style={styles.notice.block.paragraph}
                >
                  {parseHtml(noticeParagraphAutorite)}
                </Paragraph>
              </Marger>
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
              <Marger
                bottom={viewportIsTabletOrLess ? 1 : 0}
                style={styles.notice.block.logo}
              >
                <img
                  src="/assets/partners/mangopay.svg"
                  alt={noticeAltMangopay}
                  style={styles.notice.block.logo.img.mangopay}
                />
              </Marger>

              <Marger top={viewportIsTabletOrLess ? 1 : 0}>
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
                    <abbr>
                      {' '}
                      {parseHtml(noticeParagraphMangopayLinkAcronym)}
                    </abbr>
                  </a>{' '}
                  {parseHtml(noticeParagraphMangopayText2)}
                </Paragraph>
              </Marger>
            </div>
          </GridCol>

          <GridCol col-l="4" style={styles.notice.block.copyright}>
            <Marger top={viewportIsTabletOrLess ? 5 : 0}>
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
    backgroundColor: COLORS.font1,
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
          marginRight: 15,
        },
      },

      form: {
        textAlign: 'center',
        flex: '1',

        textInput: {
          [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
            maxWidth: 450,
          },
        },
      },
    },

    social: {
      [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
        order: '-1',
      },

      list: {
        alignSelf: 'center',
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          display: 'flex',
          justifyContent: 'flex-end',
        },
      },

      text: {
        textAlign: 'center',
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          textAlign: 'right',
          marginRight: 15,
          alignSelf: 'center',
        },
      },

      buttons: {
        textAlign: 'center',

        buttonIcon: {
          marginRight: 15,
        },
      },
    },
  },

  list: {
    paddingTop: 40,
    paddingBottom: 50,
    [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
      paddingTop: 100,
    },
    [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
      paddingTop: 100,
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
        paddingBottom: 50,
      },
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        paddingBottom: 80,
      },
    },
  },

  notice: {
    paddingBottom: 100,

    block: {
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        textAlign: 'left',
        display: 'flex',
      },

      logo: {
        textAlign: 'center',
        lineHeight: 0,
        [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
          marginRight: 14,
        },

        img: {
          verticalAlign: 'middle',
          [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
            display: 'block',
            verticalAlign: 'top',
          },

          mangopay: {
            width: 130,
            marginTop: 30,
            [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
              width: 100,
              marginTop: 0,
            },
          },
        },
      },

      paragraph: {
        color: COLORS.background1,
        [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
          textAlign: 'center',
        },

        link: {
          color: COLORS.background1,
          textDecoration: 'underline',
          ':active': {
            color: COLORS.primary3,
          },
          ':hover': {
            color: COLORS.primary1,
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

export const KarlFooterLendo = mediaQueries(Radium(KarlFooterLendoBase), {
  viewportIsTabletOrLess: true,
  viewportIsMobile: true,
})
