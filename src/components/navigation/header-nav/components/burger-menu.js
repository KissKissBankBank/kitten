"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerMenu = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _burgerIcon = require("../../../../components/icons/burger-icon");

var _dropdown = require("../../../../components/dropdowns/v2/dropdown");

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _context = require("./context");

var _classnames = _interopRequireDefault(require("classnames"));

var namespace = 'kkbbAndCo';
var DROPDOWN_CLASS = "".concat(namespace, "-PlatformMenu");
var CLOSE_EVENT = "".concat(namespace, ":platformMenu:close");

var ButtonIcon = function ButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_burgerIcon.BurgerIcon, (0, _extends2.default)({}, props, {
    hoverColor: _colorsConfig.default.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  })), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, "Menu"));
};

var buttonClassNames = (0, _classnames.default)('k-Dropdown__button', 'k-ButtonIcon', 'k-ButtonIcon--tiny');

var BurgerMenu = function BurgerMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "dropdownContentWidth"]);
  var dropdownComponent = (0, _react.useRef)(null);

  var getElementById = function getElementById(id) {
    return function () {
      return document.getElementById(id);
    };
  };

  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var id = _ref2.id,
        callOnToggle = _ref2.callOnToggle;
    return /*#__PURE__*/_react.default.createElement(_dropdown.Dropdown, (0, _extends2.default)({}, props, {
      buttonClassName: buttonClassNames,
      buttonContentOnCollapsed: /*#__PURE__*/_react.default.createElement(ButtonIcon, {
        isAnimatedOnHover: true
      }),
      buttonContentOnExpanded: /*#__PURE__*/_react.default.createElement(ButtonIcon, {
        isActive: true
      }),
      buttonId: "".concat(id, "PlateformMenu"),
      className: DROPDOWN_CLASS,
      closeEvents: [CLOSE_EVENT],
      closeOnOuterClick: true,
      dropdownContent: children,
      dropdownContentWidth: dropdownContentWidth,
      onToggle: callOnToggle,
      positionedVerticallyWith: getElementById(id),
      positionedWithBorder: true,
      ref: dropdownComponent,
      refreshEvents: ['resize']
    }));
  });
};

exports.BurgerMenu = BurgerMenu;