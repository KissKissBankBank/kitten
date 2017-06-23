import React from 'react'
import classNames from 'classnames'
import { Line } from 'kitten/components/layout/line'
import { withTooltip } from 'kitten/hoc/with-tooltip'
import { ButtonInfoIcon } from 'kitten/components/buttons/button-info-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
// DEPRECATED
import Tooltip from 'kitten/components/tooltips/tooltip'
import { Label } from 'kitten/components/form/label'
import { TextInput } from 'kitten/components/form/text-input'

const InfoWithTooltipButtonIcon = withTooltip(ButtonInfoIcon, {})

export const KarlLineWithTooltip = props => {
  return (
    <Line>
      <Line.Item>
        { props.text }
      </Line.Item>
      <Line.Item >
        <InfoWithTooltipButtonIcon id="tooltip-2">
          Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </InfoWithTooltipButtonIcon>
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
        <button className={ classNames('k-ButtonIcon',
                                       'k-ButtonIcon--hydrogen',
                                       'k-ButtonIcon--big') }>
          <HeartIcon className="k-ButtonIcon__svg" />
        </button>
      </Line.Item>
    </Line>
  )
}

//DEPRECATED
export const KarlLineWithTooltip = props => {
  return (
    <Line>
      <Line.Item>
        { props.text }
      </Line.Item>
      <Line.Item >
        <Tooltip id={ props.id }
                 place={ props.place }>
          { children }
        </Tooltip>
      </Line.Item>
    </Line>
  )
}
