import React from 'react'
import Slider from 'kitten/components/form/slider'
import SliderTooltip from 'kitten/components/form/slider-tooltip'

export default class SliderWithTooltipAndPower extends React.Component {
  render() {
    const { tooltipClass, tooltipText, percentage, ...other } = this.props

    return (
      <div>
        <SliderTooltip className={ tooltipClass } percentage={ percentage }>
          { tooltipText }
        </SliderTooltip>
        <Slider { ...other } />
      </div>
    )
  }
}
