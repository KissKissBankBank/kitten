import React, { Component } from 'react'
import { Title } from '../../../components/typography/title'
import { Marger } from '../../../components/layout/marger'

export class InformationBox extends Component {
  render() {
    const { title, children, ...other } = this.props

    return (
      <div className="k-InformationBox" {...other}>
        <div className="k-InformationBox__container">
          <Marger bottom="1">
            <Title tag="p" noMargin={false} modifier="quaternary">
              {title}
            </Title>
          </Marger>
          <Marger top="1">{children}</Marger>
        </div>
      </div>
    )
  }
}

InformationBox.defaultProps = {
  title: null,
  children: null,
}
