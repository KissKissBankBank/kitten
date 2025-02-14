"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BurgerMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _burgerIcon = require("../../../graphics/icons/burger-icon");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _context = require("./context");

var _classnames = _interopRequireDefault(require("classnames"));

var _useDropdown = require("../hooks/use-dropdown");

var _dropdownButton = require("./dropdown-button");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const namespace = 'kkbbAndCo';
const CLOSE_EVENT = namespace + ":platformMenu:close";

const BurgerMenu = _ref => {
  let {
    children,
    dropdownContentWidth,
    className,
    ...props
  } = _ref;
  const {
    id,
    callOnToggle
  } = (0, _react.useContext)(_context.Context);
  const {
    dropdownProps,
    buttonProps,
    menuProps,
    isDropdownExpanded
  } = (0, _useDropdown.useDropdown)({
    dropdownContentWidth,
    callOnToggle,
    dropdownAnchorSide: 'left',
    closeEvents: [CLOSE_EVENT],
    buttonId: id + "PlateformMenu",
    menuId: id + "PlateformMenu__content"
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, dropdownProps, props, {
    className: (0, _classnames.default)(className, dropdownProps.className)
  }), /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, (0, _extends2.default)({}, buttonProps, {
    className: (0, _classnames.default)(buttonProps.className, 'k-HeaderNav__BurgerMenu__button')
  }), /*#__PURE__*/_react.default.createElement(_burgerIcon.BurgerIcon, {
    isActive: isDropdownExpanded,
    hoverColor: _colorsConfig.default.font1,
    "aria-hidden": "true"
  }), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, "Menu")), /*#__PURE__*/_react.default.createElement("div", menuProps, children));
};

exports.BurgerMenu = BurgerMenu;