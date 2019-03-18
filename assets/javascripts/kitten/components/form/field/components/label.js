import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../layout/marger'
import { Label } from '../../../form/label'
import { Tooltip } from '../../../tooltips/tooltip'
import { Line } from '../../../layout/line'

export const FieldLabel = ({
  children,
  tooltip,
  tooltipId,
  labelProps,
  withoutMargin,
}) => {
  const InnerLabel = (
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
  )

  if (withoutMargin) {
    return InnerLabel
  }

  return <Marger bottom="1.5">{InnerLabel}</Marger>
}

FieldLabel.propTypes = {
  tooltip: PropTypes.string,
  labelProps: PropTypes.object,
  withoutMargin: PropTypes.bool,
}

FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {},
  withoutMargin: false,
}
