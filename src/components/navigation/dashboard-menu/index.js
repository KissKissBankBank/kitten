"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DashboardMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _find = _interopRequireDefault(require("lodash/fp/find"));

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _doubleArrowIcon = require("../../graphics/icons/double-arrow-icon");

var _flexWrapper = require("../../layout/flex-wrapper");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DashboardMenu = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDashboardMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu', className)
  }, props));
};

exports.DashboardMenu = DashboardMenu;

const List = _ref2 => {
  let {
    className,
    subList,
    hideable,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__list', className, {
      'k-DashboardMenu__list--subList': !!subList,
      'k-DashboardMenu__list--hideable': !!hideable
    })
  }, props));
};

const Item = _ref3 => {
  let {
    className,
    icon,
    endIcon,
    isActive,
    children,
    size = 'default',
    ...props
  } = _ref3;
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

const Expandable = _ref4 => {
  let {
    className,
    children,
    icon,
    title,
    size = 'default',
    ...props
  } = _ref4;
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

const Separator = _ref5 => {
  let {
    className,
    children,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__separator', className)
  }, props), /*#__PURE__*/_react.default.createElement("hr", null), children);
};

const Selector = _ref6 => {
  let {
    data,
    className,
    ...props
  } = _ref6;
  const detailsElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (!!detailsElement.current) {
      detailsElement.current.addEventListener('toggle', handleDetails);
    }

    return () => {
      if (!!detailsElement.current) {
        detailsElement.current.removeEventListener('toggle', handleDetails);
      }
    };
  }, [detailsElement]);

  const closeSelector = () => {
    detailsElement.current.open = false;
  };

  const handleDetails = event => {
    if (event.target.open) {
      window.addEventListener('keydown', handleEsc);
      window.addEventListener('click', handleClickOutside);
      event.target.querySelector('.k-DashboardMenu__selectorButton:first-child').focus();
    } else {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('click', handleClickOutside);
    }
  };

  const handleEsc = event => {
    if (event.key === 'Escape' && detailsElement != null && detailsElement.current) {
      closeSelector();
    }
  };

  const handleClickOutside = event => {
    if (detailsElement != null && detailsElement.current && !detailsElement.current.contains(event.target)) {
      closeSelector();
    }
  };

  if (data.length === 1) {
    const {
      children,
      icon,
      isActive,
      ...dataProps
    } = data[0];
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, dataProps, {
      className: (0, _classnames.default)('k-DashboardMenu__selectorButton', 'k-u-margin-top-single', 'k-u-margin-bottom-noneHalf', dataProps.className, className)
    }), !!icon && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-DashboardMenu__iconWrapper"
    }, icon), /*#__PURE__*/_react.default.createElement("span", {
      className: "k-DashboardMenu__selectorButton__text"
    }, children));
  }

  const activeItem = (0, _find.default)(item => item.isActive)(data);
  const {
    className: activeClassName,
    icon: activeIcon,
    children: activeChildren
  } = activeItem || {};
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
  }, data.map((_ref7, index) => {
    let {
      icon,
      children,
      isActive,
      onClick,
      ...itemProps
    } = _ref7;
    if (isActive) return;
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      key: children + index
    }, itemProps, {
      className: (0, _classnames.default)('k-DashboardMenu__selectorButton', itemProps.className),
      onClick: e => {
        onClick(e, closeSelector);
      }
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