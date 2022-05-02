import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["children", "tooltip", "tooltipId", "tooltipProps", "labelProps", "link", "tooltipLabel"];
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../../../form/label';
import { Toggletip } from '../../../information/toggletip';
import { Line } from '../../../structure/line';
export var FieldLabel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FieldLabel, _Component);

  function FieldLabel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FieldLabel.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        tooltip = _this$props.tooltip,
        tooltipId = _this$props.tooltipId,
        tooltipProps = _this$props.tooltipProps,
        labelProps = _this$props.labelProps,
        link = _this$props.link,
        tooltipLabel = _this$props.tooltipLabel,
        others = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/React.createElement("div", _extends({
      className: "k-u-margin-bottom-single"
    }, others), /*#__PURE__*/React.createElement(Line, {
      style: {
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement(Line.Item, null, /*#__PURE__*/React.createElement(Label, labelProps, children)), tooltip && /*#__PURE__*/React.createElement(Line.Item, null, /*#__PURE__*/React.createElement(Toggletip, _extends({
      id: tooltipId,
      bubbleProps: {
        zIndex: 2
      },
      actionLabel: "Help"
    }, tooltipProps), tooltip)), link && /*#__PURE__*/React.createElement(Line.Item, null, link)));
  };

  return FieldLabel;
}(Component);
FieldLabel.propTypes = {
  link: PropTypes.node,
  tooltip: PropTypes.string,
  labelProps: PropTypes.object,
  tooltipProps: PropTypes.object
};
FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {}
};