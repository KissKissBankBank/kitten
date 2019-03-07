import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Marger } from '../../../../components/layout/marger'

export class HorizontalStrokeComponent extends PureComponent {
  render() {
    const { horizontalStroke } = this.props

    return (
      <Marger top="1.5">
        <HorizontalStroke size="tiny" />
      </Marger>
    )
  }
}

HorizontalStrokeComponent.propTypes = {
  horizontalStroke: PropTypes.bool,
}

HorizontalStrokeComponent.defaultProps = {
  horizontalStroke: true,
}
