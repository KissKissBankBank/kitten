// Columns of simulator results.
//
// Accepts an array of results:
//     [{ label: 'Foo', value: 42 }, { label: 'Bar', value: 0 }]
window.SimulatorResult = React.createClass({
  render: function() {
    const { results } = this.props
    const contents = results.map(function(result, index) {
      var valueClass = (index == results.length - 1) ? "is-last" : null
      return (
        <div className={classNames("k-SimulatorResult__item", valueClass)}>
          <div className="k-SimulatorResult__item__label">
            {result.label}
          </div>
          <div className="k-SimulatorResult__item__value">
            {result.value}
          </div>
        </div>
      )
    })

    return (
      <div className={classNames("k-SimulatorResult", this.props.className)}>
        {contents}
      </div>
    )
  }
})
