"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.UserMenu = void 0;

require("core-js/modules/es.array.concat.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dropdown = require("./dropdown");

var _context = require("./context");

var _reactElements = require("../../../../helpers/react/react-elements");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "dropdownContentWidth", "padding", "closeEvents", "buttonProps", "className"],
    _excluded2 = ["children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var namespace = 'kkbbAndCo';
var CLOSE_EVENT = namespace + ":userMenu:close";

var UserMenu = function UserMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      padding = _ref.padding,
      closeEvents = _ref.closeEvents,
      buttonProps = _ref.buttonProps,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var userDropdownRef = (0, _react.useRef)(null);

  var getElementById = function getElementById(id) {
    return function () {
      return document.getElementById(id);
    };
  };

  var getButtonId = function getButtonId(id) {
    return id + "UserMenu";
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
  var dropdownClassName = (0, _classnames.default)('k-HeaderNav__UserMenu', namespace + "-UserMenu", className);
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
    'k-HeaderNav__UserMenuButton--noPadding': !padding
  });
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var id = _ref2.id,
        callOnToggle = _ref2.callOnToggle;
    return /*#__PURE__*/_react.default.createElement(_dropdown.Dropdown, (0, _extends2.default)({}, props, {
      button: button,
      buttonClassName: buttonClassName,
      buttonStyles: buttonStyles,
      buttonId: getButtonId(id),
      className: dropdownClassName,
      closeEvents: [CLOSE_EVENT].concat(closeEvents),
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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded2);
  return /*#__PURE__*/_react.default.createElement("div", props, children);
};