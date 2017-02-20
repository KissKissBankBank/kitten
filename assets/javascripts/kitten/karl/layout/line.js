import React from 'react'
import { Line } from 'kitten/components/layout/line'
import Tooltip from 'kitten/components/tooltips/tooltip'
import { Label } from 'kitten/components/form/label'
import { TextInput } from 'kitten/components/form/text-input'
import { HeartIcon } from 'kitten/components/icons/heart-icon'

export const KarlLineWithTooltip = (props) => {
  return (
    <Line>
      <Line.Item>
        Lorem ipsum dolor sit amet.
      </Line.Item>
      <Line.Item>
        <Tooltip place='right'>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Velit recusandae, dolores placeat. Sit iste
          adipisci ex fuga accusamus autem id, dolorum.
        </Tooltip>
      </Line.Item>
    </Line>
  )
}

export const KarlLineWithBigHeart = (props) => {
  return (
    <Line>
      <Line.Item>
        Lorem ipsum dolor sit amet.
      </Line.Item>
      <Line.Item>
        <button className="k-buttonIcon k-ButtonIcon--hydrogen k-ButtonIcon--big">
          <HeartIcon className="k-ButtonIcon__svg" />
        </button>
      </Line.Item>
    </Line>
  )
}
