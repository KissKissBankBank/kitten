import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Label } from 'kitten/components/form/label'
import { Tooltip } from 'kitten/components/tooltips/tooltip'
import { Line } from 'kitten/components/layout/line'

export class FieldLabel extends Component {
  static propTypes = {
    tooltip: PropTypes.string,
    labelProps: PropTypes.object,
  }

  static defaultProps = {
    tooltip: null,
    labelProps: {},
  }

  render() {
    const { children, tooltip, labelProps } = this.props

    return (
      <Marger bottom="1.5">
        <Line style={{ lineHeight: 1 }}>
          <Line.Item>
            <Label {...labelProps} margin={false} size="tiny">
              {children}
            </Label>
          </Line.Item>

          {tooltip && (
            <Line.Item>
              <Tooltip id="tooltip">{tooltip}</Tooltip>
            </Line.Item>
          )}
        </Line>
      </Marger>
    )
  }
}
