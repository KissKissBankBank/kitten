"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../layout/marger");

var _label = require("../../../form/label");

var _tooltip = require("../../../tooltips/tooltip");

var _line = require("../../../layout/line");

var FieldLabel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldLabel, _Component);

  function FieldLabel() {
    (0, _classCallCheck2.default)(this, FieldLabel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FieldLabel).apply(this, arguments));
  }

  (0, _createClass2.default)(FieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tooltip = _this$props.tooltip,
          tooltipId = _this$props.tooltipId,
          labelProps = _this$props.labelProps,
          link = _this$props.link,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children", "tooltip", "tooltipId", "labelProps", "link"]);
      return _react.default.createElement(_marger.Marger, (0, _extends2.default)({
        bottom: "1.5"
      }, others), _react.default.createElement(_line.Line, {
        style: {
          lineHeight: 1
        }
      }, _react.default.createElement(_line.Line.Item, null, _react.default.createElement(_label.Label, (0, _extends2.default)({}, labelProps, {
        size: labelProps.size || 'tiny'
      }), children)), tooltip && _react.default.createElement(_line.Line.Item, null, _react.default.createElement(_tooltip.Tooltip, {
        id: tooltipId
      }, tooltip)), link && _react.default.createElement(_line.Line.Item, null, link)));
    }
  }]);
  return FieldLabel;
}(_react.Component);

exports.FieldLabel = FieldLabel;
FieldLabel.propTypes = {
  link: _propTypes.default.node,
  tooltip: _propTypes.default.string,
  labelProps: _propTypes.default.object
};
FieldLabel.defaultProps = {
  tooltip: null,
  labelProps: {}
};