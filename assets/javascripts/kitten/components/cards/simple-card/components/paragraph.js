import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { Marger } from '../../../../components/layout/marger'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { parseHtml } from '../../../../helpers/utils/parser'

export class Paragraph extends PureComponent {
  render() {
    const { paragraph } = this.props

    return (
      <>
        <Marger top=".3" bottom="1.5">
          <Text lineHeight="normal" size="micro" weight="light">
            {parseHtml(paragraph)}
          </Text>
        </Marger>
        <Marger top="1.5">
          <HorizontalStroke size="tiny" />
        </Marger>
      </>
    )
  }
}

Paragraph.propTypes = {
  paragraph: PropTypes.string,
}

Paragraph.defaultProps = {
  paragraph: null,
}
