import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../typography/text'
import { HorizontalStroke } from '../../../../typography/horizontal-stroke'
import { parseHtml } from '../../../../../helpers/utils/parser'

export const Paragraph = ({ paragraph }) => {
  return (
    <div className="k-SimpleCard__paragraph">
      <Text
        lineHeight="normal"
        size="micro"
        weight="400"
        tag="p"
        className="k-u-margin-bottom-singleHalf"
      >
        {parseHtml(paragraph)}
      </Text>
      <HorizontalStroke size="small" className="k-u-margin-top-singleHalf" />
    </div>
  )
}

Paragraph.propTypes = {
  paragraph: PropTypes.string,
}

Paragraph.defaultProps = {
  paragraph: null,
}
