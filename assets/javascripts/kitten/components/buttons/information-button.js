import React from 'react'
import classNames from 'classnames'
import { InformationIcon } from 'kitten/components/icons/Information-icon'

export class InformationButton extends React.Component {
  render() {
    const { className, modifier, ... others } = this.props

    return (
      <button className={ buttonClassName }>
        <InformationIcon className="k-ButtonIcon__svg" />
      </button>
    )
  }
}
