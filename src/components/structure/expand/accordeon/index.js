"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Accordeon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isArray = _interopRequireDefault(require("lodash/fp/isArray"));

var _remove = _interopRequireDefault(require("lodash/fp/remove"));

var _item = require("./components/item");

var _header = require("./components/header");

var _content = require("./components/content");

var _context = require("./components/context");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _useDebounce = require("../../../../helpers/hooks/use-debounce");

var _elementHelper = require("../../../../helpers/dom/element-helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledAccordeon = _styledComponents.default.div.withConfig({
  displayName: "accordeon__StyledAccordeon",
  componentId: "sc-pplp01-0"
})([".k-Accordeon__item{border-radius:var(--border-radius-m);}.k-Accordeon__item ~ .k-Accordeon__item{margin-top:", ";}.k-Accordeon__item:hover{.k-Accordeon__header,.k-Accordeon__content{border-color:var(--color-grey-500);}}.k-Accordeon__item.k-Accordeon__item--expanded{.k-Accordeon__header,.k-Accordeon__content{border-color:var(--color-grey-900);}}.k-Accordeon__header{display:block;position:relative;min-height:", ";margin:0;width:100%;box-sizing:border-box;overflow:visible;padding:", " ", " ", " ", ";background:transparent;border:var(--border);border-radius:var(--border-radius-m);", " color:inherit;cursor:pointer;text-align:left;@media (min-width:", "px){min-height:", ";}&[aria-expanded='true']{border-bottom-color:", " !important;}.k-Accordeon__header__arrow{position:absolute;top:0;bottom:0;right:", ";display:flex;align-items:center;}&:hover:active{border-color:var(--color-grey-900);}}.k-Accordeon__content{", " box-sizing:border-box;visibility:visible;overflow:visible;height:auto;padding:", " ", ";background-color:", ";border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);border:var(--border);border-top:0;visibility:visible;opacity:1;max-height:var(--accordeon-content-max-height,unset);&[aria-hidden='true']{visibility:hidden;opacity:0;--accordeon-content-max-height:0 !important;}.k-Accordeon__content_marger{padding-bottom:", ";}}&.k-Accordeon--isAnimated .k-Accordeon__header{transition:border 0.4s ease,border-radius 0.4s ease;transition-delay:0s;&[aria-hidden='true']{transition-delay:0.4s;}}&.k-Accordeon--isAnimated .k-Accordeon__content{overflow:hidden;transition:visibility 0s ease,all 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}}@media (prefers-reduced-motion:reduce){&.k-Accordeon--isAnimated{.k-Accordeon__header,.k-Accordeon__content{transition:none !important;}}}.k-Accordeon__header[aria-expanded='true']{border-bottom-left-radius:0;border-bottom-right-radius:0;}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(30 + 10 + 10), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles['500'], _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(70), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(0.1), (0, _typography.pxToRem)(30), _colorsConfig.default.background1, (0, _typography.pxToRem)(30));

const Accordeon = _ref => {
  let {
    closeOnClick,
    children,
    selectedItem,
    isAnimated,
    id,
    onChange,
    className,
    multiple,
    ...props
  } = _ref;
  const items = (0, _getReactElements.getReactElementsByType)({
    children,
    type: Accordeon.Item
  });
  const [internalSelectedItem, setSelectedItem] = (0, _react.useState)((0, _isArray.default)(selectedItem) ? selectedItem : [selectedItem]);
  const [accordeonWidth, setAccordeonWidth] = (0, _react.useState)(0);
  const debouncedAccordeonWidth = (0, _useDebounce.useDebounce)(accordeonWidth, 200);
  const accordeonElement = (0, _react.useRef)(null);
  const fakeResizeObserver = {
    observe: () => {},
    disconnect: () => {}
  };
  const accordeonSizeObserver = _elementHelper.domElementHelper.canUseDom() && 'ResizeObserver' in window ? new ResizeObserver(entries => {
    entries.forEach(entry => {
      setAccordeonWidth(entry.contentRect.width);
    });
  }) : fakeResizeObserver;
  (0, _react.useEffect)(() => {
    accordeonSizeObserver.observe((accordeonElement == null ? void 0 : accordeonElement.current) || null);
    return () => accordeonSizeObserver.disconnect();
  }, [accordeonElement]);

  const updateSelectedItem = newSelectedItem => {
    let newItem;
    let ids;

    if (multiple) {
      newItem = internalSelectedItem.includes(newSelectedItem) ? (0, _remove.default)(el => el === newSelectedItem)(internalSelectedItem) : [...internalSelectedItem, newSelectedItem];
      ids = items.filter((_, index) => newItem.includes(index)).map(item => {
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

  const context = {
    updateSelectedItem,
    selectedItem: internalSelectedItem,
    componentId: id,
    closeOnClick,
    accordeonWidth: debouncedAccordeonWidth
  };
  return /*#__PURE__*/_react.default.createElement(StyledAccordeon, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon', className, {
      'k-Accordeon--isAnimated': isAnimated
    }),
    ref: accordeonElement
  }, props), /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: context
  }, items.map((item, index) => {
    const elementId = item.props.id || id + "-" + index;
    return /*#__PURE__*/(0, _react.cloneElement)(item, {
      key: elementId,
      id: elementId,
      index
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
  closeOnClick: _propTypes.default.bool,
  multiple: _propTypes.default.bool
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: () => {},
  isAnimated: true,
  id: 'accordeon',
  closeOnClick: false,
  multiple: false
};