import React from 'react'
import classNames from 'classnames'

export class InformationBox extends React.Component {
  render() {
    const {
      title,
      text,
    } = this.props

    return (
    <div className="k-InformationBox">
      <div className="k-InformationBox__container">
        <p className="k-InformationBox__title">{ title }</p>
        <p className="k-InformationBox__text">{ text }</p>

      </div>
    </div>)
  }
}

InformationBox.defaultProps = {
  title: "Lorem ipsum dolor sit amet",
  text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
}
