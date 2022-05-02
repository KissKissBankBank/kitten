"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _label = require("../../../form/label");

var _toggletip = require("../../../information/toggletip");

var _line = require("../../../structure/line");

var _excluded = ["children", "tooltip", "tooltipId", "tooltipProps", "labelProps", "link", "tooltipLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldLabel = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(FieldLabel, _Component);

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
        others = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: "k-u-margin-bottom-single"
    }, others), /*#__PURE__*/_react.default.createElement(_line.Line, {
      style: {
        lineHeight: 1
      }
    }, /*#__PURE__*/_react.default.createElement(_line.Line.Item, null, /*#__PURE__*/_react.default.createElement(_label.Label, labelProps, children)), tooltip && /*#__PURE__*/_react.default.createElement(_line.Line.Item, null, /*#__PURE__*/_react.default.createElement(_toggletip.Toggletip, (0, _extends2.default)({
      id: tooltipId,
      bubbleProps: {
        zIndex: 2
      },
      actionLabel: "Help"
    }, tooltipProps), tooltip)), link && /*#__PURE__*/_react.default.createElement(_line.Line.Item, null, link)));
  };

  return FieldLabel;
}(_react.Component);

exports.FieldLabel = FieldLabel;
FieldLabel.propTypes = {
  link: _propTypes.default.node,
  tooltip: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  tooltipProps: _propTypes.default.object
};
FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {}
};