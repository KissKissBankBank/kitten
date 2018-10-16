import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import { Marger } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { StarIcon } from 'kitten/components/icons/star-icon'
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

    buttonLabel: PropTypes.string,
    buttonOnMouseEnter: PropTypes.func,
    buttonOnMouseLeave: PropTypes.func,
    buttonOnClick: PropTypes.func,

    isDisabled: PropTypes.bool,
    starred: PropTypes.bool,
    starLabel: PropTypes.string,

    version: PropTypes.oneOf(['default', 'tiny']),
    viewportIsMobile: PropTypes.bool,
    viewportIsSOrLess: PropTypes.bool,

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
    button: deprecated(PropTypes.string, 'Use `buttonLabel` prop instead'),
    titleContributors: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    titleDelivery: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    titleAvailability: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    valueContributors: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    valueDelivery: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    valueAvailability: deprecated(PropTypes.string, 'Use `infos` prop instead'),
  }

  isTinyVersion = () =>
    this.props.version === 'tiny' || this.props.viewportIsMobile

  isSOrLessVersion = () => this.isTinyVersion() || this.props.viewportIsSOrLess

  legacyInfos = () => {
    const {
      titleContributors,
      titleDelivery,
      titleAvailability,
      valueContributors,
      valueDelivery,
      valueAvailability,
    } = this.props

    const infos = []

    if (titleContributors) {
      infos.push({ label: titleContributors, value: valueContributors })
    }

    if (titleDelivery) {
      infos.push({ label: titleDelivery, value: valueDelivery })
    }

    if (titleAvailability) {
      infos.push({ label: titleAvailability, value: valueAvailability })
    }

    return infos
  }

  render() {
    // Part of destructuration is needed to handle retro-compatibility with
    // deprecated props.
    const {
      viewportIsTabletOrLess,
      titleDescription,
      textDescription,
      titleTag,
      textTag,
      description,
      subtitle,
      subtitleTag,
      button,
      buttonLabel,
      myContribution,
      manageContribution,
      manageContributionLink,
      manageContributionDescription,
      manageContributionLinkLabel,
      manageContributionLinkHref,
      titleContributors,
      titleDelivery,
      titleAvailability,
      valueContributors,
      valueDelivery,
      valueAvailability,
      imageProps,
      ...others
    } = this.props

    const shouldDisplayImage = imageProps && imageProps.src

    const cardStyles = [others.style, styles.card]

    const cardPaddings = this.isTinyVersion()
      ? styles.card.paddings.tinyVersion
      : styles.card.paddings

    const cardImageStyles = this.isTinyVersion()
      ? styles.card.image.tinyVersion
      : styles.card.image

    const leftColumnProps = this.isTinyVersion()
      ? null
      : {
          'col-l': shouldDisplayImage ? 7 : 10,
          'col-s': 7,
        }

    const rightColumnProps = this.isTinyVersion()
      ? null
      : {
          'col-s': 4,
          'offset-s': 1,
        }

    return (
      <StyleRoot {...others} style={cardStyles}>
        <Marger
          bottom={this.isSOrLessVersion() ? 0 : 4}
          top={this.isSOrLessVersion() ? 3 : 4}
        >
          <Grid style={cardPaddings}>
            <GridCol {...leftColumnProps}>
              <RewardCardContent
                {...this.props}
                subtitle={subtitle || titleDescription}
                subtitleTag={subtitleTag || textTag}
                description={description || textDescription}
                isTinyVersion={this.isTinyVersion()}
              />

              <RewardCardInfos
                infos={this.legacyInfos()}
                {...this.props}
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
                  buttonLabel={buttonLabel || button}
                  isTinyVersion={this.isTinyVersion()}
                  isSOrLessVersion={this.isSOrLessVersion()}
                />
              )}
            </GridCol>

            {shouldDisplayImage && (
              <GridCol {...rightColumnProps} style={cardImageStyles}>
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
              buttonLabel={buttonLabel || button}
              isTinyVersion={this.isTinyVersion()}
              isSOrLessVersion={this.isSOrLessVersion()}
              topMargin={shouldDisplayImage || this.isTinyVersion() ? 2 : 0}
            />
          )}
        </Marger>
      </StyleRoot>
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

    paddings: {
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

    paddings: {
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
