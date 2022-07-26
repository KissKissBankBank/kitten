import _extends from "@babel/runtime/helpers/extends";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Label } from '../../../form/label';
import { Toggletip } from '../../../information/toggletip';
import { Line } from '../../../structure/line';
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
    } = this.props;
    return /*#__PURE__*/React.createElement("div", _extends({
      className: classNames(className, 'k-Field__label', 'k-u-margin-bottom-single')
    }, others), /*#__PURE__*/React.createElement(Line, {
      style: {
        lineHeight: 1
      },
      className: classNames({
        'k-u-flex-justifyContent-center': center
      })
    }, /*#__PURE__*/React.createElement(Line.Item, null, /*#__PURE__*/React.createElement(Label, labelProps, children)), tooltip && /*#__PURE__*/React.createElement(Line.Item, null, /*#__PURE__*/React.createElement(Toggletip, _extends({
      id: tooltipId,
      bubbleProps: {
        zIndex: 2
      },
      actionLabel: "Help"
    }, tooltipProps), tooltip)), link && /*#__PURE__*/React.createElement(Line.Item, null, link)));
  }

}
FieldLabel.propTypes = {
  link: PropTypes.node,
  tooltip: PropTypes.string,
  labelProps: PropTypes.object,
  tooltipProps: PropTypes.object,
  center: PropTypes.bool
};
FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {},
  center: false
};