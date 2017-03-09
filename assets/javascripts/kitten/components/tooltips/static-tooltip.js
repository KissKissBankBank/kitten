import React from 'react'

export class StaticTooltip extends React.Component {
  renderArrow() {
    return (
      <span className="k-StaticTooltip__arrow" />
    )
  }

  render() {
    const { children } = this.props

    return (
      <div className="k-StaticTooltip">
        { this.renderArrow() }
        <div className="k-StaticTooltip__content">
          { children }
        </div>
      </div>
    )
  }
}