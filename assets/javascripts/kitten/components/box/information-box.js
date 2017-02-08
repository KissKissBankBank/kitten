import React from 'react'
import classNames from 'classnames'

export class InformationBox extends React.Component {
  render() {
    const {
      title,
      children,
      ...other
    } = this.props

    return (
      <div className="k-InformationBox" { ...other }>
        <div className="k-InformationBox__container">
          <p className="k-InformationBox__title">{ title }</p>
          <div className="k-InformationBox__text">
            { children }
          </div>
        </div>
      </div>
    )
  }
}

InformationBox.defaultProps = {
  title: null,
  children: null,
}
