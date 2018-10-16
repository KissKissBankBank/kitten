import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Grid as GridBase, GridCol } from 'kitten/components/grid/grid'
import { Text } from 'kitten/components/typography/text'
import { RewardCardCheckedIcon } from 'kitten/components/cards/reward-card/checked-icon'
import { styles } from 'kitten/components/cards/reward-card'

const Grid = Radium(GridBase)

export const ManageContribution = ({
  description,
  linkLabel,
  linkHref,
  isDisabled,
  isTinyVersion,
  isSOrLessVersion,
}) => {
  if (!description || (isTinyVersion && isDisabled)) return

  const choiceButtonPaddings = isTinyVersion
    ? styles.choiceButton.paddings.tinyVersion
    : styles.choiceButton.paddings

  return (
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
  )
}

ManageContribution.propTypes = {
  description: PropTypes.string,
  linkLabel: PropTypes.string,
  linkHref: PropTypes.string,
  isDisabled: PropTypes.bool.required,
  isTinyVersion: PropTypes.bool.required,
  isSOrLessVersion: PropTypes.bool.required,
}

ManageContribution.defaultProps = {
  description: '',
  linkLabel: '',
  linkHref: '',
}
