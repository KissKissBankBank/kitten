import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../../components/layout/marger'
import { ManageContribution } from './manage-contribution'
import { RewardCardButton } from './button'
import { Deprecated } from '../../../../helpers/utils/deprecated'

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
  isSOrLessVersion,
  topMargin,
}) => {
  const hasActionContent = buttonLabel || manageContributionDescription

  if (!hasActionContent) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <Fragment>
        {manageContributionDescription && (
          <Marger
            top={topMargin}
            bottom={!manageContributionDescription ? 0 : 2}
          >
            <ManageContribution
              description={manageContributionDescription}
              linkLabel={manageContributionLinkLabel}
              linkHref={manageContributionLinkHref}
              isDisabled={isDisabled}
              isTinyVersion={isTinyVersion}
              isSOrLessVersion={isSOrLessVersion}
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
    </Deprecated>
  )
}

export const RewardCardActionOnMOrMore = ({
  manageContributionDescription,
  manageContributionLinkLabel,
  manageContributionLinkHref,
  buttonLabel,
  buttonOnMouseEnter,
  buttonOnMouseLeave,
  buttonOnClick,
  isDisabled,
  isTinyVersion,
  isSOrLessVersion,
}) => {
  const hasActionContent = buttonLabel || manageContributionDescription

  if (!hasActionContent) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
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
              isSOrLessVersion={isSOrLessVersion}
            />
          </Marger>
        )}
      </Marger>
    </Deprecated>
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
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired,
  isSOrLessVersion: PropTypes.bool.isRequired,
}

const commonDefaultProps = {
  manageContributionDescription: '',
  manageContributionLinkLabel: '',
  manageContributionLinkHref: '',
  buttonLabel: '',
  buttonOnMouseEnter: () => {},
  buttonOnMouseLeave: () => {},
  buttonOnClick: () => {},
  isDisabled: false,
  topMargin: 0,
}

RewardCardAction.propTypes = {
  ...commonPropTypes,
  topMargin: PropTypes.number,
}

RewardCardAction.defaultProps = { ...commonDefaultProps }
RewardCardActionOnMOrMore.propTypes = { ...commonPropTypes }
RewardCardActionOnMOrMore.defaultProps = { ...commonDefaultProps }
