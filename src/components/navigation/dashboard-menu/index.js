"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DashboardMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _find = _interopRequireDefault(require("lodash/fp/find"));

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _doubleArrowIcon = require("../../graphics/icons/double-arrow-icon");

var _flexWrapper = require("../../layout/flex-wrapper");

var _styles = require("./styles");

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

var DashboardMenu = function DashboardMenu(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDashboardMenu, (0, _extends2.default)({
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
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-DashboardMenu__expandableWrapper"
  }, /*#__PURE__*/_react.default.createElement("details", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__expandable', className, "k-DashboardMenu__expandable--" + size)
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

  var activeItem = (0, _find.default)(function (item) {
    return item.isActive;
  })(data);

  var _ref7 = activeItem || {},
      activeClassName = _ref7.className,
      activeIcon = _ref7.icon,
      activeChildren = _ref7.children;

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
  }, data.map(function (_ref8, index) {
    var icon = _ref8.icon,
        children = _ref8.children,
        isActive = _ref8.isActive,
        itemProps = (0, _objectWithoutPropertiesLoose2.default)(_ref8, _excluded8);
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