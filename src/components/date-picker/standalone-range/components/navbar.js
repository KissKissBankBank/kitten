"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _arrowIcon = require("../../../../components/icons/arrow-icon");

var _button = require("../../../../components/buttons/button/button");

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../../components/typography/text");

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "navbar__StyledText",
  componentId: "sc-1v9dr3-0"
})(["margin-top:0;margin-bottom:", ";"], (0, _typography.pxToRem)(10));

var StyledButton = _styledComponents.default.div.withConfig({
  displayName: "navbar__StyledButton",
  componentId: "sc-1v9dr3-1"
})(["position:absolute;display:flex;justify-content:space-between;left:0;right:0;"]);

var StyledArrowIcon = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-1v9dr3-2"
})(["align-items:center;justify-content:center;display:flex;"]);

var Navbar =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Navbar, _PureComponent);

  function Navbar() {
    (0, _classCallCheck2.default)(this, Navbar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Navbar).apply(this, arguments));
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
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(StyledText, {
        tag: "p",
        size: "tiny",
        weight: "regular"
      }, title), _react.default.createElement(StyledButton, {
        className: className
      }, _react.default.createElement(StyledArrowIcon, {
        "aria-label": previousAriaLabel,
        onClick: function onClick() {
          return onPreviousClick();
        },
        icon: true
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        fill: iconColor,
        direction: "left",
        width: "8",
        height: "8"
      })), _react.default.createElement(StyledArrowIcon, {
        "aria-label": nextAriaLabel,
        onClick: function onClick() {
          return onNextClick();
        },
        icon: true
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
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