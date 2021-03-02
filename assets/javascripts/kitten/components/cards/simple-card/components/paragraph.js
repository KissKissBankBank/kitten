import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { parseHtml } from '../../../../helpers/utils/parser'

export const Paragraph = ({ paragraph }) => {
  return (
    <>
      <Text
        lineHeight="normal"
        size="micro"
        weight="light"
        className="k-u-margin-bottom-singleHalf"
      >
        {parseHtml(paragraph)}
      </Text>
      <HorizontalStroke size="tiny" className="k-u-margin-top-singleHalf" />
    </>
  )
}

Paragraph.propTypes = {
  paragraph: PropTypes.string,
}

Paragraph.defaultProps = {
  paragraph: null,
}
