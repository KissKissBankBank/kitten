import React from 'react'
import { KarlStaticTooltip } from 'kitten/karl/tooltips/static-tooltip'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="With button">
        <KarlStaticTooltip arrowLeftPosition="200px">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor, enean massa. Cum sociis natoque penatibus
          et magnis dis parturien.
        </KarlStaticTooltip>
      </Example>
    </div>
  )
}
