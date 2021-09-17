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
exports.BurgerMenu = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _burgerIcon = require("../../../../components/graphics/icons/burger-icon");

var _dropdown = require("./dropdown");

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _context = require("./context");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["children", "dropdownContentWidth"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var namespace = 'kkbbAndCo';
var DROPDOWN_CLASS = namespace + "-PlatformMenu";
var CLOSE_EVENT = namespace + ":platformMenu:close";

var ButtonIcon = function ButtonIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_burgerIcon.BurgerIcon, (0, _extends2.default)({}, props, {
    hoverColor: _colorsConfig.default.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  })), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, "Menu"));
};

var buttonClassNames = (0, _classnames.default)('k-HeaderNav__BurgerMenu__button', 'k-ButtonIcon', 'k-ButtonIcon--tiny');

var BurgerMenu = function BurgerMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
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
      buttonId: id + "PlateformMenu",
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