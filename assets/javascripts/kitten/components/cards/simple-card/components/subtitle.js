import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { Marger } from '../../../../components/layout/marger'
import { parseHtml } from '../../../../helpers/utils/parser'

export class Subtitle extends PureComponent {
  render() {
    const { subtitle } = this.props

    return (
      <Marger top=".3" bottom="1.5">
        <Text size="micro" weight="regular">
          {parseHtml(subtitle)}
        </Text>
      </Marger>
    )
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
}

Subtitle.defaultProps = {
  subtitle: null,
}
