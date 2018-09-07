import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { StarIcon } from 'kitten/components/icons/star-icon'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { HorizontalStroke as HorizontalStrokeBase } from 'kitten/components/layout/horizontal-stroke'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Button = Radium(ButtonBase)
const Title = Radium(TitleBase)
const Text = Radium(TextBase)
const Paragraph = Radium(ParagraphBase)
const IconBadge = Radium(IconBadgeBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

class ContributionCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    titleDescription: PropTypes.string,
    textDescription: PropTypes.string.isRequired,
    textTag: PropTypes.string,

    button: PropTypes.string,
    buttonOnMouseEnter: PropTypes.func,
    buttonOnMouseLeave: PropTypes.func,
    buttonOnClick: PropTypes.func,

    myContribution: PropTypes.string,
    manageContribution: PropTypes.string,
    manageContributionLink: PropTypes.string,

    isDisabled: PropTypes.bool,
    starred: PropTypes.bool,
    starLabel: PropTypes.string,
    render: PropTypes.func,

    version: PropTypes.oneOf(['default', 'tiny']),
  }

  static defaultProps = {
    titleDescription: '',
    titleTag: 'h1',
    textTag: 'p',
    imageProps: {
      src: '',
      alt: '',
    },
    button: '',
    buttonOnMouseEnter: () => {},
    buttonOnMouseLeave: () => {},
    buttonOnClick: () => {},

    myContribution: '',
    manageContribution: '',
    manageContributionLink: '',

    isDisabled: false,
    starred: false,
    starLabel: '',
    render: () => {},

    version: 'default',
  }

  isTinyVersion = () =>
    this.props.version === 'tiny' || this.props.viewportIsMobile

  isSorLessVersion = () => this.isTinyVersion() || this.props.viewportIsSOrLess

  render() {
    // We need to destructure the props to prevent them to hydrate children components.
    const {
      isDisabled,
      viewportIsMobile,
      viewportIsSOrLess,
      viewportIsTabletOrLess,
      titleAmount,
      titleDescription,
      textDescription,
      titleContributors,
      titleDelivery,
      titleAvailability,
      valueContributors,
      valueDelivery,
      valueAvailability,
      button,
      buttonOnMouseEnter,
      buttonOnMouseLeave,
      buttonOnClick,
      myContribution,
      manageContribution,
      manageContributionLink,
      imageProps,
      titleTag,
      textTag,
      render,
      starred,
      starLabel,
      version,
      ...others
    } = this.props

    const styleCard = [others.style, styles.card]

    const cardAddPadding = this.isTinyVersion()
      ? styles.card.addPadding.tinyVersion
      : styles.card.addPadding

    const cardImage = this.isTinyVersion()
      ? styles.card.image.tinyVersion
      : styles.card.image

    const leftColumnProps = this.isTinyVersion()
      ? null
      : {
          'col-l': !imageProps.src ? 10 : 7,
          'col-s': 7,
        }

    const rightColumnProps = this.isTinyVersion()
      ? null
      : {
          'col-s': 4,
          'offset-s': 1,
        }

    return (
      <StyleRoot {...others} style={styleCard}>
        <Marger
          bottom={this.isSorLessVersion() ? 0 : 4}
          top={this.isSorLessVersion() ? 3 : 4}
        >
          <Grid style={cardAddPadding}>
            <GridCol {...leftColumnProps}>{this.renderDescription()}</GridCol>

            {imageProps.src && (
              <GridCol {...rightColumnProps} style={cardImage}>
                <Marger bottom={!myContribution ? 2 : null}>
                  {this.renderImage()}
                </Marger>
              </GridCol>
            )}
          </Grid>

          {this.isSorLessVersion() && this.renderChoiceButton()}
        </Marger>
      </StyleRoot>
    )
  }

  renderDescription() {
    const {
      titleAmount,
      titleDescription,
      textDescription,
      titleTag,
      textTag,
      starred,
      starLabel,
      isDisabled,
      viewportIsSOrLess,
    } = this.props

    const styleDescription = [isDisabled && styles.disabled]

    return (
      <Fragment>
        <div style={styleDescription} disabled={isDisabled}>
          {starred && (
            <Marger bottom="2">
              <Button
                icon
                readonly
                tag="span"
                size="tiny"
                modifier="lithium"
                style={{ borderRadius: 5 }}
              >
                <StarIcon className="k-Button__icon is-readonly" />
                {starLabel}
              </Button>
            </Marger>
          )}
          <Marger top={starred ? 2 : 0} bottom="2">
            <Title
              modifier={this.isTinyVersion() ? 'quaternary' : 'tertiary'}
              italic
              margin={false}
              tag={titleTag}
              style={styles.textColor}
            >
              {titleAmount}
            </Title>
          </Marger>
          <Marger top="2" bottom="3">
            <HorizontalStroke size="big" />
          </Marger>
          {titleDescription && (
            <Marger top="3" bottom="1">
              <Text
                color="font1"
                size={this.isTinyVersion() ? 'big' : 'huge'}
                tag={textTag}
                weight="bold"
                style={styles.textMargin}
              >
                {titleDescription}
              </Text>
            </Marger>
          )}
          <Marger top={!titleDescription ? 3 : 1}>
            <Paragraph
              style={styles.textColor}
              modifier={this.isTinyVersion() ? 'quaternary' : 'tertiary'}
              margin={false}
            >
              {textDescription}
            </Paragraph>
          </Marger>
        </div>

        {!!this.props.render && this.props.render()}
        {this.renderInfos()}
        {!this.isSorLessVersion() && this.renderChoiceButton()}
      </Fragment>
    )
  }

  renderInfos() {
    const {
      titleContributors,
      titleDelivery,
      titleAvailability,
      valueContributors,
      valueDelivery,
      valueAvailability,
      isDisabled,
    } = this.props

    const styleInfos = [isDisabled && styles.disabled]

    if (!valueContributors && !valueDelivery && !valueAvailability) return

    return (
      <div style={styleInfos} disabled={isDisabled}>
        <Marger top="2" bottom="3">
          {this.renderInfo(titleContributors, valueContributors)}
          {this.renderInfo(titleDelivery, valueDelivery)}
          {this.renderInfo(titleAvailability, valueAvailability)}
        </Marger>
      </div>
    )
  }

  renderInfo(title, value) {
    const { viewportIsTabletOrLess } = this.props

    if (!title) return

    const infosLists = this.isTinyVersion()
      ? styles.infos.lists.tinyVersion
      : styles.infos.lists

    return (
      <Fragment>
        {(viewportIsTabletOrLess || this.isTinyVersion()) && (
          <div>
            <Text color="font1" weight="regular" style={infosLists}>
              {title}{' '}
              <Text color="font1" weight="light">
                {value}
              </Text>
            </Text>
          </div>
        )}

        {!viewportIsTabletOrLess &&
          !this.isTinyVersion() && (
            <Text color="font1" weight="regular" style={infosLists}>
              {title}{' '}
              <Text color="font1" weight="light">
                {value}
              </Text>
            </Text>
          )}
      </Fragment>
    )
  }

  renderChoiceButton() {
    const { myContribution, button, viewportIsSOrLess } = this.props

    if (!button && !myContribution) return

    return (
      <Fragment>
        {this.isSorLessVersion() && (
          <Fragment>
            {myContribution && (
              <Marger
                top={!this.props.imageProps.src ? 0 : 2}
                bottom={!myContribution ? 0 : 2}
              >
                {this.renderMyContribution()}
              </Marger>
            )}
            {this.renderButton()}
          </Fragment>
        )}

        {!this.isSorLessVersion() && (
          <Marger top="3">
            {this.renderButton()}
            {myContribution && (
              <Marger top={!myContribution ? 0 : 2}>
                {this.renderMyContribution()}
              </Marger>
            )}
          </Marger>
        )}
      </Fragment>
    )
  }

  renderButton() {
    const {
      button,
      buttonOnMouseEnter,
      buttonOnMouseLeave,
      buttonOnClick,
      myContribution,
      isDisabled,
    } = this.props

    const buttonMargin = this.isTinyVersion() || !myContribution ? null : 2
    const buttonStyles = this.isTinyVersion()
      ? styles.button.tinyVersion
      : styles.button

    if (!button) return

    return (
      <Marger bottom={buttonMargin}>
        <Button
          size="big"
          modifier="helium"
          type="button"
          aria-label={button}
          style={buttonStyles}
          onMouseEnter={buttonOnMouseEnter}
          onMouseLeave={buttonOnMouseLeave}
          onClick={buttonOnClick}
          disabled={isDisabled}
        >
          {button}
        </Button>
      </Marger>
    )
  }

  renderIconBadge() {
    return (
      <IconBadge valid style={styles.iconBadge}>
        <CheckedIcon className="k-IconBadge__svg" />
      </IconBadge>
    )
  }

  renderMyContribution() {
    const {
      isDisabled,
      myContribution,
      manageContribution,
      manageContributionLink,
    } = this.props

    if (!myContribution || (this.isTinyVersion() && isDisabled)) return

    const choiceButtonAddPadding = this.isTinyVersion()
      ? styles.choiceButton.addPadding.tinyVersion
      : styles.choiceButton.addPadding

    return (
      <Fragment>
        {this.isSorLessVersion() && (
          <Grid style={choiceButtonAddPadding}>
            <GridCol>
              <div style={styles.myContribution}>
                {this.renderIconBadge()}
                <div style={styles.myContribution.text}>
                  <Text color="font1" size="tiny" weight="regular">
                    {myContribution}
                    <br />
                    <Text
                      tag="a"
                      href={manageContributionLink}
                      color="primary1"
                      weight="regular"
                      decoration="none"
                    >
                      {manageContribution}
                    </Text>
                  </Text>
                </div>
              </div>
            </GridCol>
          </Grid>
        )}

        {!this.isSorLessVersion() && (
          <div style={styles.myContribution}>
            {this.renderIconBadge()}
            <div style={styles.myContribution.text}>
              <Text color="font1" size="tiny" weight="regular">
                {myContribution}
                <br />
                <Text
                  tag="a"
                  href={manageContributionLink}
                  color="primary1"
                  weight="regular"
                  decoration="none"
                >
                  {manageContribution}
                </Text>
              </Text>
            </div>
          </div>
        )}
      </Fragment>
    )
  }

  renderImage() {
    const { isDisabled } = this.props

    const styleImage = [isDisabled && styles.disabled]

    if (!this.props.imageProps.src) return

    return (
      <div style={styleImage} disabled={isDisabled}>
        <img {...this.props.imageProps} style={styles.image} />
      </div>
    )
  }
}

