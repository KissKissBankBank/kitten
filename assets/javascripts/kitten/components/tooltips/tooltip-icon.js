import React from 'react'

export default class TooltipIcon extends React.Component {
  render() {
    return (
      <button className="k-ButtonIcon
                         k-ButtonIcon--beryllium
                         k-ButtonIcon--micro
                         k-ButtonIcon--tooltip"
              { ...this.props }>
        <svg className="k-ButtonIcon__svg" width="6" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.32 8.32"><path d="M3 2.09a.9.9 0 0 0-1-1 1.64 1.64 0 0 0-1.23.62L0 1a2.72 2.72 0 0 1 2.1-1 2 2 0 0 1 2.22 2c0 1.52-1.87 2.06-1.7 3.61H1.4C1.15 3.85 3 3.17 3 2.09zM2 6.45a.94.94 0 0 1 0 1.87.89.89 0 0 1-.89-.94.89.89 0 0 1 .89-.93z"/></svg>
      </button>
    )
  }
}
