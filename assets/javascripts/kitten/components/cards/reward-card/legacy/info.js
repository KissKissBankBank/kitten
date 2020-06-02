import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { Deprecated } from '../../../../helpers/utils/deprecated'

export const Info = ({
  label,
  value,
  viewportIsTabletOrLess,
  isTinyVersion,
}) => {
  if (!label) return null

  const InfoBase = (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <Text color="font1" weight="regular" className="k-LegacyRewardCard__list">
        {`${label} `}
        <Text weight="light">{value}</Text>
      </Text>
    </Deprecated>
  )

  return (
    <>
      {(viewportIsTabletOrLess || isTinyVersion) && <div>{InfoBase}</div>}

      {!viewportIsTabletOrLess && !isTinyVersion && InfoBase}
    </>
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
