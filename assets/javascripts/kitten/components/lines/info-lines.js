import React from 'react'
import classNames from 'classnames'

export class InfoLines extends React.Component {
  constructor(props) {
    super(props)

    this.renderInfo = this.renderInfo.bind(this)
  }

  renderInfos() {
    return this.props.infos.map(this.renderInfo)
  }

  renderInfo(element) {
    const { key, value } = element

    return (
      <div className="k-InfoLines__line">
        <div className="k-InfoLines__line__key">
          { key }
        </div>

        <div className="k-InfoLines__line__value">
          { value }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="k-InfoLines">
        { this.renderInfos() }
      </div>
    )
  }
}

InfoLines.defaultProps = {
  items: [], // Eg: [{ key: …, value: … }]
}
