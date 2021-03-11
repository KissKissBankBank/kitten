import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { parseHtml } from '../../../../helpers/utils/parser'
import { Title } from '../../../../components/typography/title'
import { Marger } from '../../../../components/layout/marger'

export class TitleComponent extends PureComponent {
  render() {
    const { title, titleProps } = this.props

    const titleClassName = classNames('k-Card__title', titleProps.className)

    return (
      <Marger top="2" bottom=".3">
        <Title
          tag="p"
          {...titleProps}
          className={titleClassName}
          margin={false}
          modifier="senary"
        >
          {parseHtml(title)}
        </Title>
      </Marger>
    )
  }
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.shape(),
}

TitleComponent.defaultProps = {
  title: null,
  titleProps: {},
}
