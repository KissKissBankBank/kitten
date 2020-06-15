"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _arrowIcon = require("../../../icons/arrow-icon");

var _classnames = _interopRequireDefault(require("classnames"));

var Item = _styledComponents.default.div.withConfig({
  displayName: "button-item__Item",
  componentId: "sc-1xwobvm-0"
})(["display:flex;border:", " solid ", ";border-top:none;cursor:pointer;padding-left:", ";padding-right:", ";background-color:", ";:hover{background-color:", ";}&.k-List__button--withTopBorder{border-top:", " solid ", ";}&[aria-disabled='true']{color:", ";cursor:not-allowed;:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isActive:not([aria-disabled='true']){color:", ";background-color:", ";border-color:", ";:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isFocused:not([aria-disabled='true']){.k-List__button__arrowIcon{left:", ";}}", " .k-List__button__content{flex-grow:1;}.k-List__button__arrow{display:flex;align-items:center;}.k-List__button__arrowIcon{position:relative;left:0;transition:left 0.2s;}"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _colorsConfig.default.background1, _colorsConfig.default.background2, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary2, _colorsConfig.default.background1, (0, _typography.pxToRem)(5), function (_ref) {
  var styles = _ref.styles;
  return styles;
});

var ButtonItem = function ButtonItem(_ref2) {
  var children = _ref2.children,
      disabled = _ref2.disabled,
      style = _ref2.style,
      withTopBorder = _ref2.withTopBorder,
      onClick = _ref2.onClick,
      onKeyPress = _ref2.onKeyPress,
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      onMouseEnter = _ref2.onMouseEnter,
      onMouseLeave = _ref2.onMouseLeave,
      className = _ref2.className,
      hasArrow = _ref2.hasArrow,
      active = _ref2.active,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["children", "disabled", "style", "withTopBorder", "onClick", "onKeyPress", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave", "className", "hasArrow", "active"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var handleKeyPress = function handleKeyPress(event) {
    var enterKey = 13;
    var spaceKey = 32;

    switch (event.which) {
      case enterKey:
      case spaceKey:
        event.preventDefault;
        onClick();
        onKeyPress();
        break;
    }
  };

  var handleFocus = function handleFocus() {
    setFocus(true);
    onFocus();
  };

  var handleBlur = function handleBlur() {
    setFocus(false);
    onBlur();
  };

  var handleMouseEnter = function handleMouseEnter() {
    setFocus(true);
    onMouseEnter();
  };

  var handleMouseLeave = function handleMouseLeave() {
    setFocus(false);
    onMouseLeave();
  };

  return /*#__PURE__*/_react.default.createElement(Item, (0, _extends2.default)({
    role: others.as !== 'a' ? 'button' : null,
    tabIndex: disabled ? '-1' : '0',
    onClick: disabled ? null : onClick,
    onKeyPress: disabled ? null : handleKeyPress,
    onMouseEnter: handleMouseEnter,
    onFocus: handleFocus,
    onMouseLeave: handleMouseLeave,
    onBlur: handleBlur,
    styles: style,
    "aria-disabled": disabled,
    className: (0, _classnames.default)('k-List__button', className, {
      'k-List__button--withTopBorder': withTopBorder,
      'k-List__button--isActive': active,
      'k-List__button--isFocused': focus
    })
  }, others), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-List__button__content"
  }, children), hasArrow && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-List__button__arrow",
    "aria-hidden": true
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-Button__icon k-List__button__arrowIcon"
  })));
};

exports.ButtonItem = ButtonItem;
ButtonItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  style: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  disabled: _propTypes.default.bool,
  withTopBorder: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  hasArrow: _propTypes.default.bool,
  active: _propTypes.default.bool
};
ButtonItem.defaultProps = {
  style: {},
  disabled: false,
  withTopBorder: false,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onKeyPress: function onKeyPress() {},
  hasArrow: true,
  active: false
};