import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { parseHtml } from '../../../../../helpers/utils/parser'
import { Title as TitleComponent } from '../../../../../components/atoms/typography/title'
import { Marger } from '../../../../../components/structure/marger'

export const Title = ({ title, titleProps }) => {
  return (
    <Marger top="2" bottom=".3">
      <TitleComponent
        tag="p"
        {...titleProps}
        className={classNames('k-SimpleCard__title', titleProps.className)}
        noMargin
        modifier="senary"
      >
        {parseHtml(title)}
      </TitleComponent>
    </Marger>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.object,
}

Title.defaultProps = {
  title: null,
  titleProps: {},
}
