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
exports.Accordeon = void 0;

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.map.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _item = require("./components/item");

var _header = require("./components/header");

var _content = require("./components/content");

var _context = require("./components/context");

var _reactElements = require("../../../../helpers/react/react-elements");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _debounce = require("../../../../helpers/utils/debounce");

var _elementHelper = require("../../../../helpers/dom/element-helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledAccordeon = _styledComponents.default.div.withConfig({
  displayName: "accordeon__StyledAccordeon",
  componentId: "sc-11phwpm-0"
})([".k-Accordeon__item ~ .k-Accordeon__item{margin-top:", ";}.k-Accordeon__header{display:block;margin:0;width:100%;box-sizing:border-box;overflow:visible;background:transparent;border:", " solid ", ";font:inherit;color:inherit;background-color:transparent;cursor:pointer;text-align:left;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}.k-Accordeon__content{", " box-sizing:border-box;visibility:visible;overflow:visible;height:auto;border:", " solid ", ";border-top:0;visibility:visible;opacity:1;max-height:var(--accordeon-content-max-height,unset);&[aria-hidden='true']{visibility:hidden;opacity:0;--accordeon-content-max-height:0 !important;}}&.k-Accordeon--isAnimated .k-Accordeon__header{transition:border 0.4s ease,border-radius 0.4s ease;transition-delay:0s;&[aria-hidden='true']{transition-delay:0.4s;}}&.k-Accordeon--isAnimated .k-Accordeon__content{overflow:hidden;transition:visibility 0s ease,all 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}}@media (prefers-reduced-motion:reduce){&.k-Accordeon--isAnimated{.k-Accordeon__header,.k-Accordeon__content{transition:none !important;}}}&.k-Accordeon--andromeda{.k-Accordeon__header{", " padding:", ";min-height:", ";border-radius:", ";.k-Accordeon__header__arrow{display:none;}}.k-Accordeon__content{background-color:", ";border-bottom-left-radius:", ";border-bottom-right-radius:", ";padding:", " ", ";}.k-Accordeon__content_marger{padding-top:", ";padding-bottom:", ";}}&.k-Accordeon--orion{.k-Accordeon__item{border-radius:", ";}.k-Accordeon__header{position:relative;padding:", " ", " ", " ", ";", " min-height:", ";border-radius:", ";@media (min-width:", "px){min-height:", ";border-radius:", ";}&[aria-expanded='true']{border-bottom-color:", ";}.k-Accordeon__header__arrow{position:absolute;top:0;bottom:0;right:", ";display:flex;align-items:center;}}.k-Accordeon__content{background-color:", ";border-bottom-left-radius:", ";border-bottom-right-radius:", ";padding:", " ", ";@media (min-width:", "px){border-bottom-left-radius:", ";border-bottom-right-radius:", ";}.k-Accordeon__content_marger{padding-bottom:", ";}}}.k-Accordeon__header[aria-expanded='true']{border-bottom-left-radius:0;border-bottom-right-radius:0;}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(3), _colorsConfig.default.background3, (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(0.1), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(30 + 10 + 10), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(8), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), _colorsConfig.default.background1, (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(0.1), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(30));

var Accordeon = function Accordeon(_ref) {
  var closeOnClick = _ref.closeOnClick,
      variant = _ref.variant,
      children = _ref.children,
      selectedItem = _ref.selectedItem,
      isAnimated = _ref.isAnimated,
      id = _ref.id,
      onChange = _ref.onChange;
  var items = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: Accordeon.Item
  });

  var _useState = (0, _react.useState)(selectedItem),
      internalSelectedItem = _useState[0],
      setSelectedItem = _useState[1];

  var _useState2 = (0, _react.useState)(0),
      accordeonWidth = _useState2[0],
      setAccordeonWidth = _useState2[1];

  var debouncedAccordeonWidth = (0, _debounce.useDebounce)(accordeonWidth, 200);
  var accordeonElement = (0, _react.useRef)(null);
  var fakeResizeObserver = {
    observe: function observe() {},
    disconnect: function disconnect() {}
  };
  var accordeonSizeObserver = _elementHelper.domElementHelper.canUseDom() && 'ResizeObserver' in window ? new ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      setAccordeonWidth(entry.contentRect.width);
    });
  }) : fakeResizeObserver;
  (0, _react.useEffect)(function () {
    accordeonSizeObserver.observe((accordeonElement == null ? void 0 : accordeonElement.current) || null);
    return function () {
      return accordeonSizeObserver.disconnect();
    };
  }, [accordeonElement]);

  var updateSelectedItem = function updateSelectedItem(newSelectedItem) {
    var _items$newItem, _items$newItem$props;

    var newItem = closeOnClick && newSelectedItem === internalSelectedItem ? null : newSelectedItem;
    setSelectedItem(newItem);
    onChange(((_items$newItem = items[newItem]) == null ? void 0 : (_items$newItem$props = _items$newItem.props) == null ? void 0 : _items$newItem$props.id) || id + "-" + newItem);
  };

  var context = {
    updateSelectedItem: updateSelectedItem,
    selectedItem: internalSelectedItem,
    componentId: id,
    closeOnClick: closeOnClick,
    accordeonWidth: debouncedAccordeonWidth
  };
  return /*#__PURE__*/_react.default.createElement(StyledAccordeon, {
    className: (0, _classnames.default)('k-Accordeon', "k-Accordeon--" + variant, {
      'k-Accordeon--isAnimated': isAnimated
    }),
    ref: accordeonElement
  }, /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: context
  }, items.map(function (item, index) {
    var elementId = item.props.id || id + "-" + index;
    return /*#__PURE__*/(0, _react.cloneElement)(item, {
      key: elementId,
      id: elementId,
      index: index
    });
  })));
};

exports.Accordeon = Accordeon;
Accordeon.Item = _item.Item;
Accordeon.Header = _header.Header;
Accordeon.Content = _content.Content;
Accordeon.propTypes = {
  selectedItem: _propTypes.default.number,
  onChange: _propTypes.default.func,
  isAnimated: _propTypes.default.bool,
  id: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  closeOnClick: _propTypes.default.bool
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: function onChange() {},
  isAnimated: true,
  id: 'accordeon',
  variant: 'andromeda',
  closeOnClick: false
};