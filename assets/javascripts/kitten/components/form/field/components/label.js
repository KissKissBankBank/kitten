import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../layout/marger'
import { Label } from '../../../form/label'
import { Tooltip } from '../../../tooltips/tooltip'
import { Line } from '../../../layout/line'

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
    const { children, tooltip, tooltipId, labelProps } = this.props

    return (
      <Marger bottom="1.5">
        <Line style={{ lineHeight: 1 }}>
          <Line.Item>
            <Label {...labelProps} size="tiny">
              {children}
            </Label>
          </Line.Item>

          {tooltip && (
            <Line.Item>
              <Tooltip id={tooltipId}>{tooltip}</Tooltip>
            </Line.Item>
          )}
        </Line>
      </Marger>
    )
  }
}
