import React, { Fragment } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { styles } from 'kitten/components/cards/reward-card'
import { Info } from 'kitten/components/cards/reward-card/info'
import { Marger } from 'kitten/components/layout/marger'

const RewardCardInfosBase = ({
  infos,
  isDisabled,
  viewportIsTabletOrLess,
  isTinyVersion,
}) => {
  const styleInfos = [isDisabled && styles.disabled]

  if (infos.length === 0) return null

  return (
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
