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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _arrowIcon = require("../../../icons/arrow-icon");

var Item = _styledComponents.default.div.withConfig({
  displayName: "button-item__Item",
  componentId: "sc-1xwobvm-0"
})(["display:flex;border:", " solid ", ";border-top:none;cursor:pointer;padding-left:", ";padding-right:", ";:hover{background-color:", ";}", " ", " ", ""], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _colorsConfig.default.background2, function (_ref) {
  var withTopBorder = _ref.withTopBorder;
  return withTopBorder && (0, _styledComponents.css)(["border-top:", " solid ", ";"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(["color:", ";background-color:", ";cursor:not-allowed;:hover{background-color:", ";}"], _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.background1);
}, function (_ref3) {
  var styles = _ref3.styles;
  return styles;
});

var Content = _styledComponents.default.div.withConfig({
  displayName: "button-item__Content",
  componentId: "sc-1xwobvm-1"
})(["flex-grow:1;"]);

var Arrow = _styledComponents.default.div.withConfig({
  displayName: "button-item__Arrow",
  componentId: "sc-1xwobvm-2"
})(["display:flex;align-items:center;"]);

var ArrowIcon = (0, _styledComponents.default)(function (_ref4) {
  var focus = _ref4.focus,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["focus"]);
  return _react.default.createElement(_arrowIcon.ArrowIcon, props);
}).withConfig({
  displayName: "button-item__ArrowIcon",
  componentId: "sc-1xwobvm-3"
})(["position:relative;left:0;transition:left 0.2s;", " ", ""], function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled && (0, _styledComponents.css)(["fill:", ";"], _colorsConfig.default.line2);
}, function (_ref6) {
  var disabled = _ref6.disabled,
      focus = _ref6.focus;
  return !disabled && focus && (0, _styledComponents.css)(["left:", ";"], (0, _typography.pxToRem)(5));
});

var ButtonItem = function ButtonItem(_ref7) {
  var children = _ref7.children,
      disabled = _ref7.disabled,
      style = _ref7.style,
      withTopBorder = _ref7.withTopBorder,
      onClick = _ref7.onClick,
      onKeyPress = _ref7.onKeyPress,
      onFocus = _ref7.onFocus,
      onBlur = _ref7.onBlur,
      onMouseEnter = _ref7.onMouseEnter,
      onMouseLeave = _ref7.onMouseLeave,
      others = (0, _objectWithoutProperties2.default)(_ref7, ["children", "disabled", "style", "withTopBorder", "onClick", "onKeyPress", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]);

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

  return _react.default.createElement(Item, (0, _extends2.default)({
    role: others.as !== 'a' ? 'button' : null,
    tabIndex: disabled ? '-1' : '0',
    onClick: disabled ? null : onClick,
    onKeyPress: disabled ? null : handleKeyPress,
    onMouseEnter: handleMouseEnter,
    onFocus: handleFocus,
    onMouseLeave: handleMouseLeave,
    onBlur: handleBlur,
    styles: style,
    disabled: disabled,
    "aria-disabled": disabled,
    withTopBorder: withTopBorder
  }, others), _react.default.createElement(Content, null, children), _react.default.createElement(Arrow, null, _react.default.createElement(ArrowIcon, {
    className: "k-Button__icon",
    focus: focus,
    disabled: disabled
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
  onKeyPress: _propTypes.default.func
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
  onKeyPress: function onKeyPress() {}
};