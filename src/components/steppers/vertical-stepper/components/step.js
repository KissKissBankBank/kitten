"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _status = require("./status");

var _index = require("../index");

var Step =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Step, _Component);

  function Step() {
    (0, _classCallCheck2.default)(this, Step);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Step).apply(this, arguments));
  }

  (0, _createClass2.default)(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          success = _this$props.success,
          valid = _this$props.valid,
          error = _this$props.error,
          waiting = _this$props.waiting,
          disabled = _this$props.disabled,
          statusProps = _this$props.statusProps,
          children = _this$props.children,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["success", "valid", "error", "waiting", "disabled", "statusProps", "children"]);
      return _react.default.createElement(StyledItem, null, _react.default.createElement(StyledLink, (0, _extends2.default)({
        as: other.href ? 'a' : 'span'
      }, other), _react.default.createElement(_status.Status, (0, _extends2.default)({
        success: success,
        valid: valid,
        error: error,
        waiting: waiting,
        disabled: disabled
      }, statusProps)), _react.default.createElement(StyledContent, {
        error: error,
        disabled: disabled,
        className: _index.STEP_CLASSNAME
      }, children)));
    }
  }]);
  return Step;
}(_react.Component);

exports.Step = Step;
Step.propTypes = {
  href: _propTypes.default.string,
  valid: _propTypes.default.bool,
  success: _propTypes.default.bool,
  error: _propTypes.default.bool,
  waiting: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
Step.defaultProps = {
  href: null,
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false
};

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "sc-1you76f-0"
})(["margin ", " 0 ", ";"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(28));

var StyledLink = _styledComponents.default.a.withConfig({
  displayName: "step__StyledLink",
  componentId: "sc-1you76f-1"
})(["display:inline-flex;", ""], function (_ref) {
  var as = _ref.as;
  return as === 'a' && (0, _styledComponents.css)(["cursor:pointer;text-decoration:none;.", "{transition:transform 0.4s;}.", "{transition:color 0.4s;}:hover,:focus,:active{.", "{transform:translateX(", ");}.", "{color:", ";}}"], _index.STEP_CLASSNAME, _index.LINK_CLASSNAME, _index.STEP_CLASSNAME, (0, _typography.pxToRem)(5), _index.LINK_CLASSNAME, _colorsConfig.default.primary3);
});

var StyledContent = _styledComponents.default.div.withConfig({
  displayName: "step__StyledContent",
  componentId: "sc-1you76f-2"
})(["display:flex;flex-direction:column;justify-content:center;color:", ";", ""], _colorsConfig.default.font1, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.font2);
});