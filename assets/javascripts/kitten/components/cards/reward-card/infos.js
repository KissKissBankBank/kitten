import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { styles } from '../../../components/cards/reward-card'
import { Info } from '../../../components/cards/reward-card/info'
import { Marger } from '../../../components/layout/marger'
import { Deprecated } from '../../../helpers/utils/deprecated'

const RewardCardInfosBase = ({
  infos,
  isDisabled,
  viewportIsTabletOrLess,
  isTinyVersion,
}) => {
  const styleInfos = [isDisabled && styles.disabled]

  if (infos.length === 0) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <div style={styleInfos} disabled={isDisabled}>
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

RewardCardInfosBase.propTypes = {
  infos: PropTypes.array,
  isDisabled: PropTypes.bool,
  viewportIsTabletOrLess: PropTypes.bool.isRequired,
  isTinyVersion: PropTypes.bool.isRequired,
}

RewardCardInfosBase.defaultProps = {
  infos: [],
  isDisabled: false,
}

export const RewardCardInfos = Radium(RewardCardInfosBase)