const styles = {
  disabled: {
    filter: 'grayscale(1) opacity(.4)',
    cursor: 'not-allowed',
  },

  textColor: {
    color: COLORS.font1,
  },

  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,

    addPadding: {
      paddingLeft: 20,
      paddingRight: 20,

      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        paddingLeft: 30,
        paddingRight: 30,
      },
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        paddingLeft: 40,
        paddingRight: 0,
      },
      [`@media (min-width: ${ScreenConfig['L'].min}px)`]: {
        paddingLeft: 115,
        paddingRight: 0,
      },

      tinyVersion: {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },

    image: {
      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        paddingRight: 50,
      },

      tinyVersion: {
        paddingRight: 0,
      },
    },
  },

  textMargin: {
    margin: 0,
  },

  infos: {
    lists: {
      fontSize: 14,

      [`@media (min-width: ${ScreenConfig['M'].min}px)`]: {
        fontSize: 16,
        marginRight: 30,
      },

      tinyVersion: {
        fontSize: 14,
        marginRight: 0,
      },
    },
  },

  choiceButton: {
    paddingLeft: 20,
    paddingRight: 20,

    addPadding: {
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        paddingLeft: 30,
        paddingRight: 30,
      },

      tinyVersion: {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
  },

  myContribution: {
    display: 'flex',
    alignItems: 'center',

    text: {
      display: 'flex',
      lineHeight: 'normal',
    },
  },

  button: {
    [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
      width: '100%',
    },

    tinyVersion: {
      width: '100%',
    },
  },

  iconBadge: {
    marginRight: 10,
  },

  image: {
    width: '100%',
  },
}

export const ContributionCard = mediaQueries(
  Radium(ContributionCardComponent),
  {
    viewportIsTabletOrLess: true,
    viewportIsSOrLess: true,
    viewportIsMobile: true,
  },
)
