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

  return (
    <Marger top="2" bottom=".3">
      <TitleComponent
        tag="p"
        {...titleProps}
        className={classNames(
          'k-Card__title',
          titleProps.className,
        )}
        margin={false}
        modifier="senary"
      >
        {parseHtml(title)}
      </TitleComponent>
    </Marger>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.shape(),
}

Title.defaultProps = {
  title: null,
  titleProps: {},
}
