import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Text } from '../../../../components/typography/text'
import { RewardCardCheckedIcon } from './checked-icon'
import { Deprecated } from '../../../../helpers/utils/deprecated'

export const ManageContribution = ({
  description,
  linkLabel,
  linkHref,
  isDisabled,
  isTinyVersion,
  isSOrLessVersion,
}) => {
  if (!description) return null
  if (isTinyVersion && isDisabled) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <Fragment>
        {isSOrLessVersion && (
          <Grid className="k-LegacyRewardCard__choiceButton">
            <GridCol>
              <div className="k-LegacyRewardCard__myContribution">
                <RewardCardCheckedIcon />
                <div className="k-LegacyRewardCard__myContribution__text">
                  <Text color="font1" size="tiny" weight="regular">
                    {description}
                    <br />
                    <Text
                      tag="a"
                      href={linkHref}
                      color="primary1"
                      weight="regular"
                      decoration="none"
                    >
                      {linkLabel}
                    </Text>
                  </Text>
                </div>
              </div>
            </GridCol>
          </Grid>
        )}

        {!isSOrLessVersion && (
          <div className="k-LegacyRewardCard__myContribution">
            <RewardCardCheckedIcon />
            <div className="k-LegacyRewardCard__myContribution__text">
              <Text color="font1" size="tiny" weight="regular">
                {description}
                <br />
                <Text
                  tag="a"
                  href={linkHref}
                  color="primary1"
                  weight="regular"
                  decoration="none"
                >
                  {linkLabel}
                </Text>
              </Text>
            </div>
          </div>
        )}
      </Fragment>
    </Deprecated>
  )
}

ManageContribution.propTypes = {
  description: PropTypes.string,
  linkLabel: PropTypes.string,
  linkHref: PropTypes.string,
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired,
  isSOrLessVersion: PropTypes.bool.isRequired,
}

ManageContribution.defaultProps = {
  description: '',
  linkLabel: '',
  linkHref: '',
  isDisabled: false,
}
