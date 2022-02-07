"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DashboardMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _find2 = _interopRequireDefault(require("lodash/fp/find"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _doubleArrowIcon = require("../../graphics/icons/double-arrow-icon");

var _flexWrapper = require("../../layout/flex-wrapper");

var _screenConfig = require("../../../constants/screen-config");

var _excluded = ["className"],
    _excluded2 = ["className", "subList", "hideable"],
    _excluded3 = ["className", "icon", "endIcon", "isActive", "children", "size"],
    _excluded4 = ["className", "children", "icon", "title", "size"],
    _excluded5 = ["className", "children"],
    _excluded6 = ["data", "className"],
    _excluded7 = ["children", "icon", "isActive"],
    _excluded8 = ["icon", "children", "isActive"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var zoomInAndOpacity = (0, _styledComponents.keyframes)(["0%{transform:scaleY(.80);opacity:0;}to{transform:scaleY(1);opacity:1;}"]);
var opacity = (0, _styledComponents.keyframes)(["0%{opacity:0;}to{opacity:1;}"]);

var StyledDashboardMenu = _styledComponents.default.nav.withConfig({
  displayName: "dashboard-menu__StyledDashboardMenu",
  componentId: "sc-1j01p13-0"
})(["color:", ";.k-DashboardMenu__expandable__title,.k-DashboardMenu__item{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color 0.2s ease,background-color 0.2s ease;}&:focus,&:hover{background-color:", " !important;}&:focus{z-index:1;position:relative;}&:focus-visible{outline:auto;}}summary.k-DashboardMenu__selectorSummary,a.k-DashboardMenu__selectorButton{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color 0.2s ease,background-color 0.2s ease;}&[aria-current='page'],&:hover{background-color:", " !important;}&:focus{z-index:1;position:relative;}&:focus-visible{outline:auto;}}.k-DashboardMenu__list,.k-DashboardMenu__expandable__list{margin:0;padding:0;list-style:none;transition:opacity 0.2s ease;}.k-DashboardMenu__list--subList{margin-left:", ";@media ", "{margin-left:", ";margin-right:", ";}}.k-DashboardMenu__expandable summary{list-style:none;&:focus-visible{outline:auto;}&::-webkit-details-marker{display:none;}}.k-DashboardMenu__selectorButton__text,.k-DashboardMenu__item .k-DashboardMenu__item__text,.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text{flex:1 0 0;line-height:1.4;&,*{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;}}.k-DashboardMenu__expandable{border-radius:var(--border-radius-s);background-color:", ";.k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";display:flex;flex-direction:column;gap:", ";}&.k-DashboardMenu__expandable--small .k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";}}.k-DashboardMenu__list{display:flex;flex-direction:column;gap:", ";}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item,.k-DashboardMenu__selectorButton{display:flex;height:", ";align-items:center;gap:", ";padding:0 ", ";border-radius:var(--border-radius-xs);}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable--small .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item--small{height:", ";}.k-DashboardMenu__selectorButton{height:", ";flex:0 0 ", ";}.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item{", " background-color:", ";cursor:pointer;}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title,.k-DashboardMenu__expandable--hasActiveInside .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current='page']{color:", ";background-color:", ";}.k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item{", " line-height:", ";max-width:100%;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&:hover,&:focus,&[aria-current='page']{", " color:", ";}}.k-DashboardMenu__selectorSummary{.k-DashboardMenu__selectorButton__arrow{color:", ";transition:color 0.2s ease;}&:hover,&:focus{.k-DashboardMenu__selectorButton__arrow{color:", ";}}}.k-DashboardMenu__iconWrapper{display:inline-flex;align-items:center;justify-content:center;flex:0 0 ", ";width:", ";height:", ";svg{max-width:", ";max-height:", ";&[fill],d[fill]{transition:fill 0.2s ease-in-out;}}}.k-DashboardMenu__expandable__title__arrow{flex:0 0 auto;padding:", ";svg{display:block;fill:currentColor;transition:transform 0.2s ease-in-out;}}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title__arrow svg{transform:rotate(360deg) !important;}.k-DashboardMenu__separator{margin-top:", ";margin-bottom:", ";hr{border:0;border-top:", " solid rgba(151,151,151,0.2);margin-bottom:", ";}}.k-DashboardMenu__selectorWrapper{position:relative;margin:", " 0 ", ";&[open] .k-DashboardMenu__selectorList{animation:0.16s ease-out ", ";}&::before{display:block;content:'';position:absolute;top:", ";left:", ";right:", ";bottom:", ";border-top-left-radius:var(--border-radius-m);border-top-right-radius:var(--border-radius-m);border:", " solid ", ";border-bottom:0;opacity:0;}&[open]::before{animation:0.16s ease-out ", ";opacity:1;}&[open] + .k-DashboardMenu__list--hideable{opacity:0.5;pointer-events:none;}}.k-DashboardMenu__selectorSummary{position:relative;z-index:1;list-style:none;touch-callout:none;user-select:none;cursor:pointer;padding:0 ", ";height:", ";border-radius:var(--border-radius-xs);::-webkit-details-marker{display:none;}.k-DashboardMenu__selectorSummary__flex{height:100%;align-items:center;}}.k-DashboardMenu__selectorList{position:absolute;z-index:5;display:flex;align-items:stretch;flex-direction:column;gap:", ";top:", ";left:", ";right:", ";max-height:", ";padding:0 ", " ", ";overflow-y:scroll;box-sizing:border-box;background:", ";transform-origin:top left;pointer-events:none;border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);border:", " solid ", ";border-top:0;.k-DashboardMenu__selectorButton{pointer-events:auto;}}"], _colorsConfig.default.font2, _colorsConfig.default.font2, (0, _typography.stepToRem)(-1), _colorsConfig.default.line3, _colorsConfig.default.background1, (0, _typography.stepToRem)(-1), _colorsConfig.default.line3, (0, _typography.pxToRem)(25), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(35), (0, _typography.pxToRem)(40), _colorsConfig.default.line3, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.line3, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(18), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.background1, _colorsConfig.default.font2, _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), zoomInAndOpacity, (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(2), _colorsConfig.default.grey1, opacity, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(70 + 2), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(-5), (0, _typography.pxToRem)(4 * 70 + 3 * 2 + 2 + 3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), _colorsConfig.default.font1, (0, _typography.pxToRem)(2), _colorsConfig.default.grey1);

