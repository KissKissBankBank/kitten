import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../../form/label'
import { Toggletip } from '../../../molecules/toggletip'
import { Line } from '../../../molecules/line'

export class FieldLabel extends Component {
  render() {
    const {
      children,
      tooltip,
      tooltipId,
      tooltipProps,
      labelProps,
      link,
      tooltipLabel,
      ...others
    } = this.props

    return (
      <div className="k-u-margin-bottom-single" {...others}>
        <Line style={{ lineHeight: 1 }}>
          <Line.Item>
            <Label {...labelProps}>{children}</Label>
          </Line.Item>

          {tooltip && (
            <Line.Item>
              <Toggletip
                id={tooltipId}
                bubbleProps={{ zIndex: 2 }}
                actionLabel="Help"
                {...tooltipProps}
              >
                {tooltip}
              </Toggletip>
            </Line.Item>
          )}

          {link && <Line.Item>{link}</Line.Item>}
        </Line>
      </div>
    )
  }
}

FieldLabel.propTypes = {
  link: PropTypes.node,
  tooltip: PropTypes.string,
  labelProps: PropTypes.object,
  tooltipProps: PropTypes.object,
}

FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {},
}
