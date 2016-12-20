import React from 'react'
import ReactTooltip from 'react-tooltip'

export default class Tooltip extends React.Component {
  render() {
    return (
      <div>
        <button data-tip="hello world" data-event="click focus" className="k-ButtonIcon k-ButtonIcon--beryllium k-ButtonIcon--tiny k-ButtonIcon--tooltip">
          ?
        </button>
          <ReactTooltip />
      </div>
    )
  }

}
