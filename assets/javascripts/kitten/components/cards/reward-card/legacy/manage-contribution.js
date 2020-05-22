import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Grid as GridBase, GridCol } from '../../../../components/grid/grid'
import { Text } from '../../../../components/typography/text'
import { RewardCardCheckedIcon } from './checked-icon'
import { styles } from '../index'
import { Deprecated } from '../../../../helpers/utils/deprecated'

const Grid = Radium(GridBase)

const ManageContributionBase = ({
  description,
  linkLabel,
  linkHref,
  isDisabled,
  isTinyVersion,
  isSOrLessVersion,
}) => {
  if (!description) return null
  if (isTinyVersion && isDisabled) return null

  const choiceButtonPaddings = isTinyVersion
    ? styles.choiceButton.paddings.tinyVersion
    : styles.choiceButton.paddings

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <Fragment>
        {isSOrLessVersion && (
          <Grid style={choiceButtonPaddings}>
            <GridCol>
              <div style={styles.myContribution}>
                <RewardCardCheckedIcon />
                <div style={styles.myContribution.text}>
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
          <div style={styles.myContribution}>
            <RewardCardCheckedIcon />
            <div style={styles.myContribution.text}>
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

ManageContributionBase.propTypes = {
  description: PropTypes.string,
  linkLabel: PropTypes.string,
  linkHref: PropTypes.string,
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired,
  isSOrLessVersion: PropTypes.bool.isRequired,
}

ManageContributionBase.defaultProps = {
  description: '',
  linkLabel: '',
  linkHref: '',
  isDisabled: false,
}

export const ManageContribution = Radium(ManageContributionBase)
