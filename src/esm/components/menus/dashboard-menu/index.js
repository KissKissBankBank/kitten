import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import find from 'lodash/fp/find';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
var StyledDashboardMenu = styled.nav.withConfig({
  displayName: "dashboard-menu__StyledDashboardMenu",
  componentId: "prb1iz-0"
})(["color:", ";.k-DashboardMenu__expandable__title,.k-DashboardMenu__item{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color .2s ease,background-color .2s ease;}&:focus,&:hover{background-color:", " !important;}&:focus{outline:", " solid ", ";outline-offset:", ";}}.k-DashboardMenu__list,.k-DashboardMenu__expandable__list{margin:0;padding:0;list-style:none;}.k-DashboardMenu__expandable summary{list-style:none;&:focus{outline:", " solid ", ";outline-offset:", ";}&::-webkit-details-marker{display:none;}}.k-DashboardMenu__item .k-DashboardMenu__item__text,.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text{flex:1 0 auto;}.k-DashboardMenu__expandable{border-radius:", ";background-color:", ";.k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";display:flex;flex-direction:column;gap:", ";}}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item{display:flex;height:", ";align-items:center;gap:", ";padding:0 ", ";border-radius:", ";}.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item{", " background-color:", ";cursor:pointer;}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title,.k-DashboardMenu__expandable--hasActiveInside .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current=\"page\"]{color:", ";background-color:", ";}.k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item{", " line-height:", ";&:hover,&:focus,&[aria-current=\"page\"]{", " color:", ";}}.k-DashboardMenu__iconWrapper{display:inline-flex;width:", ";height:", ";align-items:center;justify-content:center;svg{max-width:", ";max-height:", ";&[fill],d[fill]{transition:fill .2s ease-in-out;}}}.k-DashboardMenu__expandable__title__arrow{flex:0 0 auto;padding:", ";svg{display:block;fill:currentColor;transition:transform .2s ease-in-out;}}[open] .k-DashboardMenu__expandable__title__arrow svg{transform:rotate(360deg) !important;}"], COLORS.font2, COLORS.font2, stepToRem(-1), COLORS.line3, COLORS.primary3, pxToRem(2), pxToRem(2), COLORS.primary3, pxToRem(2), pxToRem(2), pxToRem(6), COLORS.line3, pxToRem(40), pxToRem(20), pxToRem(60), pxToRem(10), pxToRem(50), pxToRem(10), pxToRem(10), pxToRem(6), TYPOGRAPHY.fontStyles.regular, COLORS.font1, COLORS.background1, COLORS.line3, TYPOGRAPHY.fontStyles.light, pxToRem(18), TYPOGRAPHY.fontStyles.regular, COLORS.background1, pxToRem(40), pxToRem(40), pxToRem(25), pxToRem(25), pxToRem(5));
export var DashboardMenu = function DashboardMenu(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(StyledDashboardMenu, {
    className: classNames('k-DashboardMenu', className)
  }, /*#__PURE__*/React.createElement("ul", _extends({
    className: "k-DashboardMenu__list"
  }, props)));
};

var Item = function Item(_ref2) {
  var className = _ref2.className,
      icon = _ref2.icon,
      isActive = _ref2.isActive,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["className", "icon", "isActive", "children"]);

  return /*#__PURE__*/React.createElement("li", {
    className: "k-DashboardMenu__itemWrapper"
  }, /*#__PURE__*/React.createElement("a", _extends({
    className: classNames('k-DashboardMenu__item', className),
    "aria-current": isActive ? 'page' : null
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, icon()), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__item__text"
  }, children)));
};

var Expandable = function Expandable(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      icon = _ref3.icon,
      title = _ref3.title,
      props = _objectWithoutProperties(_ref3, ["className", "children", "icon", "title"]);

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
    className: classNames('k-DashboardMenu__expandable', className, {
      'k-DashboardMenu__expandable--hasActiveInside': hasActiveInside
    }),
    open: hasActiveInside ? hasActiveInside : null
  }, props), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardMenu__expandable__title"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, icon()), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__expandable__title__text"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__expandable__title__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    version: "solid",
    direction: "bottom"
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "k-DashboardMenu__expandable__list"
  }, children)));
};

Item.proptypes = {
  icon: PropTypes.func,
  isActive: PropTypes.bool
};
Expandable.proptypes = {
  icon: PropTypes.func,
  title: PropTypes.node
};
DashboardMenu.Item = Item;
DashboardMenu.Expandable = Expandable;