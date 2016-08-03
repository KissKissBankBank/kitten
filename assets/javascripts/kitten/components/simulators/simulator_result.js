window.SimulatorResult = React.createClass({
  render: function() {
    const durationSymbol = this.props.duration === 1
                         ? this.props.durationSymbol
                         : this.props.durationSymbolPlural
    return (
      <div className={classes("k-SimulatorResult", this.props.className)}>
        <div className="k-SimulatorResult__item">
          <div>
            {this.props.duration}
            {' '}
            <sup>{durationSymbol}</sup>
          </div>
          <div>{this.props.durationText}</div>
        </div>
        <div className="k-SimulatorResult__item is-last">
          <div>
            {this.props.fee}
            {' '}
            <sup>{this.props.feeSymbol}</sup>
          </div>
          <div>{this.props.feeText}</div>
        </div>
      </div>
    )
  }
})
