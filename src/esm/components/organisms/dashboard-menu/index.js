import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';
import find from 'lodash/fp/find';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ArrowIcon } from '../../../components/graphics/icons/arrow-icon';
import { DoubleArrowIcon } from '../../../components/graphics/icons/double-arrow-icon';
import { FlexWrapper } from '../../../components/layout/flex-wrapper';
import { mq } from '../../../constants/screen-config';
var zoomInAndOpacity = keyframes(["0%{transform:scaleY(.80);opacity:0;}to{transform:scaleY(1);opacity:1;}"]);
var opacity = keyframes(["0%{opacity:0;}to{opacity:1;}"]);
var StyledDashboardMenu = styled.nav.withConfig({
  displayName: "dashboard-menu__StyledDashboardMenu",
  componentId: "xypcm1-0"
})(["color:", ";.k-DashboardMenu__expandable__title,.k-DashboardMenu__item{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color 0.2s ease,background-color 0.2s ease;}&:focus,&:hover{background-color:", " !important;}&:focus{z-index:1;position:relative;}&:focus-visible{outline:auto;}}summary.k-DashboardMenu__selectorSummary,a.k-DashboardMenu__selectorButton{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color 0.2s ease,background-color 0.2s ease;}&[aria-current='page'],&:hover{background-color:", " !important;}&:focus{z-index:1;position:relative;}&:focus-visible{outline:auto;}}.k-DashboardMenu__list,.k-DashboardMenu__expandable__list{margin:0;padding:0;list-style:none;transition:opacity 0.2s ease;}.k-DashboardMenu__list--subList{margin-left:", ";@media ", "{margin-left:", ";margin-right:", ";}}.k-DashboardMenu__expandable summary{list-style:none;&:focus-visible{outline:auto;}&::-webkit-details-marker{display:none;}}.k-DashboardMenu__selectorButton__text,.k-DashboardMenu__item .k-DashboardMenu__item__text,.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text{flex:1 0 0;line-height:1.4;&,*{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;}}.k-DashboardMenu__expandable{border-radius:var(--border-radius-s);background-color:", ";.k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";display:flex;flex-direction:column;gap:", ";}&.k-DashboardMenu__expandable--small .k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";}}.k-DashboardMenu__list{display:flex;flex-direction:column;gap:", ";}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item,.k-DashboardMenu__selectorButton{display:flex;height:", ";align-items:center;gap:", ";padding:0 ", ";border-radius:var(--border-radius-xs);}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable--small .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item--small{height:", ";}.k-DashboardMenu__selectorButton{height:", ";flex:0 0 ", ";}.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item{", " background-color:", ";cursor:pointer;}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title,.k-DashboardMenu__expandable--hasActiveInside .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current='page']{color:", ";background-color:", ";}.k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item{", " line-height:", ";max-width:100%;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&:hover,&:focus,&[aria-current='page']{", " color:", ";}}.k-DashboardMenu__selectorSummary{.k-DashboardMenu__selectorButton__arrow{color:", ";transition:color 0.2s ease;}&:hover,&:focus{.k-DashboardMenu__selectorButton__arrow{color:", ";}}}.k-DashboardMenu__iconWrapper{display:inline-flex;align-items:center;justify-content:center;flex:0 0 ", ";width:", ";height:", ";svg{max-width:", ";max-height:", ";&[fill],d[fill]{transition:fill 0.2s ease-in-out;}}}.k-DashboardMenu__expandable__title__arrow{flex:0 0 auto;padding:", ";svg{display:block;fill:currentColor;transition:transform 0.2s ease-in-out;}}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title__arrow svg{transform:rotate(360deg) !important;}.k-DashboardMenu__separator{margin-top:", ";margin-bottom:", ";hr{border:0;border-top:", " solid rgba(151,151,151,0.2);margin-bottom:", ";}}.k-DashboardMenu__selectorWrapper{position:relative;margin:", " 0 ", ";&[open] .k-DashboardMenu__selectorList{animation:0.16s ease-out ", ";}&::before{display:block;content:'';position:absolute;top:", ";left:", ";right:", ";bottom:", ";border-top-left-radius:var(--border-radius-m);border-top-right-radius:var(--border-radius-m);border:", " solid ", ";border-bottom:0;opacity:0;}&[open]::before{animation:0.16s ease-out ", ";opacity:1;}&[open] + .k-DashboardMenu__list--hideable{opacity:0.5;pointer-events:none;}}.k-DashboardMenu__selectorSummary{position:relative;z-index:1;list-style:none;touch-callout:none;user-select:none;cursor:pointer;padding:0 ", ";height:", ";border-radius:var(--border-radius-xs);::-webkit-details-marker{display:none;}.k-DashboardMenu__selectorSummary__flex{height:100%;align-items:center;}}.k-DashboardMenu__selectorList{position:absolute;z-index:5;display:flex;align-items:stretch;flex-direction:column;gap:", ";top:", ";left:", ";right:", ";max-height:", ";padding:0 ", " ", ";overflow-y:scroll;box-sizing:border-box;background:", ";transform-origin:top left;pointer-events:none;border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);border:", " solid ", ";border-top:0;.k-DashboardMenu__selectorButton{pointer-events:auto;}}"], COLORS.font2, COLORS.font2, stepToRem(-1), COLORS.line3, COLORS.background1, stepToRem(-1), COLORS.line3, pxToRem(25), mq.tabletAndDesktop, pxToRem(35), pxToRem(40), COLORS.line3, pxToRem(10), pxToRem(20), pxToRem(60), pxToRem(10), pxToRem(10), pxToRem(20), pxToRem(50), pxToRem(2), pxToRem(50), pxToRem(15), pxToRem(15), pxToRem(40), pxToRem(70), pxToRem(70), TYPOGRAPHY.fontStyles.regular, COLORS.font1, COLORS.background1, COLORS.line3, TYPOGRAPHY.fontStyles.light, pxToRem(18), TYPOGRAPHY.fontStyles.regular, COLORS.background1, COLORS.font2, COLORS.background1, pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(5), pxToRem(10), pxToRem(5), pxToRem(1), pxToRem(15), pxToRem(10), pxToRem(5), zoomInAndOpacity, pxToRem(-5), pxToRem(-5), pxToRem(-5), pxToRem(-5), pxToRem(2), COLORS.grey1, opacity, pxToRem(15), pxToRem(70), pxToRem(2), pxToRem(70 + 2), pxToRem(-5), pxToRem(-5), pxToRem(4 * 70 + 3 * 2 + 2 + 3), pxToRem(3), pxToRem(3), COLORS.font1, pxToRem(2), COLORS.grey1);
export var DashboardMenu = function DashboardMenu(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(StyledDashboardMenu, _extends({
    className: classNames('k-DashboardMenu', className)
  }, props));
};

