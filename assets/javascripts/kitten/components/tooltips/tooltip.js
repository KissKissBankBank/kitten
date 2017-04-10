import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: null,
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

    let mobilePlace = void(0)

    if (this.state.width && this.state.width <= 480) {
      mobilePlace = 'bottom'
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
                      place={ mobilePlace || place }
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
