import React from 'react'
import { KarlLineWithTooltip } from 'kitten/karl/layout/line'
import { QuestionMarkWithTooltip } from 'kitten/components/tooltips/question-mark-with-tooltip'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Tooltip top">
        <KarlLineWithTooltip
          id="tooltip-top"
          place="top"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor, enean massa. Cum sociis natoque penatibus
          et magnis dis parturien.
        </KarlLineWithTooltip>
      </Example>
      <Example title="Tooltip right">
        <KarlLineWithTooltip
          id="tooltip-right"
          place="right"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor, enean massa. Cum sociis natoque penatibus
          et magnis dis parturien.
        </KarlLineWithTooltip>
      </Example>
      <Example title="Tooltip bottom">
        <KarlLineWithTooltip
          id="tooltip-bottom"
          place="bottom"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor, enean massa. Cum sociis natoque penatibus
          et magnis dis parturien.
        </KarlLineWithTooltip>
      </Example>
      <Example title="Tooltip left">
        <KarlLineWithTooltip
          id="tooltip-left"
          place="left"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor, enean massa. Cum sociis natoque penatibus
          et magnis dis parturien.
        </KarlLineWithTooltip>
      </Example>
      <Example title="New Tooltip Icon">
        <QuestionMarkWithTooltip id="tooltip-new">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor, enean massa. Cum sociis natoque penatibus
          et magnis dis parturien.
        </QuestionMarkWithTooltip>
      </Example>
    </div>
  )
}
