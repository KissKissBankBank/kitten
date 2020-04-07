"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dropdown = _interopRequireDefault(require("../../../../components/dropdowns/v2/dropdown"));

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
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "dropdownContentWidth", "padding"]);
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
  var buttonClassName = (0, _classnames.default)('k-HeaderNav__UserMenuButton', {
    'k-HeaderNav__UserMenuButton--nopadding': !padding
  }, props.className);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var id = _ref2.id,
        callOnToggle = _ref2.callOnToggle;
    return /*#__PURE__*/_react.default.createElement(_dropdown.default, (0, _extends2.default)({}, props, {
      button: button,
      buttonClassName: buttonClassName,
      buttonId: getButtonId(id),
      className: DROPDOWN_CLASS,
      closeEvents: [CLOSE_EVENT],
      closeOnOuterClick: true,
      dropdownContent: navigation,
      dropdownContentWidth: dropdownContentWidth,
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
  dropdownContentWidth: _propTypes.default.string,
  padding: _propTypes.default.bool
};
UserMenu.defaultProps = {
  dropdownContentWidth: null,
  padding: true
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