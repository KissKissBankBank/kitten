import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from '../../../../components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from '../../../../components/grid/grid'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { RewardCardContent as LegacyRewardCardContent } from './content'
import { RewardCardInfos } from './infos'
import { RewardCardImage } from './image'
import { RewardCardAction, RewardCardActionOnMOrMore } from './action'
import { Deprecated } from '../../../../helpers/utils/deprecated'
import { mediaQueries } from '../../../../hoc/media-queries'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)

class LegacyRewardCardContainerBase extends Component {
  static propTypes = {
    viewportIsMobile: PropTypes.bool,
    viewportIsSOrLess: PropTypes.bool,
    viewportIsTabletOrLess: PropTypes.bool,
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
    // We need to destructure the props to prevent them to hydrate children components.
    const {
      titleAmount,
      titleTag,
      subtitle,
      subtitleTag,
      description,
      infos,
      manageContributionDescription,
      manageContributionLinkLabel,
      manageContributionLinkHref,
      buttonLabel,
      buttonOnMouseEnter,
      buttonOnMouseLeave,
      buttonOnClick,
      isDisabled,
      starred,
      starLabel,
      version,
      viewportIsMobile,
      viewportIsSOrLess,
      viewportIsTabletOrLess,
      titleDescription,
      textDescription,
      textTag,
      myContribution,
      manageContribution,
      manageContributionLink,
      button,
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

    const withImageOnTinyVersion = shouldDisplayImage && this.isTinyVersion()

    if (!titleAmount) return null

    return (
      <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
        <StyleRoot {...others} style={cardStyles}>
          <Marger
            bottom={this.isSOrLessVersion() ? 0 : 4}
            top={this.isSOrLessVersion() ? 3 : 4}
          >
            <Grid style={cardPaddings}>
              <GridCol {...leftColumnProps}>
                {titleAmount && (
                  <LegacyRewardCardContent
                    {...this.props}
                    subtitle={subtitle || titleDescription}
                    subtitleTag={subtitleTag || textTag}
                    description={description || textDescription}
                    isTinyVersion={this.isTinyVersion()}
                  />
                )}

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
                    <RewardCardImage {...this.props} />
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
                topMargin={withImageOnTinyVersion ? 2 : 0}
              />
            )}
          </Marger>
        </StyleRoot>
      </Deprecated>
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

  iconBadge: {
    marginRight: 10,
  },

  image: {
    width: '100%',
    display: 'block',
  },
}

export const LegacyRewardCardContainer = mediaQueries(
  Radium(LegacyRewardCardContainerBase),
  {
    viewportIsTabletOrLess: true,
    viewportIsSOrLess: true,
    viewportIsMobile: true,
  },
)
