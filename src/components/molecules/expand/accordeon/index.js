"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Accordeon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isArray = _interopRequireDefault(require("lodash/fp/isArray"));

var _remove = _interopRequireDefault(require("lodash/fp/remove"));

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

var _excluded = ["closeOnClick", "variant", "children", "selectedItem", "isAnimated", "id", "onChange", "className", "multiple"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledAccordeon = _styledComponents.default.div.withConfig({
  displayName: "accordeon__StyledAccordeon",
  componentId: "sc-11phwpm-0"
})([".k-Accordeon__item ~ .k-Accordeon__item{margin-top:", ";}.k-Accordeon__header{display:block;margin:0;width:100%;box-sizing:border-box;overflow:visible;background:transparent;border:var(--border);font:inherit;color:inherit;background-color:transparent;cursor:pointer;text-align:left;}.k-Accordeon__content{", " box-sizing:border-box;visibility:visible;overflow:visible;height:auto;border:var(--border);border-top:0;visibility:visible;opacity:1;max-height:var(--accordeon-content-max-height,unset);&[aria-hidden='true']{visibility:hidden;opacity:0;--accordeon-content-max-height:0 !important;}}&.k-Accordeon--isAnimated .k-Accordeon__header{transition:border 0.4s ease,border-radius 0.4s ease;transition-delay:0s;&[aria-hidden='true']{transition-delay:0.4s;}}&.k-Accordeon--isAnimated .k-Accordeon__content{overflow:hidden;transition:visibility 0s ease,all 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}}@media (prefers-reduced-motion:reduce){&.k-Accordeon--isAnimated{.k-Accordeon__header,.k-Accordeon__content{transition:none !important;}}}&.k-Accordeon--andromeda{.k-Accordeon__header{", " padding:", ";min-height:", ";border-radius:var(--border-radius-xs);.k-Accordeon__header__arrow{display:none;}}.k-Accordeon__content{background-color:", ";border-bottom-left-radius:var(--border-radius-xs);border-bottom-right-radius:var(--border-radius-xs);padding:", " ", ";}.k-Accordeon__content_marger{padding-top:", ";padding-bottom:", ";}}&.k-Accordeon--orion{.k-Accordeon__item{border-radius:var(--border-radius-m);}.k-Accordeon__header{position:relative;padding:", " ", " ", " ", ";", " min-height:", ";border-radius:var(--border-radius-m);@media (min-width:", "px){min-height:", ";}&[aria-expanded='true']{border-bottom-color:", ";}.k-Accordeon__header__arrow{position:absolute;top:0;bottom:0;right:", ";display:flex;align-items:center;}}.k-Accordeon__content{background-color:", ";border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);padding:", " ", ";.k-Accordeon__content_marger{padding-bottom:", ";}}}.k-Accordeon__header[aria-expanded='true']{border-bottom-left-radius:0;border-bottom-right-radius:0;}"], (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles.light, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), _colorsConfig.default.background3, (0, _typography.pxToRem)(0.1), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(30 + 10 + 10), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(50), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(70), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), _colorsConfig.default.background1, (0, _typography.pxToRem)(0.1), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30));

var Accordeon = function Accordeon(_ref) {
  var closeOnClick = _ref.closeOnClick,
      variant = _ref.variant,
      children = _ref.children,
      selectedItem = _ref.selectedItem,
      isAnimated = _ref.isAnimated,
      id = _ref.id,
      onChange = _ref.onChange,
      className = _ref.className,
      multiple = _ref.multiple,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var items = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: Accordeon.Item
  });

  var _useState = (0, _react.useState)((0, _isArray.default)(selectedItem) ? selectedItem : [selectedItem]),
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
    var newItem;
    var ids;

    if (multiple) {
      newItem = internalSelectedItem.includes(newSelectedItem) ? (0, _remove.default)(function (el) {
        return el === newSelectedItem;
      })(internalSelectedItem) : [].concat(internalSelectedItem, [newSelectedItem]);
      ids = items.filter(function (_, index) {
        return newItem.includes(index);
      }).map(function (item) {
        var _item$props;

        return (_item$props = item.props) == null ? void 0 : _item$props.id;
      });
    } else {
      var _items$newItem$, _items$newItem$$props;

      newItem = closeOnClick && internalSelectedItem.includes(newSelectedItem) ? [] : [newSelectedItem];
      ids = ((_items$newItem$ = items[newItem[0]]) == null ? void 0 : (_items$newItem$$props = _items$newItem$.props) == null ? void 0 : _items$newItem$$props.id) || id + "-" + newItem;
    }

    setSelectedItem(newItem);
    onChange(ids);
  };

  var context = {
    updateSelectedItem: updateSelectedItem,
    selectedItem: internalSelectedItem,
    componentId: id,
    closeOnClick: closeOnClick,
    accordeonWidth: debouncedAccordeonWidth
  };
  return /*#__PURE__*/_react.default.createElement(StyledAccordeon, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon', className, "k-Accordeon--" + variant, {
      'k-Accordeon--isAnimated': isAnimated
    }),
    ref: accordeonElement
  }, props), /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
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
  selectedItem: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.array]),
  onChange: _propTypes.default.func,
  isAnimated: _propTypes.default.bool,
  id: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  closeOnClick: _propTypes.default.bool,
  multiple: _propTypes.default.bool
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: function onChange() {},
  isAnimated: true,
  id: 'accordeon',
  variant: 'orion',
  closeOnClick: false,
  multiple: false
};