"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../layout/marger");

var _label = require("../../../form/label");

var _tooltip = require("../../../tooltips/tooltip");

var _line = require("../../../layout/line");

var FieldLabel = function FieldLabel(_ref) {
  var children = _ref.children,
      tooltip = _ref.tooltip,
      tooltipId = _ref.tooltipId,
      labelProps = _ref.labelProps,
      withoutMargin = _ref.withoutMargin;

  var InnerLabel = _react.default.createElement(_line.Line, {
    style: {
      lineHeight: 1
    }
  }, _react.default.createElement(_line.Line.Item, null, _react.default.createElement(_label.Label, (0, _extends2.default)({}, labelProps, {
    size: "tiny"
  }), children)), tooltip && _react.default.createElement(_line.Line.Item, null, _react.default.createElement(_tooltip.Tooltip, {
    id: tooltipId
  }, tooltip)));

  if (withoutMargin) {
    return InnerLabel;
  }

  return _react.default.createElement(_marger.Marger, {
    bottom: "1.5"
  }, InnerLabel);
};

exports.FieldLabel = FieldLabel;
FieldLabel.propTypes = {
  tooltip: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  withoutMargin: _propTypes.default.bool
};
FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {},
  withoutMargin: false
};