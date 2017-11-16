import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import classNames from 'classnames'

export class InformationBox extends Component {
  render() {
    const {
      title,
      children,
      ...other
    } = this.props

    return (
      <div className="k-InformationBox">
        <div className="k-InformationBox__container">
          <Title
            margin={ false }
            modifier="quaternary"
            tag="p"
          >
            { title }
          </Title>
          <Paragraph
            margin={ false }
            modifier="quaternary"
            tag="p"
          >
            { children }
          </Paragraph>
        </div>
      </div>
    )
  }
}

InformationBox.defaultProps = {
  title: null,
  children: null,
}
