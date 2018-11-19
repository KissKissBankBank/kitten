import React from 'react'
import {
  KarlLineWithTooltip,
  KarlLineWithBigHeart,
} from 'kitten/karl/layout/line'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="With tooltip">
        <KarlLineWithTooltip
          id="line-eg-tooltip-top"
          place="right"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing
        </KarlLineWithTooltip>
      </Example>
      <Example title="With Big icon">
        <KarlLineWithBigHeart />
      </Example>
    </div>
  )
}