var DashboardMenu = function DashboardMenu(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledDashboardMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu', className)
  }, props));
};

exports.DashboardMenu = DashboardMenu;

var List = function List(_ref2) {
  var className = _ref2.className,
      subList = _ref2.subList,
      hideable = _ref2.hideable,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__list', className, {
      'k-DashboardMenu__list--subList': !!subList,
      'k-DashboardMenu__list--hideable': !!hideable
    })
  }, props));
};

var Item = function Item(_ref3) {
  var className = _ref3.className,
      icon = _ref3.icon,
      endIcon = _ref3.endIcon,
      isActive = _ref3.isActive,
      children = _ref3.children,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 'default' : _ref3$size,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-DashboardMenu__itemWrapper"
  }, /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__item', className, "k-DashboardMenu__item--" + size),
    "aria-current": isActive ? 'page' : null
  }, props), !!icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, typeof icon === 'function' ? icon() : icon), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__item__text"
  }, children), endIcon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, endIcon)));
};

var Expandable = function Expandable(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      icon = _ref4.icon,
      title = _ref4.title,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 'default' : _ref4$size,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);

  var _useState = (0, _react.useState)(false),
      hasActiveInside = _useState[0],
      setActiveInside = _useState[1];

  (0, _react.useEffect)(function () {
    setActiveInside(false);
    var hasActiveChild = (0, _find2.default)(function (child) {
      var _child$props;

      return child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props.isActive;
    })(children);
    setActiveInside(hasActiveChild);
  });
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-DashboardMenu__expandableWrapper"
  }, /*#__PURE__*/_react.default.createElement("details", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__expandable', className, "k-DashboardMenu__expandable--" + size, {
      'k-DashboardMenu__expandable--hasActiveInside': hasActiveInside
    }),
    open: hasActiveInside ? hasActiveInside : null
  }, props), /*#__PURE__*/_react.default.createElement("summary", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardMenu__expandable__title"
  }, !!icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, typeof icon === 'function' ? icon() : icon), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__expandable__title__text"
  }, title), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__expandable__title__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: "bottom"
  })))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-DashboardMenu__expandable__list"
  }, children)));
};

