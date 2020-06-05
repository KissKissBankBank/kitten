import React from 'react'
import PropTypes from 'prop-types'
import { Info } from './info'
import { Marger } from '../../../../components/layout/marger'
import { Deprecated } from '../../../../helpers/utils/deprecated'

export const RewardCardInfos = ({
  infos,
  isDisabled,
  viewportIsTabletOrLess,
  isTinyVersion,
}) => {
  if (infos.length === 0) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <div
        className={isDisabled ? 'k-LegacyRewardCard__element--disabled' : null}
      >
        <Marger top="2" bottom="3">
          {infos &&
            infos.map(info => (
              <Info
                key={info.label}
                label={info.label}
                value={info.value}
                viewportIsTabletOrLess={viewportIsTabletOrLess}
                isTinyVersion={isTinyVersion}
              />
            ))}
        </Marger>
      </div>
    </Deprecated>
  )
}

RewardCardInfos.propTypes = {
  infos: PropTypes.array,
  isDisabled: PropTypes.bool,
  viewportIsTabletOrLess: PropTypes.bool.isRequired,
  isTinyVersion: PropTypes.bool.isRequired,
}

RewardCardInfos.defaultProps = {
  infos: [],
  isDisabled: false,
}
