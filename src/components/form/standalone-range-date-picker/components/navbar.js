"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Navbar = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _button = require("../../../action/button");

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../typography/text");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "navbar__StyledText",
  componentId: "sc-s8n4n7-0"
})(["margin-top:0;margin-bottom:", ";"], (0, _typography.pxToRem)(10));

var StyledButton = _styledComponents.default.div.withConfig({
  displayName: "navbar__StyledButton",
  componentId: "sc-s8n4n7-1"
})(["position:absolute;display:flex;justify-content:space-between;left:0;right:0;"]);

var StyledArrowIcon = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-s8n4n7-2"
})(["align-items:center;justify-content:center;display:flex;"]);

var Navbar = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(Navbar, _PureComponent);

  function Navbar() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
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
    var previousAriaLabel = months !== undefined && months.length > 0 ? (labels && labels.previousMonth) + ", " + months[previousMonth.getMonth()] + " " + previousMonth.getFullYear() : "" + (labels && labels.previousMonth);
    var nextAriaLabel = months !== undefined && months.length > 0 ? (labels && labels.nextMonth) + ", " + months[nextMonth.getMonth()] + " " + nextMonth.getFullYear() : "" + (labels && labels.nextMonth);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledText, {
      tag: "p",
      size: "small",
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
  };

  return Navbar;
}(_react.PureComponent);

exports.Navbar = Navbar;