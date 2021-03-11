import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../layout/marger'
import { Label } from '../../../form/label'
import { Toggletip } from '../../../tooltips/toggletip'
import { Line } from '../../../layout/line'

export class FieldLabel extends Component {
  static propTypes = {
    link: PropTypes.node,
    tooltip: PropTypes.string,
    labelProps: PropTypes.object,
  }

  static defaultProps = {
    tooltip: null,
    labelProps: {},
  }

  render() {
    const {
      children,
      tooltip,
      tooltipId,
      tooltipProps,
      labelProps,
      link,
      ...others
    } = this.props

    return (
      <Marger bottom="1" {...others}>
        <Line style={{ lineHeight: 1 }}>
          <Line.Item>
            <Label {...labelProps} size={labelProps.size || 'micro'}>
              {children}
            </Label>
          </Line.Item>

          {tooltip && (
            <Line.Item>
              <Toggletip
                id={tooltipId}
                bubbleProps={{ zIndex: 2 }}
                {...tooltipProps}
              >
                {tooltip}
              </Toggletip>
            </Line.Item>
          )}

          {link && <Line.Item>{link}</Line.Item>}
        </Line>
      </Marger>
    )
  }
}
