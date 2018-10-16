import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { StarIcon } from 'kitten/components/icons/star-icon'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { RewardCardContent } from 'kitten/components/cards/reward-card/content'
import { RewardCardInfos } from 'kitten/components/cards/reward-card/infos'
import {
  RewardCardAction,
  RewardCardActionOnMOrMore,
} from 'kitten/components/cards/reward-card/action'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Button = Radium(ButtonBase)
const Text = Radium(TextBase)
const Paragraph = Radium(ParagraphBase)
const IconBadge = Radium(IconBadgeBase)

class RewardCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    subtitle: PropTypes.string,
    subtitleTag: PropTypes.string,
    description: PropTypes.string,

    manageContributionDescription: PropTypes.string,
    manageContributionLinkLabel: PropTypes.string,
    manageContributionLinkHref: PropTypes.string,

    button: PropTypes.string,
    buttonOnMouseEnter: PropTypes.func,
    buttonOnMouseLeave: PropTypes.func,
    buttonOnClick: PropTypes.func,

    isDisabled: PropTypes.bool,
    starred: PropTypes.bool,
    starLabel: PropTypes.string,

    version: PropTypes.oneOf(['default', 'tiny']),

    // Deprecated props
    titleDescription: deprecated(
      PropTypes.string,
      'Use `subtitle` prop instead',
    ),
    textDescription: deprecated(
      PropTypes.string,
      'Use `description` prop instead',
    ),
    textTag: deprecated(PropTypes.string, 'Use `subtitleTag` prop instead'),
    myContribution: deprecated(
      PropTypes.string,
      'Use `manageContributionDescription` prop instead',
    ),
    manageContribution: deprecated(
      PropTypes.string,
      'Use `manageContributionLinkLabel` prop instead',
    ),
  }

  isTinyVersion = () =>
    this.props.version === 'tiny' || this.props.viewportIsMobile

  isSOrLessVersion = () => this.isTinyVersion() || this.props.viewportIsSOrLess

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
      description,
      subtitle,
      subtitleTag,
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
          bottom={this.isSOrLessVersion() ? 0 : 4}
          top={this.isSOrLessVersion() ? 3 : 4}
        >
          <Grid style={cardAddPadding}>
            <GridCol {...leftColumnProps}>
              <RewardCardContent
                {...this.props}
                isTinyVersion={this.isTinyVersion()}
              />

              <RewardCardInfos
                {...this.props}
                subtitle={subtitle || titleDescription}
                subtitleTag={subtitleTag || textTag}
                description={description || textDescription}
                isTinyVersion={this.isTinyVersion()}
                viewportIsTabletOrLess={viewportIsTabletOrLess}
              />

              {!this.isSOrLessVersion() && (
                <RewardCardActionOnMOrMore
                  {...this.props}
                  manageContributionDescription={
                    manageContributionDescription || myContribution
                  }
                  manageContributionLinkLabel={
                    manageContributionLinkLabel || manageContribution
                  }
                  manageContributionLinkHref={
                    manageContributionLinkHref || manageContributionLink
                  }
                  isTinyVersion={this.isTinyVersion()}
                />
              )}
            </GridCol>

            {imageProps.src && (
              <GridCol {...rightColumnProps} style={cardImage}>
                <Marger bottom={!myContribution ? 2 : null}>
                  {this.renderImage()}
                </Marger>
              </GridCol>
            )}
          </Grid>

          {this.isSOrLessVersion() && (
            <RewardCardAction
              {...this.props}
              manageContributionDescription={
                manageContributionDescription || myContribution
              }
              manageContributionLinkLabel={
                manageContributionLinkLabel || manageContribution
              }
              manageContributionLinkHref={
                manageContributionLinkHref || manageContributionLink
              }
              isTinyVersion={this.isTinyVersion()}
              withTopMargin={!imageProps.src || !this.isTinyVersion()}
            />
          )}
        </Marger>
      </StyleRoot>
    )
  }

  renderButton() {}

  renderIconBadge() {
    return (
      <IconBadge valid style={styles.iconBadge}>
        <CheckedIcon className="k-IconBadge__svg" />
      </IconBadge>
    )
  }

  renderMyContribution() {}

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

export const styles = {
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
        paddingRight: 10,
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
      width: 'calc(100% + 4px)',
      position: 'relative',
      left: -2,
      bottom: -2,
    },

    tinyVersion: {
      width: 'calc(100% + 4px)',
      position: 'relative',
      left: -2,
      bottom: -2,
    },
  },

  iconBadge: {
    marginRight: 10,
  },

  image: {
    width: '100%',
    display: 'block',
  },
}

export const RewardCard = mediaQueries(Radium(RewardCardComponent), {
  viewportIsTabletOrLess: true,
  viewportIsSOrLess: true,
  viewportIsMobile: true,
})
