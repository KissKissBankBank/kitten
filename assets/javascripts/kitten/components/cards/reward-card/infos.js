import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'kitten/components/cards/reward-card'
import { Info } from 'kitten/components/cards/reward-card/info'
import { Marger } from 'kitten/components/layout/marger'

export const RewardCardInfos = ({
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

RewardCardInfos.propTypes = {
  infos: PropTypes.array,
  isDisabled: PropTypes.bool.required,
  viewportIsTabletOrLess: PropTypes.bool.required,
  isTinyVersion: PropTypes.bool.required,
}

RewardCardInfos.defaultProps = {
  infos: [],
}
