import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Grid as GridBase, GridCol } from 'kitten/components/grid/grid'
import { Text } from 'kitten/components/typography/text'

const Grid = Radium(GridBase)

export const ManageContribution = ({
  description,
  linkLabel,
  linkHref,
  isDisabled,
  isTinyVersion,
}) => {
  if (!description || (isTinyVersion && isDisabled)) return

  const choiceButtonAddPadding = isTinyVersion
    ? styles.choiceButton.addPadding.tinyVersion
    : styles.choiceButton.addPadding

  return (
    <Fragment>
      {this.isSOrLessVersion() && (
        <Grid style={choiceButtonAddPadding}>
          <GridCol>
            <div style={styles.myContribution}>
              {this.renderIconBadge()}
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

      {!this.isSOrLessVersion() && (
        <div style={styles.myContribution}>
          {this.renderIconBadge()}
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
}

ManageContribution.defaultProps = {
  description: '',
  linkLabel: '',
  linkHref: '',
}
