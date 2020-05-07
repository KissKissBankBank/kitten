import React from 'react'
import { BarGraphTooltip } from '../common/components/bar-graph-tooltip'
import { Text } from '../../../../components/typography/text'
import { restorePercentageValue, restoreTotalValue } from './bar-graph'

export const TooltipElement = ({ value, data }) => {
  let displayLegend = data.percentagesLegend
  let displayValue = `${restorePercentageValue(data.percentages)} %`

  if (value === data.collected) {
    displayLegend = data.collectedLegend
    displayValue = restoreTotalValue(data.collected)
  }

  return (
    <BarGraphTooltip>
      <Text
        tag="p"
        weight="light"
        size="micro"
        className="k-u-align-center k-u-margin-none"
      >
        {data.name}
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
