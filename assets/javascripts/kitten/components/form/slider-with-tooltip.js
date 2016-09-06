window.SliderWithTooltip = React.createClass({
  render: function() {
    const { tooltipClass, percentage, ...sliderProps } = this.props
    const leftStyle = { left: percentage }

    return (
      <div className={classNames('k-SliderTooltip', tooltipClass)}>
        <div className="k-SliderTooltip__tip">
          <div className="k-SliderTooltip__tip__content" style={leftStyle}>
            {this.props.children}
          </div>
        </div>
        <div className="k-SliderTooltip__arrow">
          <div className="k-SliderTooltip__arrow__content"
               style={leftStyle}></div>
        </div>
        <Slider {...sliderProps} />
      </div>
    )
  },
})
