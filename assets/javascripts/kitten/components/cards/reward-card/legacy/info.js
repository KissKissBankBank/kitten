import React, { Fragment } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Text as TextBase } from '../../../../components/typography/text'
import { styles } from '../index'
import { Deprecated } from '../../../../helpers/utils/deprecated'

const Text = Radium(TextBase)

export const Info = ({
  label,
  value,
  viewportIsTabletOrLess,
  isTinyVersion,
}) => {
  if (!label) return null

  const infosLists = isTinyVersion
    ? styles.infos.lists.tinyVersion
    : styles.infos.lists

  const InfoBase = (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <Text color="font1" weight="regular" style={infosLists}>
        {`${label} `}
        <Text weight="light">{value}</Text>
      </Text>
    </Deprecated>
  )

  return (
    <Fragment>
      {(viewportIsTabletOrLess || isTinyVersion) && <div>{InfoBase}</div>}

      {!viewportIsTabletOrLess && !isTinyVersion && InfoBase}
    </Fragment>
  )
}

Info.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  viewportIsTabletOrLess: PropTypes.bool.isRequired,
  isTinyVersion: PropTypes.bool.isRequired,
}

Info.defaultProps = {
  label: null,
  value: null,
}
