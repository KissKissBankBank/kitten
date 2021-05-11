"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dropdown = require("./dropdown");

var _context = require("./context");

var _reactElements = require("../../../../helpers/react/react-elements");

var _classnames = _interopRequireDefault(require("classnames"));

var namespace = 'kkbbAndCo';
var DROPDOWN_CLASS = "".concat(namespace, "-UserMenu k-HeaderNav__UserMenu");
var CLOSE_EVENT = "".concat(namespace, ":userMenu:close");

var UserMenu = function UserMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      padding = _ref.padding,
      closeEvents = _ref.closeEvents,
      buttonProps = _ref.buttonProps,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "dropdownContentWidth", "padding", "closeEvents", "buttonProps"]);
  var userDropdownRef = (0, _react.useRef)(null);

  var getElementById = function getElementById(id) {
    return function () {
      return document.getElementById(id);
    };
  };

  var getButtonId = function getButtonId(id) {
    return "".concat(id, "UserMenu");
  };

  var button = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: UserMenu.Button
  })[0];
  var navigation = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: UserMenu.Navigation
  })[0];
  var _button$props = button.props,
      hasArrow = _button$props.hasArrow,
      backgroundColor = _button$props.backgroundColor,
      backgroundColorHover = _button$props.backgroundColorHover,
      backgroundColorActive = _button$props.backgroundColorActive,
      color = _button$props.color,
      colorHover = _button$props.colorHover,
      colorActive = _button$props.colorActive;
  var buttonStyles = {
    '--UserMenu-Button-backgroundColor': backgroundColor,
    '--UserMenu-Button-backgroundColorHover': backgroundColorHover,
    '--UserMenu-Button-backgroundColorActive': backgroundColorActive,
    '--UserMenu-Button-color': color,
    '--UserMenu-Button-colorHover': colorHover,
    '--UserMenu-Button-colorActive': colorActive
  };
  var buttonClassName = (0, _classnames.default)('k-HeaderNav__UserMenuButton', {
    'k-HeaderNav__UserMenuButton--hasArrow': hasArrow,
    'k-HeaderNav__UserMenuButton--nopadding': !padding
  }, props.className);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var id = _ref2.id,
        callOnToggle = _ref2.callOnToggle;
    return /*#__PURE__*/_react.default.createElement(_dropdown.Dropdown, (0, _extends2.default)({}, props, {
      button: button,
      buttonClassName: buttonClassName,
      buttonStyles: buttonStyles,
      buttonId: getButtonId(id),
      className: DROPDOWN_CLASS,
      closeEvents: [CLOSE_EVENT].concat((0, _toConsumableArray2.default)(closeEvents)),
      closeOnOuterClick: true,
      dropdownContent: navigation,
      dropdownContentWidth: dropdownContentWidth,
      hasArrow: hasArrow,
      keepInitialButtonAction: true,
      onToggle: callOnToggle,
      positionedHorizontallyWith: getElementById(getButtonId(id)),
      positionedVerticallyWith: getElementById(id),
      ref: userDropdownRef,
      refreshEvents: ['resize']
    }));
  });
};

exports.UserMenu = UserMenu;
UserMenu.propTypes = {
  dropdownContentWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  padding: _propTypes.default.bool,
  closeEvents: _propTypes.default.arrayOf(_propTypes.default.string),
  hasArrow: _propTypes.default.bool
};
UserMenu.defaultProps = {
  dropdownContentWidth: null,
  padding: true,
  closeEvents: [],
  hasArrow: false
};

UserMenu.Button = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

UserMenu.Navigation = function (_ref4) {
  var children = _ref4.children,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["children"]);
  return /*#__PURE__*/_react.default.createElement("div", props, children);
};