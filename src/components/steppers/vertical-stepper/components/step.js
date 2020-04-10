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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Step = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Step, _Component);

  var _super = _createSuper(Step);

  function Step() {
    (0, _classCallCheck2.default)(this, Step);
    return _super.apply(this, arguments);
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
      return /*#__PURE__*/_react.default.createElement(StyledItem, null, /*#__PURE__*/_react.default.createElement(StyledLink, (0, _extends2.default)({
        as: other.href ? 'a' : 'span'
      }, other), /*#__PURE__*/_react.default.createElement(_status.Status, (0, _extends2.default)({
        success: success,
        valid: valid,
        error: error,
        waiting: waiting,
        disabled: disabled
      }, statusProps)), /*#__PURE__*/_react.default.createElement(StyledContent, {
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
})(["margin ", " 0;"], (0, _typography.pxToRem)(30));

var StyledLink = _styledComponents.default.a.withConfig({
  displayName: "step__StyledLink",
  componentId: "sc-1you76f-1"
})(["display:inline-flex;", ""], function (_ref) {
  var as = _ref.as,
      onClick = _ref.onClick;
  return (as === 'a' || onClick) && (0, _styledComponents.css)(["cursor:pointer;text-decoration:none;.", "{transition:transform 0.4s;}.", "{transition:color 0.4s;}:hover,:focus,:active{.", "{transform:translateX(", ");}.", "{color:", ";}}"], _index.STEP_CLASSNAME, _index.LINK_CLASSNAME, _index.STEP_CLASSNAME, (0, _typography.pxToRem)(5), _index.LINK_CLASSNAME, _colorsConfig.default.primary3);
});

var StyledContent = _styledComponents.default.div.withConfig({
  displayName: "step__StyledContent",
  componentId: "sc-1you76f-2"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;color:", ";", ""], _colorsConfig.default.font1, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.font2);
});