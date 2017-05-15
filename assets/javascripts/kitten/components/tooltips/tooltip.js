import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth,
    }

    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions()
  }

  render() {
    const { place,
            children,
            id,
            ...buttonTooltipIconProps } = this.props

    let responsivePlace = place

    if (this.state.width <= 480) {
      responsivePlace = 'bottom'
    }

    return (
      <div className="k-Tooltip">
        <ButtonTooltipIcon data-tip
                           data-for={ id }
                           data-event="click"
                           data-dismiss={ id }
                           aria-describedby={ id }
                           { ...buttonTooltipIconProps } />
        <ReactTooltip id={ id }
                      // This is not a mistake, this attribute is called
                      // class not className!
                      class="k-Tooltip__content"
                      role="tooltip"
                      effect="solid"
                      place={ responsivePlace }
                      event="none">
          { children }
        </ReactTooltip>
      </div>
    )
  }
}

Tooltip.defaultProps = {
  id: '',
  place: 'right',
  children: null,
}
