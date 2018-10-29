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
import { pxToRem } from 'kitten/helpers/utils/typography'
import { RewardCardTitle } from 'kitten/components/cards/reward-card/title'
import { RewardCardRow } from 'kitten/components/cards/reward-card/row'
import { RewardCardRowContent } from 'kitten/components/cards/reward-card/row-content'
import { RewardCardRowSide } from 'kitten/components/cards/reward-card/row-side'

// TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.
class RewardCardAction extends Component {
  render() {
    const { children } = this.props

    return (
      <RewardCard.Row>
        <RewardCard.RowContent>{children}</RewardCard.RowContent>
        <RewardCard.RowSide style={style.row.emptySide} />
      </RewardCard.Row>
    )
  }
}

// TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.
class RewardCardImage extends Component {
  render() {
    return <img {...this.props} style={{ width: '100%' }} />
  }
}

class RewardCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string,
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

    imageProps: PropTypes.object,

    isDisabled: PropTypes.bool,
    starred: PropTypes.bool,
    starLabel: PropTypes.string,

    version: PropTypes.oneOf(['default', 'tiny']),
    viewportIsMobile: PropTypes.bool,
    viewportIsSOrLess: PropTypes.bool,
    viewportIsTabletOrLess: PropTypes.bool,

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
    manageContributionLink: deprecated(
      PropTypes.string,
      'Use `manageContributionLinkHref` prop instead',
    ),
    button: deprecated(PropTypes.string, 'Use `buttonLabel` prop instead'),
    titleContributors: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    titleDelivery: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    titleAvailability: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    valueContributors: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    valueDelivery: deprecated(PropTypes.string, 'Use `infos` prop instead'),
    valueAvailability: deprecated(PropTypes.string, 'Use `infos` prop instead'),
  }

  isImageComponent = component => component.type.name === 'RewardCardImage'
  isContentComponent = component => component.type.name === 'RewardCardContent'

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
    padding: pxToRem(15),
    width: '100%',
  },
  row: {
    emptySide: {
      margin: `0 ${pxToRem(15)}`,
    },
  },
  image: {
    width: '100%',
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
RewardCardBase.Action = Radium(RewardCardAction)

export const RewardCard = RewardCardBase