var Separator = function Separator(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref5, _excluded5);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__separator', className)
  }, props), /*#__PURE__*/_react.default.createElement("hr", null), children);
};

var Selector = function Selector(_ref6) {
  var data = _ref6.data,
      className = _ref6.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref6, _excluded6);
  var detailsElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!!detailsElement.current) {
      detailsElement.current.addEventListener('toggle', handleDetails);
    }

    return function () {
      if (!!detailsElement.current) {
        detailsElement.current.removeEventListener('toggle', handleDetails);
      }
    };
  }, [detailsElement]);

  var handleDetails = function handleDetails(event) {
    if (event.target.open) {
      window.addEventListener('keydown', handleEsc);
      window.addEventListener('click', handleClickOutside);
      event.target.querySelector('.k-DashboardMenu__selectorButton:first-child').focus();
    } else {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('click', handleClickOutside);
    }
  };

  var handleEsc = function handleEsc(event) {
    if (event.key === 'Escape' && detailsElement != null && detailsElement.current) {
      detailsElement.current.open = false;
    }
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (detailsElement != null && detailsElement.current && !detailsElement.current.contains(event.target)) {
      detailsElement.current.open = false;
    }
  };

  if (data.length === 1) {
    var _data$ = data[0],
        children = _data$.children,
        icon = _data$.icon,
        isActive = _data$.isActive,
        dataProps = (0, _objectWithoutPropertiesLoose2.default)(_data$, _excluded7);
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, dataProps, {
      className: (0, _classnames.default)('k-DashboardMenu__selectorButton', 'k-u-margin-top-single', 'k-u-margin-bottom-noneHalf', dataProps.className, className)
    }), !!icon && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-DashboardMenu__iconWrapper"
    }, icon), /*#__PURE__*/_react.default.createElement("span", {
      className: "k-DashboardMenu__selectorButton__text"
    }, children));
  }

  var _find = (0, _find2.default)(function (item) {
    return item.isActive === true;
  })(data),
      activeClassName = _find.className,
      activeIcon = _find.icon,
      activeChildren = _find.children;

  return /*#__PURE__*/_react.default.createElement("details", (0, _extends2.default)({
    ref: detailsElement,
    className: (0, _classnames.default)('k-DashboardMenu__selectorWrapper', className)
  }, props), /*#__PURE__*/_react.default.createElement("summary", {
    className: (0, _classnames.default)('k-DashboardMenu__selectorSummary', activeClassName)
  }, /*#__PURE__*/_react.default.createElement(_flexWrapper.FlexWrapper, {
    gap: 15,
    direction: "row",
    className: "k-DashboardMenu__selectorSummary__flex"
  }, !!activeIcon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, activeIcon), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__selectorButton__text"
  }, activeChildren), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__iconWrapper k-DashboardMenu__selectorButton__arrow"
  }, /*#__PURE__*/_react.default.createElement(_doubleArrowIcon.DoubleArrowIcon, {
    color: "currentColor"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardMenu__selectorList"
  }, data.map(function (_ref7, index) {
    var icon = _ref7.icon,
        children = _ref7.children,
        isActive = _ref7.isActive,
        itemProps = (0, _objectWithoutPropertiesLoose2.default)(_ref7, _excluded8);
    if (isActive) return;
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      key: children + index
    }, itemProps, {
      className: (0, _classnames.default)('k-DashboardMenu__selectorButton', itemProps.className)
    }), !!icon && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-DashboardMenu__iconWrapper"
    }, icon), /*#__PURE__*/_react.default.createElement("span", {
      className: "k-DashboardMenu__selectorButton__text"
    }, children));
  })));
};

Item.proptypes = {
  icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  isActive: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['default', 'small'])
};
Expandable.proptypes = {
  icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  title: _propTypes.default.node,
  size: _propTypes.default.oneOf(['default', 'small'])
};
Selector.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    children: _propTypes.default.node,
    isActive: _propTypes.default.bool,
    icon: _propTypes.default.node
  }))
};
DashboardMenu.List = List;
DashboardMenu.Item = Item;
DashboardMenu.Expandable = Expandable;
DashboardMenu.Separator = Separator;
DashboardMenu.Selector = Selector;