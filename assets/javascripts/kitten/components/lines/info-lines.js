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
    const { key, value, id, className, ...others } = element

    const infoClassName = classNames(
      'k-InfoLines__line',
      className,
    )

    return (
      <div key={ id } className={ infoClassName } { ...others }>
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
      borderColorPrimary4,
      ...others,
    } = this.props

    const infoLinesClassName = classNames(
      'k-InfoLines',
      {
        'k-InfoLines--withoutTopBottomBorder': withoutTopBottomBorder,
        'k-InfoLines--borderColorPrimary4': borderColorPrimary4,
      },
      className,
    )

    return (
      <div className={ infoLinesClassName } { ...others }>
        { this.renderInfos() }
      </div>
    )
  }
}

InfoLines.defaultProps = {
  className: null,
  infos: [], // Eg: [{ key: …, value: …, id: … }]
  withoutTopBottomBorder: false,
  borderColorPrimary4: false,
}
