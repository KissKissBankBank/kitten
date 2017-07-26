import React, { Component } from 'react'
import classNames from 'classnames'

export class InfoLines extends Component {
  constructor(props) {
    super(props)

    this.renderInfo = this.renderInfo.bind(this)
  }

  renderInfos() {
    return this.props.infos.map(this.renderInfo)
  }

  renderInfo(element) {
    const { key, value, id, className, style, ...others } = element

    const infoClassName = classNames(
      'k-InfoLines__line',
      className,
    )

    const infoStyle = {
      ...style,
      borderColor: this.props.borderColor,
    }

    return (
      <div
        { ...others }
        key={ id }
        className={ infoClassName }
        style={ infoStyle }>
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
    const {
      infos,
      className,
      withoutTopBottomBorder,
      borderColor,
      style,
      ...others,
    } = this.props

    const infoLinesClassName = classNames(
      'k-InfoLines',
      {
        'k-InfoLines--withoutTopBottomBorder': withoutTopBottomBorder,
      },
      className,
    )

    const infoLinesStyle = {
      ...style,
      borderColor: borderColor,
    }

    return (
      <div
        { ...others }
        className={ infoLinesClassName }
        style={ infoLinesStyle }>
        { this.renderInfos() }
      </div>
    )
  }
}

InfoLines.defaultProps = {
  className: null,
  infos: [], // Eg: [{ key: …, value: …, id: … }]
  withoutTopBottomBorder: false,
  borderColor: null,
}
