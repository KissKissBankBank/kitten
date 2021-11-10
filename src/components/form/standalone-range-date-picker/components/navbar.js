"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _arrowIcon = require("../../../../components/graphics/icons/arrow-icon");

var _button = require("../../../../components/molecules/buttons/button");

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/atoms/typography/text");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "navbar__StyledText",
  componentId: "s8n4n7-0"
})(["margin-top:0;margin-bottom:", ";"], (0, _typography.pxToRem)(10));

var StyledButton = _styledComponents.default.div.withConfig({
  displayName: "navbar__StyledButton",
  componentId: "s8n4n7-1"
})(["position:absolute;display:flex;justify-content:space-between;left:0;right:0;"]);

var StyledArrowIcon = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "s8n4n7-2"
})(["align-items:center;justify-content:center;display:flex;"]);

var Navbar = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Navbar, _PureComponent);

  var _super = _createSuper(Navbar);

  function Navbar() {
    (0, _classCallCheck2.default)(this, Navbar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onNextClick = _this$props.onNextClick,
          onPreviousClick = _this$props.onPreviousClick,
          className = _this$props.className,
          iconColor = _this$props.iconColor,
          title = _this$props.title,
          labels = _this$props.labels,
          previousMonth = _this$props.previousMonth,
          nextMonth = _this$props.nextMonth,
          months = _this$props.months;
      var previousAriaLabel = months !== undefined && months.length > 0 ? "".concat(labels && labels.previousMonth, ", ").concat(months[previousMonth.getMonth()], " ").concat(previousMonth.getFullYear()) : "".concat(labels && labels.previousMonth);
      var nextAriaLabel = months !== undefined && months.length > 0 ? "".concat(labels && labels.nextMonth, ", ").concat(months[nextMonth.getMonth()], " ").concat(nextMonth.getFullYear()) : "".concat(labels && labels.nextMonth);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledText, {
        tag: "p",
        size: "tiny",
        weight: "regular"
      }, title), /*#__PURE__*/_react.default.createElement(StyledButton, {
        className: className
      }, /*#__PURE__*/_react.default.createElement(StyledArrowIcon, {
        "aria-label": previousAriaLabel,
        onClick: function onClick() {
          return onPreviousClick();
        },
        fit: "icon"
      }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        fill: iconColor,
        direction: "left",
        width: "8",
        height: "8"
      })), /*#__PURE__*/_react.default.createElement(StyledArrowIcon, {
        "aria-label": nextAriaLabel,
        onClick: function onClick() {
          return onNextClick();
        },
        fit: "icon"
      }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        fill: iconColor,
        direction: "right",
        width: "8",
        height: "8"
      }))));
    }
  }]);
  return Navbar;
}(_react.PureComponent);

exports.Navbar = Navbar;