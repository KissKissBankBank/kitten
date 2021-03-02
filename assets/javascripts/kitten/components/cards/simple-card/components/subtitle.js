import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { parseHtml } from '../../../../helpers/utils/parser'

export const Subtitle = ({ subtitle }) => {
  return (
    <Text
      size="micro"
      weight="regular"
      className="k-u-margin-bottom-singleHalf"
    >
      {parseHtml(subtitle)}
    </Text>
  )
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
}

Subtitle.defaultProps = {
  subtitle: null,
}
