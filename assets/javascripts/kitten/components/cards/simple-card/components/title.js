import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { parseHtml } from '../../../../helpers/utils/parser'
import { Title as TitleComponent } from '../../../../components/typography/title'
import { Marger } from '../../../../components/layout/marger'

export const Title = ({
  title,
  titleProps
}) => {
    const titleClassName = classNames('k-Card__title', titleProps.className)

    return (
      <Marger top="2" bottom=".3">
        <Title
          tag="p"
          {...titleProps}
          className={titleClassName}
          noMargin
          modifier="senary"
        >
          {parseHtml(title)}
        </Title>
      </Marger>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.object,
}

Title.defaultProps = {
  title: null,
  titleProps: {},
}
