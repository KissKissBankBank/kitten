import React from 'react'
import { Line } from 'kitten/components/layout/line'
import { Tooltip } from 'kitten/components/tooltips/tooltip'
import { Label } from 'kitten/components/form/label'
import { TextInput } from 'kitten/components/form/text-input'
import { HeartIcon } from 'kitten/components/icons/heart-icon'

export const KarlLineWithTooltip = props => {
  return (
    <Line>
      <Line.Item>
        { props.text }
      </Line.Item>
      <Line.Item>
        <Tooltip id={ props.id }
                 place={ props.place }>
          { props.children }
        </Tooltip>
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
