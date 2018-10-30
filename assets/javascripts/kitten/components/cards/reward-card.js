import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import COLORS from 'kitten/constants/colors-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import {
  LegacyRewardCardContainer,
  styles as legacyStyles,
} from 'kitten/components/cards/reward-card/legacy-reward-card-container'
import { Text as TextBase } from 'kitten/components/typography/text'
import { pxToRem } from 'kitten/helpers/utils/typography'
import { RewardCardTitle } from 'kitten/components/cards/reward-card/title'
import { RewardCardRow } from 'kitten/components/cards/reward-card/row'
import { RewardCardRowContent } from 'kitten/components/cards/reward-card/row-content'
import { RewardCardRowSide } from 'kitten/components/cards/reward-card/row-side'
import { RewardCardCheckedIconLine } from 'kitten/components/cards/reward-card/checked-icon-line'
import { RewardCardStarredBadge } from 'kitten/components/cards/reward-card/starred-badge'

const Text = Radium(TextBase)

// TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.
class RewardCardInfo extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    withMarginBottom: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.object,
  }

  static defaultProps = {
    label: null,
    value: null,
    withMarginBottom: true,
    disabled: false,
    style: {},
  }

  render() {
    const {
      label,
      value,
      withMarginBottom,
      disabled,
      style: customStyle,
    } = this.props

    if (!label) return null

    const infoStyles = [
      style.info,
      withMarginBottom && style.infoWithMargin,
      disabled && style.disabled,
      customStyle,
    ]

    return (
      <Text size="tiny" color="font1" weight="regular" style={infoStyles}>
        {`${label} `}
        <Text color="font1" weight="light">
          {value}
        </Text>
      </Text>
    )
  }
}

// TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.
class RewardCardImage extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    style: PropTypes.object,
  }

  static defaultProps = {
    disabled: false,
    style: {},
  }

  render() {
    const { alt, disabled, ...others } = this.props
    const imageStyles = [{ width: '100%' }, disabled && styles.disabled, style]

    return <img {...others} alt={alt || ''} style={imageStyles} />
  }
}

class RewardCardComponent extends Component {
  static propTypes = {
    titleAmount: deprecated(PropTypes.string, 'Use `RewardCard.Title` instead'),
    titleTag: deprecated(PropTypes.string, 'Use `RewardCard.Title` instead'),
    subtitle: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead',
    ),
    subtitleTag: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead',
    ),
    description: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and ``RewardCard.RowSide` to compose your card content instead',
    ),

    manageContributionDescription: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead',
    ),
    manageContributionLinkLabel: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead',
    ),
    manageContributionLinkHref: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead',
    ),

    buttonLabel: deprecated(
      PropTypes.string,
      'Use `RewardCard.Action` to insert your button and its callbacks instead',
    ),
    buttonOnMouseEnter: deprecated(
      PropTypes.func,
      'Use `RewardCard.Action` to insert your button and its callbacks instead',
    ),
    buttonOnMouseLeave: deprecated(
      PropTypes.func,
      'Use `RewardCard.Action` to insert your button and its callbacks instead',
    ),
    buttonOnClick: deprecated(
      PropTypes.func,
      'Use `RewardCard.Action` to insert your button and its callbacks instead',
    ),

    imageProps: deprecated(PropTypes.object, 'Use `RewardCard.Image` instead'),

    isDisabled: deprecated(
      PropTypes.bool,
      'You should handle the disabled state direcly on your component',
    ),
    starred: deprecated(
      PropTypes.bool,
      'Use `RewardCard` sub-component instead',
    ),
    starLabel: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead',
    ),

    version: deprecated(
      PropTypes.oneOf(['default', 'tiny']),
      '`RewardCard` is no longer handle with media-queries. The version of the component now is handled by the size of the parent container.',
    ),

    viewportIsMobile: deprecated(
      PropTypes.bool,
      '`RewardCard` is no longer handle with media-queries. The version of the component now is handled by the size of the parent container.',
    ),
    viewportIsSOrLess: deprecated(
      PropTypes.bool,
      '`RewardCard` is no longer handle with media-queries. The version of the component now is handled by the size of the parent container.',
    ),
    viewportIsTabletOrLess: deprecated(
      PropTypes.bool,
      '`RewardCard` is no longer handle with media-queries. The version of the component now is handled by the size of the parent container.',
    ),

    // Deprecated props
    titleDescription: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and ``RewardCard.RowSide` to compose your card content instead',
    ),
    textDescription: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and ``RewardCard.RowSide` to compose your card content instead',
    ),
    textTag: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and ``RewardCard.RowSide` to compose your card content instead',
    ),
    myContribution: deprecated(
      PropTypes.string,
      'Use `manageContributionDescription` prop instead',
    ),
    manageContribution: deprecated(
      PropTypes.string,
      'Use `manageContributionLinkLabel` prop instead',
    ),
    manageContributionLink: deprecated(
      PropTypes.string,
      'Use `manageContributionLinkHref` prop instead',
    ),
    button: deprecated(
      PropTypes.string,
      'Use `RewardCard.Action` to insert your button and its callbacks instead',
    ),
    titleContributors: deprecated(
      PropTypes.string,
      'Use `Reward.Info` to compose your card content now.',
    ),
    titleDelivery: deprecated(
      PropTypes.string,
      'Use `Reward.Info` to compose your card content now.',
    ),
    titleAvailability: deprecated(
      PropTypes.string,
      'Use `Reward.Info` to compose your card content now.',
    ),
    valueContributors: deprecated(
      PropTypes.string,
      'Use `Reward.Info` to compose your card content now.',
    ),
    valueDelivery: deprecated(
      PropTypes.string,
      'Use `Reward.Info` to compose your card content now.',
    ),
    valueAvailability: deprecated(
      PropTypes.string,
      'Use `Reward.Info` to compose your card content now.',
    ),
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <LegacyRewardCardContainer {...this.props} />
        {children && <div style={style.card}>{children}</div>}
      </Fragment>
    )
  }
}

const style = {
  card: {
    backgroundColor: COLORS.background1,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    width: '100%',
    padding: `${pxToRem(15)} 0`,
  },
  image: {
    width: '100%',
  },
  info: {
    display: 'block',
    lineHeight: pxToRem(20),
  },
  infoWithMargin: {
    marginBottom: pxToRem(10),
  },
  disabled: {
    filter: 'grayscale(1) opacity(.4)',
    cursor: 'not-allowed',
  },
}

// This export handles retro-compatibility.
// TODO: remove this export when deleting all deprecated components.
export const styles = legacyStyles

const RewardCardBase = mediaQueries(Radium(RewardCardComponent), {
  viewportIsTabletOrLess: true,
  viewportIsSOrLess: true,
  viewportIsMobile: true,
})

RewardCardBase.Row = RewardCardRow
RewardCardBase.RowContent = RewardCardRowContent
RewardCardBase.RowSide = RewardCardRowSide
RewardCardBase.Title = RewardCardTitle
RewardCardBase.Image = Radium(RewardCardImage)
RewardCardBase.Info = RewardCardInfo
RewardCardBase.CheckedIconLine = RewardCardCheckedIconLine
RewardCardBase.StarredBadge = RewardCardStarredBadge

export const RewardCard = RewardCardBase