var List = function List(_ref2) {
  var className = _ref2.className,
      subList = _ref2.subList,
      hideable = _ref2.hideable,
      props = _objectWithoutProperties(_ref2, ["className", "subList", "hideable"]);

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
      props = _objectWithoutProperties(_ref3, ["className", "icon", "endIcon", "isActive", "children", "size"]);

  return /*#__PURE__*/React.createElement("li", {
    className: "k-DashboardMenu__itemWrapper"
  }, /*#__PURE__*/React.createElement("a", _extends({
    className: classNames('k-DashboardMenu__item', className, "k-DashboardMenu__item--".concat(size)),
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
      props = _objectWithoutProperties(_ref4, ["className", "children", "icon", "title", "size"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasActiveInside = _useState2[0],
      setActiveInside = _useState2[1];

  useEffect(function () {
    setActiveInside(false);
    var hasActiveChild = find(function (child) {
      var _child$props;

      return child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.isActive;
    })(children);
    setActiveInside(hasActiveChild);
  });
  return /*#__PURE__*/React.createElement("li", {
    className: "k-DashboardMenu__expandableWrapper"
  }, /*#__PURE__*/React.createElement("details", _extends({
    className: classNames('k-DashboardMenu__expandable', className, "k-DashboardMenu__expandable--".concat(size), {
      'k-DashboardMenu__expandable--hasActiveInside': hasActiveInside
    }),
    open: hasActiveInside ? hasActiveInside : null
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
      props = _objectWithoutProperties(_ref5, ["className", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DashboardMenu__separator', className)
  }, props), /*#__PURE__*/React.createElement("hr", null), children);
};

var Selector = function Selector(_ref6) {
  var data = _ref6.data,
      className = _ref6.className,
      props = _objectWithoutProperties(_ref6, ["data", "className"]);

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
    if (event.key === 'Escape' && detailsElement !== null && detailsElement !== void 0 && detailsElement.current) {
      detailsElement.current.open = false;
    }
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (detailsElement !== null && detailsElement !== void 0 && detailsElement.current && !detailsElement.current.contains(event.target)) {
      detailsElement.current.open = false;
    }
  };

  if (data.length === 1) {
    var _data$ = data[0],
        children = _data$.children,
        icon = _data$.icon,
        isActive = _data$.isActive,
        dataProps = _objectWithoutProperties(_data$, ["children", "icon", "isActive"]);

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
        itemProps = _objectWithoutProperties(_ref7, ["icon", "children", "isActive"]);

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