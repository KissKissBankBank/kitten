import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"],
    _excluded2 = ["className", "subList", "hideable"],
    _excluded3 = ["className", "icon", "endIcon", "isActive", "children", "size"],
    _excluded4 = ["className", "children", "icon", "title", "size"],
    _excluded5 = ["className", "children"],
    _excluded6 = ["data", "className"],
    _excluded7 = ["children", "icon", "isActive"],
    _excluded8 = ["icon", "children", "isActive"];
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import find from 'lodash/fp/find';
import { ArrowIcon } from '../../graphics/icons/arrow-icon';
import { DoubleArrowIcon } from '../../graphics/icons/double-arrow-icon';
import { FlexWrapper } from '../../layout/flex-wrapper';
import { StyledDashboardMenu } from './styles';
export var DashboardMenu = function DashboardMenu(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledDashboardMenu, _extends({
    className: classNames('k-DashboardMenu', className)
  }, props));
};

var List = function List(_ref2) {
  var className = _ref2.className,
      subList = _ref2.subList,
      hideable = _ref2.hideable,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-DashboardMenu__list', className, {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("li", {
    className: "k-DashboardMenu__itemWrapper"
  }, /*#__PURE__*/React.createElement("a", _extends({
    className: classNames('k-DashboardMenu__item', className, "k-DashboardMenu__item--" + size),
    "aria-current": isActive ? 'page' : null
  }, props), !!icon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, typeof icon === 'function' ? icon() : icon), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__item__text"
  }, children), endIcon && /*#__PURE__*/React.createElement("span", {
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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("li", {
    className: "k-DashboardMenu__expandableWrapper"
  }, /*#__PURE__*/React.createElement("details", _extends({
    className: classNames('k-DashboardMenu__expandable', className, "k-DashboardMenu__expandable--" + size)
  }, props), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardMenu__expandable__title"
  }, !!icon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, typeof icon === 'function' ? icon() : icon), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__expandable__title__text"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__expandable__title__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: "bottom"
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "k-DashboardMenu__expandable__list"
  }, children)));
};

var Separator = function Separator(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DashboardMenu__separator', className)
  }, props), /*#__PURE__*/React.createElement("hr", null), children);
};

var Selector = function Selector(_ref6) {
  var data = _ref6.data,
      className = _ref6.className,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded6);

  var detailsElement = useRef(null);
  useEffect(function () {
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
        dataProps = _objectWithoutPropertiesLoose(_data$, _excluded7);

    return /*#__PURE__*/React.createElement("div", _extends({}, dataProps, {
      className: classNames('k-DashboardMenu__selectorButton', 'k-u-margin-top-single', 'k-u-margin-bottom-noneHalf', dataProps.className, className)
    }), !!icon && /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__iconWrapper"
    }, icon), /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__selectorButton__text"
    }, children));
  }

  var _find = find(function (item) {
    return item.isActive === true;
  })(data),
      activeClassName = _find.className,
      activeIcon = _find.icon,
      activeChildren = _find.children;

  return /*#__PURE__*/React.createElement("details", _extends({
    ref: detailsElement,
    className: classNames('k-DashboardMenu__selectorWrapper', className)
  }, props), /*#__PURE__*/React.createElement("summary", {
    className: classNames('k-DashboardMenu__selectorSummary', activeClassName)
  }, /*#__PURE__*/React.createElement(FlexWrapper, {
    gap: 15,
    direction: "row",
    className: "k-DashboardMenu__selectorSummary__flex"
  }, !!activeIcon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, activeIcon), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__selectorButton__text"
  }, activeChildren), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper k-DashboardMenu__selectorButton__arrow"
  }, /*#__PURE__*/React.createElement(DoubleArrowIcon, {
    color: "currentColor"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardMenu__selectorList"
  }, data.map(function (_ref7, index) {
    var icon = _ref7.icon,
        children = _ref7.children,
        isActive = _ref7.isActive,
        itemProps = _objectWithoutPropertiesLoose(_ref7, _excluded8);

    if (isActive) return;
    return /*#__PURE__*/React.createElement("a", _extends({
      key: children + index
    }, itemProps, {
      className: classNames('k-DashboardMenu__selectorButton', itemProps.className)
    }), !!icon && /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__iconWrapper"
    }, icon), /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__selectorButton__text"
    }, children));
  })));
};

Item.proptypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small'])
};
Expandable.proptypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  title: PropTypes.node,
  size: PropTypes.oneOf(['default', 'small'])
};
Selector.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node,
    isActive: PropTypes.bool,
    icon: PropTypes.node
  }))
};
DashboardMenu.List = List;
DashboardMenu.Item = Item;
DashboardMenu.Expandable = Expandable;
DashboardMenu.Separator = Separator;
DashboardMenu.Selector = Selector;