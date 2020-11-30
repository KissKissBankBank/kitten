import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridCol } from '../../../components/grid/grid';
import { VerticalStroke } from '../../../components/layout/vertical-stroke';
import { ScreenConfig } from '../../../constants/screen-config';
import { debounce } from '../../../helpers/utils/debounce';
import { pxToRem } from '../../../helpers/utils/typography';
import styled from 'styled-components';
var strokeHeight = 80;
var marginStroke = 2;
var tabletGutter = 50 / 2;
var desktopGutter = 40 / 2;
var StyledTriptych = styled(function (_ref) {
  var secondElementMarginTop = _ref.secondElementMarginTop,
      props = _objectWithoutProperties(_ref, ["secondElementMarginTop"]);

  return /*#__PURE__*/React.createElement(Grid, props);
}).withConfig({
  displayName: "triptych__StyledTriptych",
  componentId: "sc-1o1v3w8-0"
})([".k-Triptych__verticalStroke{display:block;height:", ";margin:0 auto ", ";@media (max-width:", "px){height:", ";}}.k-Triptych__contentColumn.k-Triptych__contentColumn--odd{@media (min-width:", "px){margin-top:-", ";}}.k-Triptych__contentColumn:nth-last-child(3){margin-bottom:", ";@media (min-width:", ") and (max-width:", "){padding-left:", ";}@media (min-width:", "){margin-bottom:0;padding-right:", ";}}.k-Triptych__contentColumn:nth-last-child(2){margin-bottom:", ";@media (min-width:", ") and (max-width:", "){transition:margin-top 500 ease;margin-top:", ";padding-right:", ";}@media (min-width:", "){margin-bottom:0;padding-right:", ";padding-left:", ";}}.k-Triptych__contentColumn:nth-last-child(1){@media (min-width:", ") and (max-width:", "){padding-left:", ";}@media (min-width:", "){padding-left:", ";}}"], pxToRem(strokeHeight), pxToRem(20), ScreenConfig.S.max, pxToRem(50), ScreenConfig.L.min, pxToRem(strokeHeight * 2 / 3 + marginStroke * 10), pxToRem(50), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.M.max), pxToRem(tabletGutter), pxToRem(ScreenConfig.L.min), pxToRem(desktopGutter), pxToRem(50), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.M.max), function (_ref2) {
  var secondElementMarginTop = _ref2.secondElementMarginTop;
  return pxToRem(-secondElementMarginTop);
}, pxToRem(tabletGutter), pxToRem(ScreenConfig.L.min), pxToRem(desktopGutter), pxToRem(desktopGutter), pxToRem(ScreenConfig.M.min), pxToRem(ScreenConfig.M.max), pxToRem(tabletGutter), pxToRem(ScreenConfig.L.min), pxToRem(desktopGutter));
export var Triptych = function Triptych(_ref3) {
  var title = _ref3.title,
      item1 = _ref3.item1,
      item2 = _ref3.item2,
      item3 = _ref3.item3;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      secondElementMarginTop = _useState2[0],
      setsecondElementMarginTop = _useState2[1];

  var titleElement = useRef(null);
  var firstElement = useRef(null);

  var updateSecondCardMargin = function updateSecondCardMargin() {
    var titleHeight = titleElement.current.clientHeight;
    var firstHeight = firstElement.current.clientHeight;
    setsecondElementMarginTop(firstHeight - titleHeight);
  };

  var debounceUpdateMargin = function debounceUpdateMargin() {
    return debounce(updateSecondCardMargin, 200);
  };

  useEffect(function () {
    debounceUpdateMargin();
    window.addEventListener('resize', debounceUpdateMargin());
    window.addEventListener('load', debounceUpdateMargin());
    return function () {
      window.removeEventListener('resize', debounceUpdateMargin());
      window.removeEventListener('load', debounceUpdateMargin());
    };
  }, []);
  return /*#__PURE__*/React.createElement(StyledTriptych, {
    className: "k-Triptych k-u-align-center",
    secondElementMarginTop: secondElementMarginTop
  }, /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "10",
    "offset-l": "1",
    "col-m": "6",
    "offset-m": "0"
  }, /*#__PURE__*/React.createElement("div", {
    ref: titleElement
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-u-margin-bottom-double"
  }, title), /*#__PURE__*/React.createElement(VerticalStroke, {
    size: "huge",
    className: "k-Triptych__verticalStroke k-u-margin-bottom-double"
  }))), /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn k-Triptych__contentColumn--odd"
  }, /*#__PURE__*/React.createElement("div", {
    ref: firstElement
  }, item1)), /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn"
  }, item2), /*#__PURE__*/React.createElement(GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn k-Triptych__contentColumn--odd"
  }, item3));
};
Triptych.propTypes = {
  title: PropTypes.node.isRequired,
  item1: PropTypes.node.isRequired,
  item2: PropTypes.node.isRequired,
  item3: PropTypes.node.isRequired
};