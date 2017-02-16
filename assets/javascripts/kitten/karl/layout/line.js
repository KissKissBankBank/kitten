import React from 'react'
import { Line } from 'kitten/components/layout/line'
import Tooltip from 'kitten/components/tooltips/tooltip'
import { Label } from 'kitten/components/form/label'
import { TextInput } from 'kitten/components/form/text-input'

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
        <button className="k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--big">
          <svg className='k-ButtonIcon__svg' viewBox="0 0 14 12"
              xmlns="http://www.w3.org/2000/svg"><path d="M7 2.927C6.71 1.267
              5.262.007 3.52.01 1.574.013-.003 1.595 0 3.543 0 4.485.37 5.34.97
              5.97l.012.014L7.012 12l5.856-5.88c.698-.646 1.134-1.57
              1.132-2.597-.002-1.95-1.582-3.525-3.53-3.523C8.73.002 7.284 1.267
              7 2.927z"/></svg>
        </button>
      </Line.Item>
    </Line>
  )
}
