import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import COLORS from '../../constants/colors-config'
import {
  LegacyRewardCardContainer,
  styles as legacyStyles,
} from '../../components/cards/reward-card/legacy-reward-card-container'
import { Text } from '../../components/typography/text'
import { pxToRem } from '../../helpers/utils/typography'
import { RewardCardTitle } from '../../components/cards/reward-card/title'
import { RewardCardRow } from '../../components/cards/reward-card/row'
import { RewardCardRowContent } from '../../components/cards/reward-card/row-content'
import { RewardCardRowSide } from '../../components/cards/reward-card/row-side'
import { RewardCardStarredBadge } from '../../components/cards/reward-card/starred-badge'
import { RewardCardDiamondBadge } from '../../components/cards/reward-card/diamond-badge'
import { RewardCardCheckedSection } from '../../components/cards/reward-card/checked-section'

const Infos = styled(({ withMarginBottom, ...props }) => <Text {...props} />)`
  display: block;
  line-height: ${pxToRem(20)};
  ${({ withMarginBottom }) =>
    withMarginBottom &&
    css`
      margin-bottom: ${pxToRem(10)};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${COLORS.font2};
      cursor: not-allowed;
    `}
`

const RewardImage = styled.img`
  width: 100%;
  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(1) opacity(0.4);
      cursor: not-allowed;
    `}
`

const CardContainer = styled(({ withoutBorder, ...props }) => (
  <div {...props} />
))`
  background-color: ${COLORS.background1};
  width: 100%;
  padding: ${pxToRem(15)} 0;
  box-sizing: border-box;
  ${({ withoutBorder }) =>
    !withoutBorder &&
    css`
      border: ${pxToRem(2)} solid ${COLORS.line1};
    `}
`

// TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.
class RewardCardInfo extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    withMarginBottom: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    value: null,
    withMarginBottom: true,
    disabled: false,
  }

  render() {
    const { label, value, withMarginBottom, disabled } = this.props

    return (
      <Infos
        size="tiny"
        color="font1"
        weight="regular"
        withMarginBottom={withMarginBottom}
        disabled={disabled}
      >
        {`${label} `}
        <Text weight="light">{value}</Text>
      </Infos>
    )
  }
}

// TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.
class RewardCardImage extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    disabled: false,
  }

  render() {
    const { alt, disabled, ...others } = this.props
    return <RewardImage {...others} alt={alt || ''} disabled={disabled} />
  }
}

export class RewardCard extends Component {
  static Row = RewardCardRow
  static RowContent = RewardCardRowContent
  static RowSide = RewardCardRowSide
  static Title = RewardCardTitle
  static Image = RewardCardImage
  static Info = RewardCardInfo
  static CheckedSection = RewardCardCheckedSection
  static StarredBadge = RewardCardStarredBadge
  static DiamondBadge = RewardCardDiamondBadge

  static propTypes = {
    titleAmount: deprecated(
      PropTypes.string,
      'Use `RewardCard.Title` instead.',
    ),
    titleTag: deprecated(PropTypes.string, 'Use `RewardCard.Title` instead.'),
    subtitle: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
    ),
    subtitleTag: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
    ),
    description: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
    ),
    manageContributionDescription: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead.',
    ),
    manageContributionLinkLabel: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead.',
    ),
    manageContributionLinkHref: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead.',
    ),

    buttonLabel: deprecated(
      PropTypes.string,
      'Use `RewardCard.Action` to insert your button and its callbacks instead.',
    ),
    buttonOnMouseEnter: deprecated(
      PropTypes.func,
      'Use `RewardCard.Action` to insert your button and its callbacks instead.',
    ),
    buttonOnMouseLeave: deprecated(
      PropTypes.func,
      'Use `RewardCard.Action` to insert your button and its callbacks instead.',
    ),
    buttonOnClick: deprecated(
      PropTypes.func,
      'Use `RewardCard.Action` to insert your button and its callbacks instead.',
    ),

    imageProps: deprecated(PropTypes.object, 'Use `RewardCard.Image` instead.'),

    isDisabled: deprecated(
      PropTypes.bool,
      'You should handle the disabled state direcly on your component.',
    ),
    starred: deprecated(
      PropTypes.bool,
      'Use `RewardCard` sub-component instead.',
    ),
    starLabel: deprecated(
      PropTypes.string,
      'Use `RewardCard` sub-component instead.',
    ),

    version: deprecated(
      PropTypes.oneOf(['default', 'tiny']),
      '`RewardCard` is no longer handled with media-queries. The version of the component now is handled by the size of the parent container.',
    ),

    // Deprecated props
    titleDescription: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
    ),
    textDescription: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
    ),
    textTag: deprecated(
      PropTypes.string,
      'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
    ),
    myContribution: deprecated(
      PropTypes.string,
      'Use `manageContributionDescription` prop instead.',
    ),
    manageContribution: deprecated(
      PropTypes.string,
      'Use `manageContributionLinkLabel` prop instead.',
    ),
    manageContributionLink: deprecated(
      PropTypes.string,
      'Use `manageContributionLinkHref` prop instead.',
    ),
    button: deprecated(
      PropTypes.string,
      'Use `RewardCard.Action` to insert your button and its callbacks instead.',
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
    withoutBorder: PropTypes.bool,
  }

  static defaultProps = {
    withoutBorder: false,
  }

  render() {
    const { children, withoutBorder, ...others } = this.props

    return (
      <>
        <LegacyRewardCardContainer {...this.props} />
        {children && (
          <CardContainer withoutBorder={withoutBorder} {...others}>
            {children}
          </CardContainer>
        )}
      </>
    )
  }
}

// This export handles retro-compatibility.
// TODO: remove this export when deleting all deprecated components.
export const styles = legacyStyles
