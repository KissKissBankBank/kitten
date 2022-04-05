"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.UserMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

var _classnames = _interopRequireDefault(require("classnames"));

var _dropdownButton = require("./dropdown-button");

var _useDropdown2 = require("../hooks/use-dropdown");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _excluded = ["children", "dropdownContentWidth", "closeEvents", "dropdownAnchorSide", "className", "padding", "mobilePadding"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var namespace = 'kkbbAndCo';
var CLOSE_EVENT = namespace + ":userMenu:close";

var UserMenu = function UserMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      closeEvents = _ref.closeEvents,
      dropdownAnchorSide = _ref.dropdownAnchorSide,
      className = _ref.className,
      padding = _ref.padding,
      mobilePadding = _ref.mobilePadding,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_context.Context),
      id = _useContext.id,
      callOnToggle = _useContext.callOnToggle;

  var buttonChild = (0, _getReactElements.getReactElementsByType)({
    children: children,
    type: UserMenu.Button
  })[0];
  var menuChild = (0, _getReactElements.getReactElementsByType)({
    children: children,
    type: UserMenu.Navigation
  })[0];

  var _useDropdown = (0, _useDropdown2.useDropdown)({
    dropdownContentWidth: dropdownContentWidth,
    callOnToggle: callOnToggle,
    dropdownAnchorSide: dropdownAnchorSide,
    closeEvents: [CLOSE_EVENT].concat(closeEvents),
    buttonId: id + "__UserMenu__Button",
    menuId: id + "__UserMenu__Menu"
  }),
      dropdownProps = _useDropdown.dropdownProps,
      buttonProps = _useDropdown.buttonProps,
      menuProps = _useDropdown.menuProps,
      isDropdownExpanded = _useDropdown.isDropdownExpanded;

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, dropdownProps, props, {
    className: (0, _classnames.default)('k-HeaderNav__UserMenu', className, dropdownProps.className)
  }), /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, (0, _extends2.default)({}, buttonProps, {
    style: {
      '--UserMenu-Button-backgroundColor': buttonChild.props.backgroundColor || null,
      '--UserMenu-Button-backgroundColorHover': buttonChild.props.backgroundColorHover || null,
      '--UserMenu-Button-backgroundColorActive': buttonChild.props.backgroundColorActive || null,
      '--UserMenu-Button-color': buttonChild.props.color || null,
      '--UserMenu-Button-colorHover': buttonChild.props.colorHover || null,
      '--UserMenu-Button-colorActive': buttonChild.props.colorActive || null
    },
    className: (0, _classnames.default)('k-HeaderNav__UserMenuButton', buttonChild.props.className, buttonProps.className)
  }), /*#__PURE__*/(0, _react.cloneElement)(buttonChild), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: isDropdownExpanded ? 'top' : 'bottom',
    className: "k-u-margin-left-single k-u-hidden@xs-down",
    color: "currentColor"
  })), /*#__PURE__*/_react.default.createElement("div", menuProps, /*#__PURE__*/(0, _react.cloneElement)(menuChild)));
};

exports.UserMenu = UserMenu;

UserMenu.Button = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

UserMenu.Navigation = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

UserMenu.propTypes = {
  dropdownContentWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  padding: _propTypes.default.bool,
  mobilePadding: _propTypes.default.bool,
  closeEvents: _propTypes.default.arrayOf(_propTypes.default.string),
  dropdownAnchorSide: _propTypes.default.oneOf(['left', 'right'])
};
UserMenu.defaultProps = {
  dropdownContentWidth: null,
  closeEvents: [],
  dropdownAnchorSide: 'left'
};