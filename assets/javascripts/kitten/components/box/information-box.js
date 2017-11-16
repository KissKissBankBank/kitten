import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import classNames from 'classnames'

export class InformationBox extends Component {
  render() {
    const {
      title,
      children,
      ...other
    } = this.props

    return (
      <div className="k-InformationBox" { ...other }>
        <div className="k-InformationBox__container">
          <Title
            margin={ false }
            modifier="quaternary"
            tag="p"
          >
            { title }
          </Title>
          { children }
        </div>
      </div>
    )
  }
}

InformationBox.defaultProps = {
  title: null,
  children: null,
}
