import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { parseHtml } from '../../../../helpers/utils/parser'

export const Subtitle = ({ subtitle }) => {
  return (
    <div className="k-u-margin-bottom-singleHalf">
      <Text size="micro" weight="regular">
        {parseHtml(subtitle)}
      </Text>
    </div>
  )
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
}

Subtitle.defaultProps = {
  subtitle: null,
}
