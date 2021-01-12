import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../../components/layout/marger'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { StyledLegacyRewardCard } from './styles'
import { RewardCardContent as LegacyRewardCardContent } from './content'
import { RewardCardInfos } from './infos'
import { RewardCardImage } from './image'
import { RewardCardAction, RewardCardActionOnMOrMore } from './action'
import { Deprecated } from '../../../../helpers/utils/deprecated'
import { mediaQueries } from '../../../../hoc/media-queries'
import classNames from 'classnames'

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
        <StyledLegacyRewardCard
          {...others}
          className={classNames('k-LegacyRewardCard', this.props.className, {
            'k-LegacyRewardCard--tinyVersion': this.isTinyVersion(),
            'k-LegacyRewardCard--sOrLessVersion': this.isSOrLessVersion(),
            'k-LegacyRewardCard--isDisabled': isDisabled,
          })}
        >
          <Marger
            bottom={this.isSOrLessVersion() ? 0 : 4}
            top={this.isSOrLessVersion() ? 3 : 4}
          >
            <Grid className="k-LegacyRewardCard__row">
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
                <GridCol
                  {...rightColumnProps}
                  className="LegacyRewardCard__col_image"
                >
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
        </StyledLegacyRewardCard>
      </Deprecated>
    )
  }
}

export const LegacyRewardCardContainer = mediaQueries(
  LegacyRewardCardContainerBase,
  {
    viewportIsTabletOrLess: true,
    viewportIsSOrLess: true,
    viewportIsMobile: true,
  },
)
