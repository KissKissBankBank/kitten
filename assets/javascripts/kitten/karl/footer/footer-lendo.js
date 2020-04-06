import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Row as RowBase } from '../../components/grid/row'
import { Marger as MargerBase } from '../../components/layout/marger'
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
import { LendopolisLogo as LendopolisLogoBase } from '../../karl/logos/lendopolis-logo'
import { ScreenConfig } from '../../constants/screen-config'
import { mediaQueries } from '../../hoc/media-queries'
import COLORS from '../../constants/colors-config'
import { parseHtml } from '../../helpers/utils/parser'

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
    newsletterSubmitValue: "Je m'inscris",
    socialText: 'Suivez-nous',
    hrefFacebook: '#',
    hrefTwitter: '#',
    hrefInstagram: '#',

    // List
    listLabel1: 'Emprunter',
    listLabel2: 'Prêter',
    listLabel3: 'À Propos',
    items1: [
      {
        key: 'key1',
        item: 'Comment emprunter',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key2',
        item: 'FAQ',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key3',
        item: 'Déposer un projet',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key4',
        item: "S'inscrire",
        href: '#',
        weight: 'light',
      },
    ],
    items2: [
      {
        key: 'key1',
        item: 'Comment investir',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key2',
        item: 'FAQ',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key3',
        item: 'Prêter à un projet',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key4',
        item: "S'inscrire",
        href: '#',
        weight: 'light',
      },
      {
        key: 'key5',
        item: 'Simulateur',
        href: '#',
        weight: 'light',
      },
    ],
    items3: [
      {
        key: 'key1',
        item: 'Nos valeurs',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key2',
        item: 'Manifeste',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key3',
        item: 'Statistiques',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key4',
        item: 'Indicateurs de performance',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key5',
        item: "L'équipe",
        href: '#',
        weight: 'light',
      },
      {
        key: 'key6',
        item: 'Mentors',
        href: '#',
        weight: 'light',
      },
    ],
    items4: [
      {
        key: 'key1',
        item: 'Contact',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key2',
        item: "Apporteurs d'affaires",
        href: '#',
        weight: 'light',
      },
      {
        key: 'key3',
        item: 'Mentions légales',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key4',
        item: 'CGU',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key5',
        item: 'Confidentialité',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key6',
        item: 'Presse',
        href: '#',
        weight: 'light',
      },
      {
        key: 'key7',
        item: 'Le blog',
        href: '#',
        weight: 'light',
      },
    ],

    // Notice
    noticeAltAutorite: 'Autorités françaises',
    noticeParagraphAutorite:
      'Lendopolis est une plateforme de financement \
      participatif régulée par les autorités françaises.\
      Immatriculation : 14006007',
    noticeAltMangopay: 'Mangopay',
    noticeParagraphMangopayText1:
      "Lendopolis est agent de l'institution financière",
    noticeParagraphMangopayLink: 'MANGOPAY',
    noticeParagraphMangopayLinkAcronym: 'SA.',
    noticeParagraphMangopayText2:
      'Paiements sécurisés avec MANGOPAY Payment Services.',
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

  renderList() {
    const {
      items1,
      items2,
      items3,
      items4,
      listLabel1,
      listLabel2,
      listLabel3,
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

          <GridCol col-l="10" style={styles.list.linkList}>
            <Grid>
              <GridCol col-m="3" style={styles.list.linkList.items}>
                <Marger bottom="1.5" style={styles.list.linkList.items.label}>
                  <Text color="background1" weight="regular" size="tiny">
                    {parseHtml(listLabel1)}
                  </Text>
                </Marger>
                <Marger bottom={viewportIsMobile ? 3 : 0}>
                  <LinkList
                    margin={false}
                    items={items1}
                    color="light"
                    itemMargin="triple"
                    lineHeight="normal"
                  />
                </Marger>
              </GridCol>

              <GridCol col-m="3" style={styles.list.linkList.items}>
                <Marger bottom="1.5" style={styles.list.linkList.items.label}>
                  <Text color="background1" weight="regular" size="tiny">
                    {parseHtml(listLabel2)}
                  </Text>
                </Marger>
                <Marger bottom={viewportIsMobile ? 3 : 0}>
                  <LinkList
                    margin={false}
                    items={items2}
                    color="light"
                    itemMargin="triple"
                    lineHeight="normal"
                  />
                </Marger>
              </GridCol>

              <GridCol col-m="3" style={styles.list.linkList.items}>
                <Marger bottom="1.5" style={styles.list.linkList.items.label}>
                  <Text color="background1" weight="regular" size="tiny">
                    {parseHtml(listLabel3)}
                  </Text>
                </Marger>
                <Marger bottom={viewportIsMobile ? 3 : 0}>
                  <LinkList
                    margin={false}
                    items={items3}
                    color="light"
                    itemMargin="triple"
                    lineHeight="normal"
                  />
                </Marger>
              </GridCol>

              <GridCol col-m="3" style={styles.list.linkList.items}>
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
                    <abbr title={parseHtml(noticeParagraphMangopayLinkAcronym)}>
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

      items: {
        [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
          marginBottom: 30,
        },
        label: {
          [`@media (max-width: ${ScreenConfig['M'].max}px)`]: {
            textAlign: 'center',
          },
        },
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
