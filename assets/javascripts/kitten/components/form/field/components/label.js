import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../../form/label'
import { Toggletip } from '../../../tooltips/toggletip'
import { Line } from '../../../layout/line'

export class FieldLabel extends Component {
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
      <div className="k-u-margin-bottom-single" {...others}>
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
