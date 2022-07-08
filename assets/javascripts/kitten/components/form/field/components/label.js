import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Label } from '../../../form/label'
import { Toggletip } from '../../../information/toggletip'
import { Line } from '../../../structure/line'

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
      className,
      center,
      ...others
    } = this.props

    return (
      <div
        className={classNames(
          className,
          'k-Field__label',
          'k-u-margin-bottom-single',
        )}
        {...others}
      >
        <Line style={{ lineHeight: 1 }} className={classNames({ 'k-u-flex-justifyContent-center': center })}>
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
  center: PropTypes.bool,
}

FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {},
  center: false,
}
