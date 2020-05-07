import React from 'react'
import { BarGraphTooltip } from '../common/components/bar-graph-tooltip'
import { Text } from '../../../../components/typography/text'
import { restoreContributionsValue, restoreVisitValue } from './bar-graph'

export const TooltipElement = ({ id, value, data }) => {
  let displayLegend = data.contributionsLegend
  let displayValue = restoreContributionsValue(data.contributions)

  if (value === data.visits) {
    displayLegend = data.visitsLegend
    displayValue = restoreVisitValue(data.visits)
  }

  return (
    <BarGraphTooltip>
      <Text
        tag="p"
        weight="light"
        size="micro"
        className="k-u-align-center k-u-margin-none"
      >
        {id}
      </Text>
      <div className="Tooltip__horizontalStroke" />
      <dl className="Tooltip__defs k-u-margin-none">
        <div className="Tooltip__defs__line">
          <Text
            size="tiny"
            weight="light"
            tag="dt"
            className="Tooltip__defs__title"
          >
            {displayLegend}
          </Text>
          <Text
            size="tiny"
            weight="regular"
            tag="dd"
            className="Tooltip__defs__value"
          >
            {displayValue}
          </Text>
        </div>
      </dl>
    </BarGraphTooltip>
  )
}
