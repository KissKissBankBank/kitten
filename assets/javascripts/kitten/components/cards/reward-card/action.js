import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { ManageContribution } from 'kitten/components/cards/reward-card/manage-contribution'
import { RewardCardButton } from 'kitten/components/cards/reward-card/button'

export const RewardCardAction = ({
  manageContributionDescription,
  manageContributionLinkLabel,
  manageContributionLinkHref,
  buttonLabel,
  buttonOnMouseEnter,
  buttonOnMouseLeave,
  buttonOnClick,
  isDisabled,
  isTinyVersion,
  withTopMargin,
}) => {
  if (!button && !manageContributionDescription) return

  return (
    <Fragment>
      {manageContributionDescription && (
        <Marger
          top={withTopMargin ? 0 : 2}
          bottom={!manageContributionDescription ? 0 : 2}
        >
          <ManageContribution
            description={manageContributionDescription}
            linkLabel={manageContributionLinkLabel}
            linkHref={manageContributionLinkHref}
            isDisabled={isDisabled}
            isTinyVersion={isTinyVersion}
          />
        </Marger>
      )}
      <RewardCardButton
        label={buttonLabel}
        onMouseEnter={buttonOnMouseEnter}
        onMouseLeave={buttonOnMouseLeave}
        onClick={buttonOnClick}
        isDisabled={isDisabled}
        isTinyVersion={isTinyVersion}
      />
    </Fragment>
  )
}

export const RewardCardActionOnMOrMore = ({
  manageContributionDescription,
  manageContributionLinkLabel,
  manageContributionLinkHref,
  isDisabled,
  isTinyVersion,
  button,
}) => {
  if (!button && !manageContributionDescription) return

  return (
    <Fragment>
      <Marger top="3">
        <RewardCardButton
          label={buttonLabel}
          onMouseEnter={buttonOnMouseEnter}
          onMouseLeave={buttonOnMouseLeave}
          onClick={buttonOnClick}
          isDisabled={isDisabled}
          isTinyVersion={isTinyVersion}
        />
        {manageContributionDescription && (
          <Marger top={!manageContributionDescription ? 0 : 2}>
            <ManageContribution
              description={manageContributionDescription}
              linkLabel={manageContributionLinkLabel}
              linkHref={manageContributionLinkHref}
              isDisabled={isDisabled}
              isTinyVersion={isTinyVersion}
            />
          </Marger>
        )}
      </Marger>
    </Fragment>
  )
}

const commonPropTypes = {
  manageContributionDescription: PropTypes.string,
  manageContributionLinkLabel: PropTypes.string,
  manageContributionLinkHref: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonOnMouseEnter: PropTypes.func,
  buttonOnMouseLeave: PropTypes.func,
  buttonOnClick: PropTypes.func,
  isDisabled: PropTypes.bool.required,
  isTinyVersion: PropTypes.bool.required,
}

const commonDefaultProps = {
  manageContributionDescription: '',
  manageContributionLinkLabel: '',
  manageContributionLinkHref: '',
  buttonLabel: '',
  buttonOnMouseEnter: () => {},
  buttonOnMouseLeave: () => {},
  buttonOnClick: () => {},
  withTopMargin: false,
}

RewardCardAction.propTypes = {
  ...commonPropTypes,
  withTopMargin: PropTypes.bool,
}

RewardCardAction.defaultProps = { ...commonDefaultProps }
RewardCardActionOnMOrMore.propTypes = { ...commonPropTypes }
RewardCardActionOnMOrMore.defaultProps = { ...commonDefaultProps }
