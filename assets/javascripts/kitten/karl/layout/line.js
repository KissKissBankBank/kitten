import React from 'react'
import { Line } from 'kitten/components/layout/line'
import { withTooltip } from 'kitten/hoc/with-tooltip'
import { ButtonInfoIcon } from 'kitten/components/buttons/button-info-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'

const InfoWithTooltipButtonIcon = withTooltip(ButtonInfoIcon, {})

export const KarlLineWithTooltip = props => {
  return (
    <Line>
      <Line.Item>
        { props.text }
      </Line.Item>
      <Line.Item>
        <InfoWithTooltipButtonIcon />
      </Line.Item>
    </Line>
  )
}

export const KarlLineWithBigHeart = props => {
  return (
    <Line>
      <Line.Item>
        Lorem ipsum dolor sit amet.
      </Line.Item>
      <Line.Item>
        <button className="k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--big">
          <HeartIcon className="k-ButtonIcon__svg" />
        </button>
      </Line.Item>
    </Line>
  )
}
